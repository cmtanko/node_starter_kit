"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common = require("./common");
const address = require("./address");
exports.default = {
    first_name: common.default.name,
    last_name: common.default.name,
    email: common.default.email,
    activebool: Joi.bool(),
    address: address,
};
//# sourceMappingURL=user.js.map