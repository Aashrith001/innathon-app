"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const user_model_1 = require("../models/user.model");
const getUsers = async () => {
    const users = await user_model_1.User.find({});
    return users;
};
exports.getUsers = getUsers;
//# sourceMappingURL=user.service.js.map