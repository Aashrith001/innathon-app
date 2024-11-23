"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaywiseActivity = exports.EquipmentStatus = void 0;
const mongoose_1 = require("mongoose");
var EquipmentStatus;
(function (EquipmentStatus) {
    EquipmentStatus["Maintenance"] = "maintenance";
    EquipmentStatus["Running"] = "running";
})(EquipmentStatus || (exports.EquipmentStatus = EquipmentStatus = {}));
const daywiseActivitySchema = new mongoose_1.Schema({
    equipment: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Equipment', required: true },
    status: { type: String, enum: Object.values(EquipmentStatus), required: true },
    history: [
        {
            date: { type: Date, required: true },
            days: { type: Number, required: true },
            location: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Location', required: true },
            workingDays: { type: Number, required: true }
        }
    ],
    activity: [
        {
            date: { type: Date, required: true },
            checkInTime: { type: Date, required: true },
            checkOutTime: { type: Date, required: true },
            idealTime: { type: Number, required: true },
            fuel: { type: Number, required: true }
        }
    ]
});
exports.DaywiseActivity = (0, mongoose_1.model)('DaywiseActivity', daywiseActivitySchema);
//# sourceMappingURL=dayWiseActivity.model.js.map