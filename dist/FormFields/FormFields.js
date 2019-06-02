"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var addPropsToFields = function addPropsToFields(fields) {
  var fieldsWithProps = [];
  fields.forEach(function (field) {
    if (field.container && field.fields) {
      var container = field.container,
          _fields = field.fields,
          props = _objectWithoutProperties(field, ["container", "fields"]);

      fieldsWithProps.push(_objectSpread({
        Container: container,
        fields: addPropsToFields(_fields)
      }, props));
    } else if (field.component) {
      var component = field.component,
          _props = _objectWithoutProperties(field, ["component"]);

      fieldsWithProps.push(_objectSpread({}, _props, {
        Component: component
      }));
    }
  });
  return fieldsWithProps;
};

var FormFields = function FormFields(_ref) {
  var fields = _ref.fields;
  var fieldsWithProps = addPropsToFields(fields);

  var renderFields = function renderFields(fieldsToBeRendered) {
    return fieldsToBeRendered.map(function (field) {
      if (field.Container && field.fields) {
        var Container = field.Container,
            _fields2 = field.fields,
            _props2 = _objectWithoutProperties(field, ["Container", "fields"]);

        return _react["default"].createElement(Container, _extends({
          key: field.name
        }, _props2), renderFields(_fields2));
      }

      var Component = field.Component,
          props = _objectWithoutProperties(field, ["Component"]);

      return _react["default"].createElement(_react.Fragment, {
        key: props.name
      }, _react["default"].createElement(Component, props));
    });
  };

  return renderFields(fieldsWithProps);
};

FormFields.propType = {
  fields: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    type: _propTypes["default"].string.isRequired,
    component: _propTypes["default"].element.isRequired
  })).isRequired
};
var _default = FormFields;
exports["default"] = _default;