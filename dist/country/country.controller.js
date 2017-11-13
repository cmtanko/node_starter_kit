"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var country_service_1 = require("./country.service");
var router = express_1.Router();
router.get('/', function (req, res) {
    country_service_1.default
        .getCountryList(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.get('/:id', function (req, res) {
    country_service_1.default
        .getCountryList(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.delete('/:id', function (req, res) {
    country_service_1.default
        .deleteCountry(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.post('/', function (req, res) {
    var country = req.body;
    country_service_1.default
        .addCountry(country)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.put('/', function (req, res) {
    var country = req.body;
    country_service_1.default
        .addCountry(country)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
exports.default = router;
//# sourceMappingURL=country.controller.js.map