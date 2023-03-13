"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAsignatura = exports.statusAsignatura = exports.renderEditAsignatura = exports.renderAsignatura = exports.deleteAsignatura = exports.añadirAsignatura = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var renderAsignatura = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var asignatura;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _Asignaturas["default"].find().lean();
        case 2:
          asignatura = _context.sent;
          res.render("asignaturaAgregar", {
            asignatura: asignatura
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderAsignatura(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.renderAsignatura = renderAsignatura;
var añadirAsignatura = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var asignatura;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          asignatura = (0, _Asignaturas["default"])(req.body);
          _context2.next = 4;
          return asignatura.save();
        case 4:
          res.redirect("/asignaturas/agregar");
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function añadirAsignatura(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.añadirAsignatura = añadirAsignatura;
var renderEditAsignatura = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var asignatura;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Asignaturas["default"].findById(req.params.id).lean();
        case 3:
          asignatura = _context3.sent;
          res.render("editarAsignaturas", {
            asignatura: asignatura
          });
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function renderEditAsignatura(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.renderEditAsignatura = renderEditAsignatura;
var updateAsignatura = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return _Asignaturas["default"].findByIdAndUpdate(id, req.body);
        case 3:
          res.redirect("/asignaturas/agregar");
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateAsignatura(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateAsignatura = updateAsignatura;
var deleteAsignatura = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return _Asignaturas["default"].findByIdAndDelete(id);
        case 3:
          res.redirect("/asignaturas/agregar");
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteAsignatura(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteAsignatura = deleteAsignatura;
var statusAsignatura = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, asignatura;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return _Asignaturas["default"].findById(id);
        case 3:
          asignatura = _context6.sent;
          //la propiedad creditos está en modelo
          asignatura.opcion = !asignatura.opcion;
          _context6.next = 7;
          return asignatura.save();
        case 7:
          res.redirect("/asignaturas/agregar");
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function statusAsignatura(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.statusAsignatura = statusAsignatura;