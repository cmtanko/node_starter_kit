import * as Joi from 'joi';
import * as common from './common';

module.exports = {
  body: {
    city: common.default.name,
    country_id: Joi.number().not(0).required()
  },
};
