"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const common = require("./common");
module.exports = {
    body: {
        city: common.default.name,
        country_id: Joi.number().not(0).required()
    },
};
//# sourceMappingURL=city.js.map