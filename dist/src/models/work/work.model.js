"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = void 0;
const mongoose_1 = require("mongoose");
const workSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, unique: true, required: true },
    type: { type: mongoose_1.Schema.Types.ObjectId, ref: 'WorkType', required: true },
    equipments: [{
            equipment: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Equipment', required: true },
            days: { type: Number, default: 1 },
        }],
    days: { type: Number, required: true },
    cost: { type: Number, required: true },
}).index({ type: 1, name: 1 }, { unique: true, collation: { locale: 'en', strength: 2 } });
exports.Work = (0, mongoose_1.model)('Work', workSchema);
//# sourceMappingURL=work.model.js.map