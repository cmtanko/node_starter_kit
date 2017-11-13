"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./user.service");
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    user_service_1.default
        .getUserList(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.get('/:id', function (req, res) {
    user_service_1.default
        .getUserList(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.delete('/:id', function (req, res) {
    user_service_1.default
        .deleteUser(req.params.id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.post('/', function (req, res) {
    var user = req.body;
    user_service_1.default
        .addUser(user)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
router.put('/', function (req, res) {
    var user = req.body;
    user_service_1.default
        .addUser(user)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return res.json(err); });
});
exports.default = router;
//# sourceMappingURL=user.controller.js.map