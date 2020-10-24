/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./errorMessages.ts":
/*!**************************!*\
  !*** ./errorMessages.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst errorsMessages = {\n    invalidEmail: \"L'adresse email n'est pas valide \",\n    userNotFound: 'Utilisateur introuvable ',\n    accountAlReadyExists: 'Ces identifiants existent déjà ',\n    isNotAnImage: 'Veuillez choisir une image ',\n    auth: {\n        userNotFound: 'Utilisateur introuvable ',\n        invalidPassword: \"Ce mot de passe n'est pas valide \",\n        incorrectPassword: 'Mot de passe incorrecte ',\n        invalidConf: 'Les mots de passe ne sont pas identiques ',\n        invalidCode: 'Code incorrecte ',\n        unAuthorized: 'Accès non autorisé',\n        emailAlreadyUsed: 'Adresse email déjà utilisée '\n    },\n    product: {\n        productNotFound: \"Produit n'existe pas \"\n    },\n    payment: {\n        cardNotValid: 'Données de la carte non valide'\n    },\n    command: {\n        commandNotFound: \"Commande n'est pas existe\",\n        stuart: {\n            createdJobError: 'stuart error create job',\n            notValidJob: 'stuart not valid job '\n        }\n    }\n};\nexports.default = errorsMessages;\n\n\n//# sourceURL=webpack:///./errorMessages.ts?");

/***/ }),

/***/ "./src/graphql/directiveResolvers/index.ts":
/*!*************************************************!*\
  !*** ./src/graphql/directiveResolvers/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nexports.default = {\n    auth: (next, source, { roles }, { user }) => roles.includes(user.role) ? next() : new apollo_server_express_1.AuthenticationError(\"UnAuthorized\")\n};\n\n\n//# sourceURL=webpack:///./src/graphql/directiveResolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/index.ts":
/*!******************************!*\
  !*** ./src/graphql/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_tools_1 = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\nconst resolvers_1 = __webpack_require__(/*! ./resolvers */ \"./src/graphql/resolvers/index.ts\");\nconst typeDefs_1 = __webpack_require__(/*! ./typeDefs */ \"./src/graphql/typeDefs/index.ts\");\nconst directiveResolvers_1 = __webpack_require__(/*! ./directiveResolvers */ \"./src/graphql/directiveResolvers/index.ts\");\nexports.default = graphql_tools_1.makeExecutableSchema({\n    typeDefs: typeDefs_1.default,\n    resolvers: resolvers_1.default,\n    directiveResolvers: directiveResolvers_1.default,\n    logger: {\n        log: message => {\n            //console.log(\"Logger: \", message);\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/graphql/index.ts?");

/***/ }),

/***/ "./src/graphql/pubsub/index.ts":
/*!*************************************!*\
  !*** ./src/graphql/pubsub/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ \"graphql-subscriptions\");\nconst instance = new graphql_subscriptions_1.PubSub();\ninstance.ee.setMaxListeners(10e1000000);\nexports.default = instance;\n\n\n//# sourceURL=webpack:///./src/graphql/pubsub/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/index.ts":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nconst mutations_1 = __webpack_require__(/*! ./mutations */ \"./src/graphql/resolvers/mutations/index.ts\");\nconst queries_1 = __webpack_require__(/*! ./queries */ \"./src/graphql/resolvers/queries/index.ts\");\nconst subscriptions_1 = __webpack_require__(/*! ./subscriptions */ \"./src/graphql/resolvers/subscriptions/index.ts\");\nconst nestedResolvers_1 = __webpack_require__(/*! ./nestedResolvers */ \"./src/graphql/resolvers/nestedResolvers/index.ts\");\nexports.default = Object.assign({ Query: queries_1.default,\n    Mutation: mutations_1.default,\n    Subscription: subscriptions_1.default, Upload: apollo_server_express_1.GraphQLUpload }, nestedResolvers_1.default);\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/formations/index.ts":
