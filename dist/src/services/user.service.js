"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_model_1 = require("../models/user.model");
const getAllUsers = async () => {
    const users = await user_model_1.User.find({});
    return users;
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.service.js.map