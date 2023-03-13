"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongodb_URI = exports.PORT = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var mongodb_URI = process.env.mongodb_URI || "mongodb://localhost/test";
exports.mongodb_URI = mongodb_URI;
var PORT = process.env.PORT || 5000;
exports.PORT = PORT;