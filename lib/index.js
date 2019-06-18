"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ReactDom = tslib_1.__importStar(require("react-dom"));
var React = tslib_1.__importStar(require("react"));
var currentScript = function () {
    if (document.currentScript) {
        return document.currentScript;
    }
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
};
var renderReact = function (element) {
    var wrap = document.createElement("div");
    ReactDom.render(element, wrap);
    return wrap.children[0];
};
exports.default = (function (component, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    currentScript().parentNode.insertBefore(renderReact(React.createElement.apply(React, [component, props].concat(children))), currentScript());
});
