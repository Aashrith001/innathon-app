"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    workTypeSequences: [
        {
            workType: { type: mongoose_1.Schema.Types.ObjectId, ref: 'WorkType', required: true },
            parentWorkType: { type: mongoose_1.Schema.Types.ObjectId, ref: 'WorkType' },
        }
    ]
});
exports.Activity = (0, mongoose_1.model)('Activity', activitySchema);
//# sourceMappingURL=activity.model.js.map