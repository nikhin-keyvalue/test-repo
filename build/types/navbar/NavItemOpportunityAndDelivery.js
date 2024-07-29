"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineRequestQuote } from "react-icons/md";
import { isSalesPath } from "../utils/common";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "./NavigationMenu";
import SubMenuItem from "./SubMenuItem";
var NavItemOpportunityAndDelivery = function (_a) {
    var userRoles = _a.userRoles;
    // const t = useTranslations();
    var pathName = usePathname();
    var hasSettingsPageAccess = userRoles === null || userRoles === void 0 ? void 0 : userRoles.includes("ROLE_DEALER_ADMIN");
    return (React.createElement(NavigationMenuItem, { isActive: isSalesPath(pathName) },
        React.createElement(NavigationMenuTrigger, { className: "cursor-pointer" },
            React.createElement(MdOutlineRequestQuote, { size: "2rem" })),
        React.createElement(NavigationMenuContent, null,
            React.createElement("p", { className: "my-4 font-kanit text-[1.375rem] font-semibold capitalize" }, "navBar.sales"),
            React.createElement("div", { className: "custom-scrollbar mr-1 h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden" },
                React.createElement(SubMenuItem
                // label={t("opportunityListing.title")}
                , { 
                    // label={t("opportunityListing.title")}
                    label: "opportunityListing.title", onClick: function () { return null; }, url: "/opportunities" }),
                React.createElement(SubMenuItem
                // label={t("deliveryListing.title")}
                , { 
                    // label={t("deliveryListing.title")}
                    label: "deliveryListing.title", onClick: function () { return null; }, url: "/deliveries" }),
                React.createElement(SubMenuItem
                // label={t("navBar.createQuotation")}
                , { 
                    // label={t("navBar.createQuotation")}
                    label: "navBar.createQuotation", onClick: function () { return null; }, url: "/quotations/quick" }),
                hasSettingsPageAccess ? (
                // <SubMenuItem label={t("navBar.settings")} url="/crm-settings" />
                React.createElement(SubMenuItem, { label: "navBar.settings", url: "/crm-settings" })) : null))));
};
export default NavItemOpportunityAndDelivery;
//# sourceMappingURL=NavItemOpportunityAndDelivery.js.map