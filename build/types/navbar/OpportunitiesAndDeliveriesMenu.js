"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import NavItemOpportunityAndDelivery from "./NavItemOpportunityAndDelivery";
var OpportunitiesandDeliveriesMenu = function (_a) {
    var userRoles = _a.userRoles;
    var t = useTranslations("navBar");
    return (React.createElement(Link, { href: "/opportunities", className: "text-inherit", title: t("sales") },
        React.createElement(NavItemOpportunityAndDelivery, { userRoles: userRoles })));
};
export default OpportunitiesandDeliveriesMenu;
//# sourceMappingURL=OpportunitiesAndDeliveriesMenu.js.map