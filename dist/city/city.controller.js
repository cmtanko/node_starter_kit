"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var express_1 = require("express");
var city_service_1 = require("./city.service");
var router = express_1.Router();
router.get('/', function (req, res) {
    var country = _.get(req, 'query.country') || undefined;
    city_service_1.default
        .getCityList(country)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.get('/:id', function (req, res) {
    city_service_1.default
        .getCity(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.delete('/:id', function (req, res) {
    city_service_1.default
        .deleteCity(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.post('/', function (req, res) {
    var country = req.body;
    city_service_1.default
        .addCity(country)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.put('/', function (req, res) {
    var country = req.body;
    city_service_1.default
        .addCity(country)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
exports.default = router;
//# sourceMappingURL=city.controller.js.map