"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var Navbar_1 = require("@/components/Navbar");
var Footer_1 = require("@/components/Footer");
exports.metadata = {
    title: 'Flexibble',
    description: 'Showcase and discover remarkable developer projects'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement(Navbar_1["default"], null),
            React.createElement("main", null, children),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
