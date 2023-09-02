"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureCORS = void 0;
const configureCORS = (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
};
exports.configureCORS = configureCORS;