/*!*************************************************************!*\
  !*** ./src/graphql/resolvers/mutations/formations/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    addFormation: (root, { input }) => new Promise((resolve, reject) => {\n        const { name, description, file } = input;\n        let inputs = { name, description };\n        new models_1.FormationModel(Object.assign({}, inputs)).save((err, res) => {\n            resolve(res);\n        });\n    }),\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/formations/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/mutations/index.ts":
/*!**************************************************!*\
  !*** ./src/graphql/resolvers/mutations/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst formations_1 = __webpack_require__(/*! ./formations */ \"./src/graphql/resolvers/mutations/formations/index.ts\");\nexports.default = Object.assign({}, formations_1.default);\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/mutations/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/nestedResolvers/index.ts":
/*!********************************************************!*\
  !*** ./src/graphql/resolvers/nestedResolvers/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/nestedResolvers/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/formations/index.ts":
/*!***********************************************************!*\
  !*** ./src/graphql/resolvers/queries/formations/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst models_1 = __webpack_require__(/*! ../../../../models */ \"./src/models/index.ts\");\nexports.default = {\n    getFormations: (root, {}) => new Promise((resolve, reject) => {\n        models_1.FormationModel.find({}).then(forms => {\n            resolve(forms);\n        });\n    })\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/formations/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/index.ts":
/*!************************************************!*\
  !*** ./src/graphql/resolvers/queries/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst news_1 = __webpack_require__(/*! ./news */ \"./src/graphql/resolvers/queries/news/index.ts\");\nconst formations_1 = __webpack_require__(/*! ./formations */ \"./src/graphql/resolvers/queries/formations/index.ts\");\nexports.default = Object.assign(Object.assign({}, news_1.default), formations_1.default);\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/queries/news/index.ts":
/*!*****************************************************!*\
  !*** ./src/graphql/resolvers/queries/news/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {\n    getNews: () => {\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/queries/news/index.ts?");

/***/ }),

/***/ "./src/graphql/resolvers/subscriptions/index.ts":
/*!******************************************************!*\
  !*** ./src/graphql/resolvers/subscriptions/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = {};\n\n\n//# sourceURL=webpack:///./src/graphql/resolvers/subscriptions/index.ts?");

/***/ }),

/***/ "./src/graphql/typeDefs/index.ts":
/*!***************************************!*\
  !*** ./src/graphql/typeDefs/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst userType = fs.readFileSync('./src/graphql/typeDefs/user.graphql', 'utf-8');\nconst newsType = fs.readFileSync('./src/graphql/typeDefs/news.graphql', 'utf-8');\nconst formation = fs.readFileSync('./src/graphql/typeDefs/formation.graphql', 'utf-8');\nconst schema = fs.readFileSync('./src/graphql/typeDefs/schema.graphql', 'utf-8');\nconst graphql = ''.concat(userType, newsType, formation, schema);\nexports.default = graphql;\n\n\n//# sourceURL=webpack:///./src/graphql/typeDefs/index.ts?");

/***/ }),

/***/ "./src/graphql/util/constants.ts":
/*!***************************************!*\
  !*** ./src/graphql/util/constants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SubscriptionFire = {\n    COMMAND_UPDATED: 'COMMAND_UPDATED',\n    COMMAND_ADDED: 'COMMAND_ADDED'\n};\n\n\n//# sourceURL=webpack:///./src/graphql/util/constants.ts?");

/***/ }),

/***/ "./src/graphql/util/populateFields.ts":
/*!********************************************!*\
  !*** ./src/graphql/util/populateFields.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.populateFields = {\n    clients: ['profile'],\n    client: ['profile'],\n    florists: ['profile'],\n    command: {\n        clientFlorist: [\n            { path: 'client', populate: [{ path: 'profile' }] },\n            { path: 'florist', populate: [{ path: 'profile' }] }\n        ],\n        clientFloristProducts: [\n            { path: 'florist', populate: [{ path: 'profile' }] },\n            { path: 'client', populate: [{ path: 'profile' }] },\n            { path: 'products.product' }\n        ]\n    },\n    florist: {\n        profile: [{ path: 'profile' }]\n    }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/util/populateFields.ts?");

/***/ }),

