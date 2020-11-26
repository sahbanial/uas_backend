import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as expressValidator from 'express-validator';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as bluebird from 'bluebird';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql';
import { AuthRouter } from './routes';
import Token from './tools/token';
import { UserRole } from './tools/constant';
import { getUserByToken } from './helpers/function';
import StuartRouter from './routes/stuart';
//import { getUserByToken } from './helpers/function';
//ANCHOR conexion mongoose database
class Server {
	public app: express.Application;
	constructor() {
		dotenv.config();
		this.app = express();
		this.connectMongoDB();
		this.config();
		this.setupRoutes();
		this.setupGraphQL();
		//console.log(process.env.PORT)
	}

	private connectMongoDB() {
		const mongoUrl = process.env.MONGOOSE_URI_CONNECTION;
		(mongoose as any).Promise = bluebird;
		mongoose
			.connect(mongoUrl, {
				useCreateIndex: true,
				useNewUrlParser: true,
				useFindAndModify: false,
				useUnifiedTopology: true
			})
			.then(() => {
				/** ready to use. The `mongoose.connect()` promise resolves to undefined. */

				console.log('Connected to database');
			})
			.catch(err => {
				console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
				// process.exit();
			});
	}
	private setupRoutes() {
		this.app.use(process.env.AUTH_ENDPOINT, AuthRouter);
	
		this.app.use(process.env.GRAPHQL_ENDPOINT, (req, res, next) => {
			const token = req.headers.authorization;
			Token.ensure(token).then(() => next()).catch(message =>
				res.status(401).json({
					success: false,
					code: 401,
					message
				})
			);
		});
	}
	private setupGraphQL() {
		const server = new ApolloServer({
			schema,
			context: async ({ req }) => {

				const user = await getUserByToken(req.headers.authorization);
				console.log("user,user")
				return { user, token: req.headers.authorization, role: (user as any)?.role ?? UserRole.VISITOR };
			}
		});
		server.applyMiddleware({ app: this.app, path: process.env.GRAPHQL_ENDPOINT });
	}

	private config() {
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(bodyParser.json());
		this.app.use(cookieParser());
		this.app.use(logger('dev'));
		//this.app.use(expressValidator());
		this.app.use(helmet());
		this.app.use(compression());
		this.app.use(cors());
	}
}
export default new Server().app;
