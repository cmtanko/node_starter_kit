"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./users/user.controller");
var country_controller_1 = require("./country/country.controller");
var city_controller_1 = require("./city/city.controller");
var router = express_1.Router();
router.use('/users', user_controller_1.default);
router.use('/countries', country_controller_1.default);
router.use('/cities', city_controller_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map