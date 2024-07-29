"use client";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MdOutlineDirectionsCar } from "react-icons/md";
// import DynamicSearchCriteriaFallback from "@/components/search-criteria/DynamicSearchCriteriaFallback";
// import Spinner from "@/components/Spinner";
import { useTranslations } from "next-intl";
import StaticFilterSubmenu from "./StaticFilterSubmenu";
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger, } from "./NavigationMenu";
var NavigationItemStock = function (_a) {
    var dynamicFilterSubMenu = _a.dynamicFilterSubMenu;
    var t = useTranslations();
    var pathname = usePathname();
    // TODO: Revisit;
    return (React.createElement(NavigationMenuItem, { isActive: pathname.startsWith("/stock") },
        React.createElement(NavigationMenuTrigger, { className: "cursor-pointer" },
            React.createElement(MdOutlineDirectionsCar, { size: "2rem" })),
        React.createElement(NavigationMenuContent, null,
            React.createElement("p", { className: "my-4 font-kanit text-[1.375rem] font-semibold" }, t("navBar.vehicles")),
            React.createElement("div", { className: "custom-scrollbar mr-1 h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden" },
                React.createElement(StaticFilterSubmenu, null),
                React.createElement("div", { className: "mt-8 w-full" },
                    React.createElement(ErrorBoundary, { FallbackComponent: (React.createElement("div", null, "Something went wrong!")) },
                        React.createElement(Suspense, { fallback: React.createElement("div", { className: "flex w-full justify-center" }, "Loding...") }, dynamicFilterSubMenu)))))));
};
export default NavigationItemStock;
//# sourceMappingURL=NavigationItemStock.js.map