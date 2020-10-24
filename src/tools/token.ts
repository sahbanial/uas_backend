import * as jwt from "jsonwebtoken";

const generate = (payload) => new Promise((resolve, reject) => {

    console.log(process.env.JWT_EXPIRES_IN)
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
        resolve(token);
    } catch (e) {
        reject(e);
    }
});

const ensure = (token) => new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, payload) {
        if (err) {
            return reject(err);
        }
        resolve(payload);
    });
});

export default {
    generate,
    ensure
};