/***/ "./src/helpers/function.ts":
/*!*********************************!*\
  !*** ./src/helpers/function.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst token_1 = __webpack_require__(/*! ../tools/token */ \"./src/tools/token.ts\");\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nconst constant_1 = __webpack_require__(/*! ../tools/constant */ \"./src/tools/constant.ts\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst getUserModelByRole = () => {\n    return null;\n};\nexports.getUserByToken = token => {\n    return new Promise((resolve, reject) => {\n        token_1.default.ensure(token)\n            .then(payload => {\n            switch (payload.role) {\n                case constant_1.UserRole.CLIENT:\n                    models_1.ClientModel.findOne({ profile: payload.id }).populate('profile').then(client => resolve(client));\n                    break;\n                case constant_1.UserRole.FLORIST:\n                // FloristModel.findOne({ profile: (payload as any).id })\n                // \t.populate('profile')\n                // \t.then(florist => resolve(florist));\n                // break;\n                case constant_1.UserRole.ADMIN:\n                    {\n                        models_1.AdminModel.findOne({ profile: payload.id }).populate('profile').then(admin => {\n                            resolve(admin);\n                        });\n                    }\n                    break;\n                default:\n                    resolve(payload);\n            }\n        })\n            .catch(err => reject(err));\n    });\n};\nconst upload = (stream, filePath) => {\n    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {\n        stream\n            .pipe(fs_1.createWriteStream(filePath))\n            .on(\"error\", (e) => reject(e.message))\n            .on(\"finish\", () => resolve(`${process.env.MEDIA_ENDPOINT}`));\n    }));\n};\nexports.uploadFile = (file, path, id = null, oldPath = null) => {\n    console.log(file);\n    return new Promise((resolve, reject) => {\n        Promise.resolve(file)\n            .then(({ createReadStream, mimetype }) => {\n            const stream = createReadStream();\n            //const filePath = `${PUBLIC_PATH}/images/${subPath}/${id}.${extension}`;\n            //if (!mimetype.startsWith('image')) return reject('isNotAnImage');\n            if (oldPath)\n                exports.removeFile(oldPath, () => {\n                    upload(stream, path)\n                        .then((link) => console.log(link))\n                        .catch((e) => reject(e));\n                });\n            else\n                upload(stream, path)\n                    .then((link) => resolve(link))\n                    .catch((e) => reject(e));\n        })\n            .catch((e) => reject(e.message));\n    });\n};\nexports.removeFile = (path, cb = null) => {\n    fs_1.default.unlink(`.${path}`, () => {\n        if (cb)\n            cb();\n    });\n};\nexports.getRandom = (min, max) => {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\n\n//# sourceURL=webpack:///./src/helpers/function.ts?");

/***/ }),

