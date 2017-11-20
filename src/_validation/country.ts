import * as Joi from 'joi';
import * as common from './common';

module.exports = {
  body: {
    country: common.default.name
  },
};
