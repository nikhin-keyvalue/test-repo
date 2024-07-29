"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import NavigationItemStock from "./NavigationItemStock";
import React from "react";
var StockMenuUI = function (_a) {
    var dynamicFilterSubMenu = _a.dynamicFilterSubMenu;
    var storedFilters = "";
    // try catch added to catch the error that is thrown while trying to access the session storage during ssr
    try {
        storedFilters = sessionStorage.getItem("stockFilters");
    }
    catch (e) {
        storedFilters =
            "/stock?stockStatusList=IN_STOCK%2CEXPECTED&sellingStatusList=AVAILABLE_FOR_SALE";
    }
    var stockURL = storedFilters
        ? "/stock?".concat(storedFilters)
        : "/stock?stockStatusList=IN_STOCK%2CEXPECTED&sellingStatusList=AVAILABLE_FOR_SALE";
    var t = useTranslations("navBar");
    return (React.createElement(Link, { prefetch: false, href: stockURL, className: "text-inherit", title: t("vehicles") },
        React.createElement(NavigationItemStock, null)));
};
export default StockMenuUI;
//# sourceMappingURL=StockMenu.js.map