/***/ "./src/helpers/moment.js":
/*!*******************************!*\
  !*** ./src/helpers/moment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ \"moment-timezone\");\n/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);\nvar moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst fr = 'France/Paris';\nconst tn = 'Africa/Tunis';\n/* harmony default export */ __webpack_exports__[\"default\"] = (moment.tz.setDefault(fr));\n\n\n//# sourceURL=webpack:///./src/helpers/moment.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst http_1 = __webpack_require__(/*! http */ \"http\");\nconst graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nconst server_1 = __webpack_require__(/*! ./server */ \"./src/server.ts\");\nconst subscriptions_transport_ws_1 = __webpack_require__(/*! subscriptions-transport-ws */ \"subscriptions-transport-ws\");\nconst graphql_2 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\nconst function_1 = __webpack_require__(/*! ./helpers/function */ \"./src/helpers/function.ts\");\nconst ws = http_1.createServer(server_1.default);\nws\n    .listen(process.env.PORT, () => {\n    console.log(`Server listening at port ${process.env.PORT} ...`);\n})\n    .on('listening', () => {\n    console.log('Subscription is listing....');\n    new subscriptions_transport_ws_1.SubscriptionServer({\n        execute: graphql_1.execute,\n        subscribe: graphql_1.subscribe,\n        schema: graphql_2.default,\n        onConnect: (connectionParams) => __awaiter(void 0, void 0, void 0, function* () {\n            if (connectionParams.token) {\n                const token = connectionParams.token;\n                return new Promise((resolve, reject) => {\n                    function_1.getUserByToken(token)\n                        .then(res => {\n                        return resolve(res);\n                    })\n                        .catch(err => reject(err));\n                });\n            }\n        })\n    }, {\n        server: ws,\n        path: '/subscriptions'\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/admin.model.ts":
/*!***********************************!*\
  !*** ./src/models/admin.model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst adminSchema = new mongoose_1.Schema({\n    id: String,\n    profile: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        required: true,\n        ref: \"users\"\n    },\n    createdAt: Number,\n    updatedAt: Number,\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n    versionKey: false\n});\npreSave_1.createdAt(adminSchema);\nexports.AdminModel = mongoose_1.model(\"admins\", adminSchema);\n\n\n//# sourceURL=webpack:///./src/models/admin.model.ts?");

/***/ }),

/***/ "./src/models/client.model.ts":
/*!************************************!*\
  !*** ./src/models/client.model.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst clientSchema = new mongoose_1.Schema({\n    id: String,\n    profile: {\n        type: mongoose_1.Schema.Types.ObjectId,\n        required: true,\n        ref: 'users'\n    },\n    firstName: {\n        type: String,\n        required: true,\n        trim: true,\n        default: ''\n    },\n    lastName: {\n        type: String,\n        required: true,\n        trim: true,\n        default: ''\n    },\n    tel: {\n        type: String,\n        trim: true,\n        default: ''\n    },\n    address: {\n        type: String,\n        trim: true,\n        default: ''\n    },\n    sexe: {\n        type: String,\n        default: 'Femme'\n    },\n    photoUrl: {\n        type: String,\n        default: ''\n    },\n    codeParinage: {\n        type: String,\n        default: ''\n    },\n    stripe: {\n        type: String\n    },\n    createdAt: Number,\n    updatedAt: Number\n}, {\n    toObject: {\n        virtuals: true\n    },\n    toJSON: { virtuals: true }\n});\npreSave_1.createdAt(clientSchema);\nexports.ClientModel = mongoose_1.model('clients', clientSchema);\n\n\n//# sourceURL=webpack:///./src/models/client.model.ts?");

/***/ }),

