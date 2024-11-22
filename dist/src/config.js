"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_SOURCE = exports.DB_HOST = exports.LOGS_PATH = exports.NAME = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.NAME = process.env.NAME || 'Aashrith';
exports.LOGS_PATH = process.env.LOGS_PATH || '.logs';
//DB
exports.DB_HOST = process.env.DB_HOST || '';
exports.DB_SOURCE = process.env.DB_SOURCE || '';
exports.DB_NAME = process.env.DB_NAME || '';
//# sourceMappingURL=config.js.map