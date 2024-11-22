"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, trim: true, unique: true },
    password: { type: String },
    fullName: { type: String, require: true },
    phoneNumber: { type: String, trim: true, required: true },
    email: { type: String, require: 'Email Id is required', trim: true, required: true, unique: true },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.model.js.map