/***/ "./src/models/formation.model.ts":
/*!***************************************!*\
  !*** ./src/models/formation.model.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst formationSchema = new mongoose_1.Schema({\n    id: String,\n    title: String,\n    subTitle: String,\n    description: String,\n    photoUrl: String,\n    createAt: Number,\n    updatedAt: Number\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true }\n});\npreSave_1.createdAt(formationSchema);\nexports.FormationModel = mongoose_1.model(\"news\", formationSchema);\n\n\n//# sourceURL=webpack:///./src/models/formation.model.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst user_model_1 = __webpack_require__(/*! ./user.model */ \"./src/models/user.model.ts\");\nexports.UserModel = user_model_1.UserModel;\nconst admin_model_1 = __webpack_require__(/*! ./admin.model */ \"./src/models/admin.model.ts\");\nexports.AdminModel = admin_model_1.AdminModel;\nconst client_model_1 = __webpack_require__(/*! ./client.model */ \"./src/models/client.model.ts\");\nexports.ClientModel = client_model_1.ClientModel;\nconst news_model_1 = __webpack_require__(/*! ./news.model */ \"./src/models/news.model.ts\");\nexports.NewsModel = news_model_1.NewsModel;\nconst formation_model_1 = __webpack_require__(/*! ./formation.model */ \"./src/models/formation.model.ts\");\nexports.FormationModel = formation_model_1.FormationModel;\nconst seedsData = () => {\n    admin_model_1.AdminModel.countDocuments((err, count) => {\n        if (!err && count === 0) {\n            new user_model_1.UserModel({ email: 'admin@gmail.com', password: '123456', ref: 'admins' })\n                .save()\n                .then(user => new admin_model_1.AdminModel({ profile: user.id }).save().then(admin => admin));\n        }\n    });\n    client_model_1.ClientModel.countDocuments((err, count) => {\n        if (!err && count === 0) {\n            new user_model_1.UserModel({ email: 'client@gmail.com', password: '123456', ref: 'clients' }).save().then(user => {\n                new client_model_1.ClientModel({ firstName: 'sahbani', lastName: 'wael', profile: user.id }).save();\n            });\n        }\n    });\n};\nseedsData();\n\n\n//# sourceURL=webpack:///./src/models/index.ts?");

/***/ }),

/***/ "./src/models/news.model.ts":
/*!**********************************!*\
  !*** ./src/models/news.model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst newsSchema = new mongoose_1.Schema({\n    id: String,\n    title: String,\n    subTitle: String,\n    description: String,\n    photoUrl: String,\n    createAt: Number,\n    updatedAt: Number\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true }\n});\npreSave_1.createdAt(newsSchema);\nexports.NewsModel = mongoose_1.model(\"formations\", newsSchema);\n\n\n//# sourceURL=webpack:///./src/models/news.model.ts?");

/***/ }),

/***/ "./src/models/preSave.ts":
/*!*******************************!*\
  !*** ./src/models/preSave.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst moment_1 = __webpack_require__(/*! ../helpers/moment */ \"./src/helpers/moment.js\");\nexports.createdAt = schema => {\n    schema.pre(\"save\", function () {\n        if (this.isNew) {\n            this.createdAt = moment_1.default().valueOf();\n            if (!this.id)\n                this.id = this._id.toString();\n            else\n                this._id = this.id;\n        }\n        else\n            this.updatedAt = moment_1.default().valueOf();\n    });\n};\n\n\n//# sourceURL=webpack:///./src/models/preSave.ts?");

/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst preSave_1 = __webpack_require__(/*! ./preSave */ \"./src/models/preSave.ts\");\nconst userSchema = new mongoose_1.Schema({\n    id: String,\n    ref: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        unique: true,\n        required: true,\n        trim: true,\n        lowercase: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isBlocked: {\n        type: Boolean,\n        default: false\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    createdAt: Number,\n    updatedAt: Number\n}, {\n    toJSON: { virtuals: true },\n    toObject: { virtuals: true },\n});\npreSave_1.createdAt(userSchema);\nuserSchema.pre(\"save\", function (next) {\n    if (this.isModified(\"password\") && this.isNew) {\n        try {\n            const salt = bcrypt.genSaltSync(10);\n            const hash = bcrypt.hashSync(this.password, salt);\n            this.password = hash;\n            next();\n        }\n        catch (e) {\n            next(e);\n        }\n    }\n    else {\n        next();\n    }\n});\nuserSchema.methods.isValidPassword = function (password) {\n    return bcrypt.compareSync(password, this.password);\n};\nuserSchema.statics.hashPassword = function (password) {\n    return new Promise((resolve, reject) => {\n        try {\n            const salt = bcrypt.genSaltSync(10);\n            const hash = bcrypt.hashSync(password, salt);\n            resolve(hash);\n        }\n        catch (e) {\n            reject(e);\n        }\n    });\n};\nexports.UserModel = mongoose_1.model(\"users\", userSchema);\n\n\n//# sourceURL=webpack:///./src/models/user.model.ts?");

