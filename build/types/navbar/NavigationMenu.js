/* eslint-disable react/prop-types */
/* eslint-disable max-len */
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";
var NavigationMenuViewport = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement("div", { className: twMerge("absolute left-20 -z-10 m-0 p-0 top-0 h-full flex") },
        React.createElement(NavigationMenuPrimitive.Viewport, __assign({ className: twMerge("relative -z-10 overflow-hidden bg-secondary text-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left w-80", className), ref: ref }, props))));
});
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenu = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(NavigationMenuPrimitive.Root, __assign({ ref: ref, className: twMerge("fixed left-0 top-0 h-full w-20 z-10", className) }, props),
        React.createElement("div", { className: "relative flex h-full bg-secondary" },
            children,
            React.createElement(NavigationMenuViewport, null))));
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(NavigationMenuPrimitive.List, __assign({ ref: ref, className: twMerge("group flex flex-1 h-full p-0 m-0 flex-col list-none items-center justify-center", className) }, props)));
});
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = React.forwardRef(function (_a, ref) {
    var isActive = _a.isActive, className = _a.className, children = _a.children, props = __rest(_a, ["isActive", "className", "children"]);
    return (React.createElement(NavigationMenuPrimitive.Item, __assign({ ref: ref, className: twMerge("w-20 h-20 group flex relative hover:text-white ".concat(isActive ? "text-white" : "text-secondary-500", " transition-colors duration-500 justify-center items-center"), className) }, props),
        children,
        isActive && (React.createElement(motion.div, { layoutId: "test", className: "absolute left-0 top-0 flex h-full w-1 items-center justify-center" },
            React.createElement("div", { className: "h-3/4 w-full bg-primary" })))));
});
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;
var NavigationMenuTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (React.createElement(NavigationMenuPrimitive.Trigger, __assign({ ref: ref, className: twMerge("inline-flex data-[state=open]:text-white text-inherit m-0 p-0 border-none w-full h-full items-center justify-center bg-transparent text-sm font-medium focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 ", className) }, props), children));
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(NavigationMenuPrimitive.Content, __assign({ ref: ref, className: twMerge("left-0 top-0 z-10 w-full md:absolute ", className) }, props)));
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuIndicator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React.createElement(NavigationMenuPrimitive.Indicator, __assign({ ref: ref, className: twMerge("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className) }, props),
        React.createElement("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })));
});
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport, };
//# sourceMappingURL=NavigationMenu.js.map