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
exports.close = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("./logger");
const config = __importStar(require("./config"));
let dbUrl = 'mongodb://' + config.DB_HOST + '/' + config.DB_NAME;
const connect = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            mongoose_1.default.connection.on('connected', () => { logger_1.logger.info(`-----Db connected to ${config.DB_HOST} with user ${config.DB_SOURCE}-----`); });
            mongoose_1.default.connection.on('close', () => { logger_1.logger.error('-----lost Db connection-----'); });
            mongoose_1.default.connection.on('reconnected', () => { logger_1.logger.info('-----Db reconnected-----'); });
            mongoose_1.default.connection.on('error', () => { logger_1.logger.error('-----Db connection error-----'); });
            await mongoose_1.default.connect(dbUrl);
            resolve(1);
        }
        catch (err) {
            logger_1.logger.debug('Error while db connection ' + JSON.stringify(err));
            reject(err);
        }
    });
};
exports.connect = connect;
const close = () => {
    mongoose_1.default.connection.close();
};
exports.close = close;
//# sourceMappingURL=db.js.map