"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var td = require("testdouble");
var supertest = require('supertest');
var api_1 = require("../../../server/api/api");
var app = api_1.default;
exports.app = app;
var request = supertest;
exports.request = request;
var expect = chai.expect;
exports.expect = expect;
var testDouble = td;
exports.testDouble = testDouble;
//# sourceMappingURL=helpers.js.map