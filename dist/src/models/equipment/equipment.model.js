"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const mongoose_1 = require("mongoose");
const equipmentSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, unique: true, required: true },
    type: { type: mongoose_1.Schema.Types.ObjectId, ref: 'EquipmentType', required: true },
}).index({ type: 1, name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });
exports.Equipment = (0, mongoose_1.model)('Equipment', equipmentSchema);
//# sourceMappingURL=equipment.model.js.map