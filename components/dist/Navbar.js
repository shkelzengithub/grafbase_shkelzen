"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var image_1 = require("next/image");
var link_1 = require("next/link");
var AuthProviders_1 = require("./AuthProviders");
var Navbar = function () {
    var session = {};
    return (React.createElement("nav", { className: 'flexBetween navbar' },
        React.createElement("div", { className: "flex-1 flexStart gap-10" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(image_1["default"], { src: "/logo.svg", width: 115, height: 43, alt: "Flexibble" })),
            React.createElement("ul", { className: 'xl:flex hidden text-small gap-7' }, constants_1.NavLinks.map(function (link) { return (React.createElement(link_1["default"], { href: link.href, key: link.key }, link.text)); }))),
        React.createElement("div", { className: 'flexCenter gap-4' }, session ? (React.createElement(React.Fragment, null,
            "UserPhoto",
            React.createElement(link_1["default"], { href: "/create-project" }, "Share Work"))) : (React.createElement(AuthProviders_1["default"], null)))));
};
exports["default"] = Navbar;