/***/ }),

/***/ "./src/routes/auth.ts":
/*!****************************!*\
  !*** ./src/routes/auth.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst token_1 = __webpack_require__(/*! ../tools/token */ \"./src/tools/token.ts\");\nconst constant_1 = __webpack_require__(/*! ../tools/constant */ \"./src/tools/constant.ts\");\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nconst errorMessages_1 = __webpack_require__(/*! ../../errorMessages */ \"./errorMessages.ts\");\nexports.AuthRouter = express_1.Router();\nexports.AuthRouter.post('/login/visitor', (req, res, next) => {\n    token_1.default.generate({ role: constant_1.UserRole.VISITOR }).then(token => {\n        res.end(JSON.stringify({ success: true, token }, null, 5));\n    });\n});\nexports.AuthRouter.post('/login/florist', (req, res, next) => {\n    let { email, password } = req.body;\n    if (email && password) {\n        email = email.trim();\n        models_1.UserModel.findOne({ email, ref: 'florists' }).then(user => {\n            if (!user) {\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\n            }\n            if (!user.isValidPassword(password)) {\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\n            }\n            token_1.default.generate({ id: user.id, role: constant_1.UserRole.FLORIST })\n                .then(token => {\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\n            })\n                .catch(err => next(err));\n        });\n    }\n    else {\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\n    }\n});\nexports.AuthRouter.post('/login/admin', (req, res, next) => {\n    let { email, password } = req.body;\n    if (email && password) {\n        email = email.trim();\n        models_1.UserModel.findOne({ email, ref: 'admins' }).then(user => {\n            if (!user) {\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\n            }\n            if (!user.isValidPassword(password)) {\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\n            }\n            token_1.default.generate({ id: user.id, role: constant_1.UserRole.ADMIN })\n                .then(token => {\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\n            })\n                .catch(err => next(err));\n        });\n    }\n    else {\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\n    }\n});\nexports.AuthRouter.post('/login/client', (req, res, next) => {\n    let { email, password } = req.body;\n    if (email && password) {\n        email = email.trim();\n        models_1.UserModel.findOne({ email, ref: 'clients' }).then(user => {\n            if (!user) {\n                return res.end(JSON.stringify({ success: false, message: errorMessages_1.default.userNotFound }, null, 5));\n            }\n            if (!user.isValidPassword(password)) {\n                return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.auth.invalidPassword }, null, 5));\n            }\n            token_1.default.generate({ id: user.id, role: constant_1.UserRole.CLIENT })\n                .then(token => {\n                return res.end(JSON.stringify({ success: true, token }, null, 5));\n            })\n                .catch(err => next(err));\n        });\n    }\n    else {\n        return res.end(JSON.stringify({ success: false, fieldError: errorMessages_1.default.invalidEmail }, null, 5));\n    }\n});\nexports.AuthRouter.post('/login/check-token', (req, res, next) => {\n    const token = req.headers.authorization;\n    console.log(token);\n    if (!token) {\n        return res.sendStatus(401);\n    }\n    token_1.default.ensure(token)\n        .then(payload => {\n        return res.end(JSON.stringify({ success: true, payload }, null, 5));\n    })\n        .catch(err => res.sendStatus(401));\n});\nexports.default = exports.AuthRouter;\n\n\n//# sourceURL=webpack:///./src/routes/auth.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./auth */ \"./src/routes/auth.ts\"));\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/stuart.ts":
