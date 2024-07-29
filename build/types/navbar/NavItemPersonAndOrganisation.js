"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { useTranslations } from "next-intl";
import { isCrmPath } from "../utils/common";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "./NavigationMenu";
import SubMenuItem from "./SubMenuItem";
var NavItemPersonAndOrganisation = function () {
    var t = useTranslations();
    var pathname = usePathname();
    return (React.createElement(NavigationMenuItem, { isActive: isCrmPath(pathname) },
        React.createElement(NavigationMenuTrigger, { className: "cursor-pointer" },
            React.createElement(MdOutlinePeopleAlt, { size: "2rem" })),
        React.createElement(NavigationMenuContent, null,
            React.createElement("p", { className: "my-4 font-kanit text-[1.375rem] font-semibold capitalize" }, t("navBar.crm")),
            React.createElement("div", { className: "custom-scrollbar mr-1 h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden" },
                React.createElement(SubMenuItem, { label: t("navBar.persons"), onClick: function () { return null; }, url: "/persons" }),
                React.createElement(SubMenuItem, { label: t("organisationsListing.title"), onClick: function () { return null; }, url: "/organisations" })))));
};
export default NavItemPersonAndOrganisation;
//# sourceMappingURL=NavItemPersonAndOrganisation.js.map