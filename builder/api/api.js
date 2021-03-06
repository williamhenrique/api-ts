"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var Api = /** @class */ (function () {
    function Api() {
        this.express = express();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.routes(this.express);
    };
    Api.prototype.routes = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
exports.default = new Api().express;
//# sourceMappingURL=api.js.map