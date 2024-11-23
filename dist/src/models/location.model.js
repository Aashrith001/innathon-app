"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const mongoose_1 = require("mongoose");
const locationSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    activities: [
        {
            activity: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Activity', required: true },
            count: { type: Number, required: true, default: 0 }
        }
    ]
});
exports.Location = (0, mongoose_1.model)('Location', locationSchema);
//# sourceMappingURL=location.model.js.map