import * as Joi from 'joi';
import * as common from './common';
import * as address from './address';

export default {
  first_name: common.default.name,
  last_name: common.default.name,
  email: common.default.email,
  activebool: Joi.bool(),
  address: address,
};