/*!******************************!*\
  !*** ./src/routes/stuart.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __webpack_require__(/*! express */ \"express\");\nconst models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nconst populateFields_1 = __webpack_require__(/*! ../graphql/util/populateFields */ \"./src/graphql/util/populateFields.ts\");\nconst pubsub_1 = __webpack_require__(/*! ../graphql/pubsub */ \"./src/graphql/pubsub/index.ts\");\nconst constants_1 = __webpack_require__(/*! ../graphql/util/constants */ \"./src/graphql/util/constants.ts\");\nconst moment_1 = __webpack_require__(/*! ../helpers/moment */ \"./src/helpers/moment.js\");\nexports.StuartRouter = express_1.Router();\nexports.StuartRouter.post('/webhooks', (req, res, next) => {\n    const { data } = req.body;\n    if (data) {\n        const { status, clientReference } = data;\n        let state = null;\n        if (status) {\n            switch (status) {\n                case 'in_progress':\n                    state = 'DELIVERING';\n                    break;\n                case 'delivering':\n                    state = 'DELIVERING';\n                    break;\n                case 'finished':\n                    state = 'DELIVERED';\n                    break;\n                case 'canceled':\n                    state = 'CANCELED';\n                    break;\n                case 'voided':\n                    state = 'VOIDED';\n                    break;\n                case 'revoked':\n                    state = 'REVOKED';\n                    break;\n                case 'expired':\n                    state = 'EXPIRED';\n                    break;\n            }\n        }\n        if (!!state) {\n            if (clientReference) {\n                models_1.CommandModel.findOne({ num: parseInt(clientReference) })\n                    .populate(populateFields_1.populateFields.command.clientFlorist)\n                    .then(cmd => {\n                    const order = cmd;\n                    if (order) {\n                        const { driver, trackingUrl } = data;\n                        order.state = state ? state : 'PENDING';\n                        order.status = [...order.status, { state, date: moment_1.default().valueOf() }];\n                        if (driver && trackingUrl) {\n                            order.apiResponseLivringInfos = {\n                                job: data ? data.id : null,\n                                trackingUrl,\n                                driver: {\n                                    firstName: driver ? driver.firstname : null,\n                                    lastName: driver ? driver.lastname : null,\n                                    phone: driver ? driver.phone : null\n                                }\n                            };\n                        }\n                        order.save();\n                        pubsub_1.default.publish(constants_1.SubscriptionFire.COMMAND_UPDATED, { command: order });\n                    }\n                });\n            }\n        }\n    }\n});\nexports.default = exports.StuartRouter;\n\n\n//# sourceURL=webpack:///./src/routes/stuart.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst compression = __webpack_require__(/*! compression */ \"compression\");\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst logger = __webpack_require__(/*! morgan */ \"morgan\");\nconst bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nconst graphql_1 = __webpack_require__(/*! ./graphql */ \"./src/graphql/index.ts\");\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\nconst token_1 = __webpack_require__(/*! ./tools/token */ \"./src/tools/token.ts\");\nconst constant_1 = __webpack_require__(/*! ./tools/constant */ \"./src/tools/constant.ts\");\nconst function_1 = __webpack_require__(/*! ./helpers/function */ \"./src/helpers/function.ts\");\nconst stuart_1 = __webpack_require__(/*! ./routes/stuart */ \"./src/routes/stuart.ts\");\n//import { getUserByToken } from './helpers/function';\n//ANCHOR conexion mongoose database\nclass Server {\n    constructor() {\n        dotenv.config();\n        this.app = express();\n        this.connectMongoDB();\n        this.config();\n        this.setupRoutes();\n        this.setupGraphQL();\n        //console.log(process.env.PORT)\n    }\n    connectMongoDB() {\n        const mongoUrl = process.env.MONGOOSE_URI_CONNECTION;\n        mongoose.Promise = bluebird;\n        mongoose\n            .connect(mongoUrl, {\n            useCreateIndex: true,\n            useNewUrlParser: true,\n            useFindAndModify: false,\n            useUnifiedTopology: true\n        })\n            .then(() => {\n            /** ready to use. The `mongoose.connect()` promise resolves to undefined. */\n            console.log('Connected to database');\n        })\n            .catch(err => {\n            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);\n            // process.exit();\n        });\n    }\n    setupRoutes() {\n        this.app.use(process.env.AUTH_ENDPOINT, routes_1.AuthRouter);\n        this.app.use(process.env.STUART_ENDPOINT, stuart_1.default);\n        this.app.use(process.env.GRAPHQL_ENDPOINT, (req, res, next) => {\n            const token = req.headers.authorization;\n            token_1.default.ensure(token).then(() => next()).catch(message => res.status(401).json({\n                success: false,\n                code: 401,\n                message\n            }));\n        });\n    }\n    setupGraphQL() {\n        const server = new apollo_server_express_1.ApolloServer({\n            schema: graphql_1.default,\n            context: ({ req }) => __awaiter(this, void 0, void 0, function* () {\n                var _a, _b;\n                const user = yield function_1.getUserByToken(req.headers.authorization);\n                console.log(\"user,user\");\n                return { user, token: req.headers.authorization, role: (_b = (_a = user) === null || _a === void 0 ? void 0 : _a.role, (_b !== null && _b !== void 0 ? _b : constant_1.UserRole.VISITOR)) };\n            })\n        });\n        server.applyMiddleware({ app: this.app, path: process.env.GRAPHQL_ENDPOINT });\n    }\n    config() {\n        this.app.use(bodyParser.urlencoded({ extended: true }));\n        this.app.use(bodyParser.json());\n        this.app.use(cookieParser());\n        this.app.use(logger('dev'));\n        //this.app.use(expressValidator());\n        this.app.use(helmet());\n        this.app.use(compression());\n        this.app.use(cors());\n    }\n}\nexports.default = new Server().app;\n\n\n//# sourceURL=webpack:///./src/server.ts?");

