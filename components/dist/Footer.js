"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var image_1 = require("next/image");
var link_1 = require("next/link");
var FooterColumn = function (_a) {
    var title = _a.title, links = _a.links;
    return (React.createElement("div", { className: "footer_column" },
        React.createElement("h4", { className: 'font-semibold' }, title),
        React.createElement("ul", { className: "flex flex-col gap-2 font-normal" }, links.map(function (link) { return React.createElement(link_1["default"], { href: "/", key: link }, link); }))));
};
var Footer = function () {
    return (React.createElement("footer", { className: 'flexStart footer' },
        React.createElement("div", { className: "flex flex-col gap-12 w-full" },
            React.createElement("div", { className: "flex items-start flex-col" },
                React.createElement(image_1["default"], { src: "/logo-purple.svg", width: 115, height: 38, alt: "Flexibble" }),
                React.createElement("p", { className: 'text-start text-sm font-normal mt-5 max-w-xs' }, "Flexibble is the worlds leading community for creatives to share, grow, and get hired.")),
            React.createElement("div", { className: 'flex flex-wrap gap-12' },
                React.createElement(FooterColumn, { title: constants_1.footerLinks[0].title, links: constants_1.footerLinks[0].links }),
                React.createElement("div", { className: "flex-1 flex flex-col gap-4" },
                    React.createElement(FooterColumn, { title: constants_1.footerLinks[1].title, links: constants_1.footerLinks[1].links }),
                    React.createElement(FooterColumn, { title: constants_1.footerLinks[2].title, links: constants_1.footerLinks[2].links })),
                React.createElement(FooterColumn, { title: constants_1.footerLinks[3].title, links: constants_1.footerLinks[3].links }),
                React.createElement("div", { className: "flex-1 flex flex-col gap-4" },
                    React.createElement(FooterColumn, { title: constants_1.footerLinks[4].title, links: constants_1.footerLinks[4].links }),
                    React.createElement(FooterColumn, { title: constants_1.footerLinks[5].title, links: constants_1.footerLinks[5].links })),
                React.createElement(FooterColumn, { title: constants_1.footerLinks[6].title, links: constants_1.footerLinks[6].links }))),
        React.createElement("div", { className: 'flexBetween footer_copyright' },
            React.createElement("p", null, "@ 2023 Flexibble. All rights reserved"),
            React.createElement("p", { className: 'text-gray' },
                React.createElement("span", { className: 'text-black font-semibold' }, " 24,214 "),
                "projects submitted"))));
};
exports["default"] = Footer;
