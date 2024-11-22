"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const core_1 = require("@overnightjs/core");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const logger_1 = require("./logger");
const mongo = __importStar(require("./db"));
class Main extends core_1.Server {
    constructor() {
        super();
        this.corsPolicy();
        mongo.connect().then(dbConnect => {
            // this.loadControllers();
            // this.loadCrons();
        });
    }
    corsPolicy() {
        express.Router();
        this.app.use((_req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, projects, Client-Type");
            next();
        });
        this.app.use((0, cors_1.default)({
            origin: "*",
            methods: "GET, PUT, POST, DELETE, OPTIONS",
            credentials: true
        }));
    }
    handleShutDown(server) {
        // Graceful shutdown
        process.on('SIGINT', () => {
            const cleanUp = async () => {
                // Clean up other resources like DB connections
                //await mongo.close();
            };
            //logger.info('Closing server...')
            server.close(() => {
                logger_1.logger.info('Server closed !!! ');
                cleanUp();
                process.exit();
            });
            // Force close server after 5secs
            setTimeout((e) => {
                logger_1.logger.info('Forcing server close !!!', e);
                cleanUp();
                process.exit(1);
            }, 5000);
        });
    }
    start() {
        const server = app.listen(config_1.PORT, () => {
            console.log(`App listening at port: ${config_1.PORT}`);
            this.handleShutDown(server);
        });
    }
}
exports.default = Main;
//# sourceMappingURL=app.js.map