/***/ }),

/***/ "./src/tools/constant.ts":
/*!*******************************!*\
  !*** ./src/tools/constant.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserRole = {\n    ADMIN: 'ADMIN',\n    CLIENT: 'CLIENT',\n    FLORIST: 'FLORIST',\n    VISITOR: 'VISITOR'\n};\nexports.MAIL_HOST = 'mail.toolynk.com';\nexports.MAIL_USER = 'bridge@toolynk.com';\nexports.MAIL_PASSWORD = 'G&340fvv';\nexports.EMAIL_SENDER = 'contact@toolynk.com';\nexports.EMAIL_SENDER_PASSWORD = 'sahbanial123';\nexports.CURRENCY = 'EUR';\nexports.PHONE_PRFIX = '+33';\nexports.MAX_DISTANCE = 7;\nexports.MomentFormat = {\n    DATE_HOURS: 'DD/MM/YYYY HH:mm',\n    DATE: 'DD/MM/YYYY',\n    TIME: 'HH:mm'\n};\n\n\n//# sourceURL=webpack:///./src/tools/constant.ts?");

/***/ }),

/***/ "./src/tools/token.ts":
/*!****************************!*\
  !*** ./src/tools/token.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst generate = (payload) => new Promise((resolve, reject) => {\n    console.log(process.env.JWT_EXPIRES_IN);\n    try {\n        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);\n        resolve(token);\n    }\n    catch (e) {\n        reject(e);\n    }\n});\nconst ensure = (token) => new Promise((resolve, reject) => {\n    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, payload) {\n        if (err) {\n            return reject(err);\n        }\n        resolve(payload);\n    });\n});\nexports.default = {\n    generate,\n    ensure\n};\n\n\n//# sourceURL=webpack:///./src/tools/token.ts?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-subscriptions\");\n\n//# sourceURL=webpack:///external_%22graphql-subscriptions%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "moment-timezone":
/*!**********************************!*\
  !*** external "moment-timezone" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment-timezone\");\n\n//# sourceURL=webpack:///external_%22moment-timezone%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "subscriptions-transport-ws":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"subscriptions-transport-ws\");\n\n//# sourceURL=webpack:///external_%22subscriptions-transport-ws%22?");

/***/ })

/******/ });