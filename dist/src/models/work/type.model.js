"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkType = void 0;
const mongoose_1 = require("mongoose");
const workTypeSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, unique: true, required: true },
}).index({ name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });
exports.WorkType = (0, mongoose_1.model)('WorkType', workTypeSchema);
//# sourceMappingURL=type.model.js.map