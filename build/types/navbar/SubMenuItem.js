"use client";
import Link from "next/link";
import React from "react";
var SubMenuItem = function (_a) {
    var label = _a.label, url = _a.url, prefetch = _a.prefetch, onClick = _a.onClick;
    return (React.createElement(Link, { href: url, className: " flex h-10 w-full cursor-pointer items-center pl-4 pr-2 font-semibold text-white no-underline hover:bg-primary", onClick: onClick, prefetch: !!prefetch }, label));
};
export default SubMenuItem;
//# sourceMappingURL=SubMenuItem.js.map