"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common = require("./common");
module.exports = {
    body: {
        address: Joi.string().max(20),
        address2: Joi.string().max(20),
        district: Joi.string().max(20),
        city_id: Joi.number().not(0).required(),
        phone: common.default.phone,
        postal_code: common.default.postal_code,
    },
};
//# sourceMappingURL=address.js.map