"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentType = void 0;
const mongoose_1 = require("mongoose");
const equipmentTypeSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, unique: true, required: true },
    cost: { type: Number, default: 0 },
}).index({ name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });
exports.EquipmentType = (0, mongoose_1.model)('EquipmentType', equipmentTypeSchema);
//# sourceMappingURL=type.model.js.map