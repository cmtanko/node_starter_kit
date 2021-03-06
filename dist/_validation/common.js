"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.default = {
    name: Joi.string().max(30).required(),
    phone: Joi.string().min(9).max(15),
    postal_code: Joi.string().max(10),
    email: Joi.string().email().max(50).required(),
    password: Joi.string().min(8).max(15).required()
};
//# sourceMappingURL=common.js.map