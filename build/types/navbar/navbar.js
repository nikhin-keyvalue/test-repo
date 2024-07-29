'use-cli';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MdOutlineBadge, MdOutlineCheck, MdOutlinePeopleAlt, MdOutlineRequestQuote, MdOutlineSettings, MdOutlineStore, } from "react-icons/md";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, } from "./NavigationMenu";
import NavigationItemDashboard from "./NavigationItemDashboard";
import NavigationItemInsights from "./NavigationItemInsights";
import OpportunitiesandDeliveriesMenu from "./OpportunitiesAndDeliveriesMenu";
import PersonsAndOrganisationsMenu from "./PersonsAndOrganisationsMenu";
import StockMenuUI from "./StockMenu";
import React from "react";
var NavBar = function (_a) {
    var dynamicFilterSubMenu = _a.dynamicFilterSubMenu, user = _a.user;
    var roles = user.authorities;
    var t = useTranslations("navBar");
    return (React.createElement("div", { className: "hidden md:block" },
        React.createElement(NavigationMenu, { className: "z-[1400]" },
            React.createElement(NavigationMenuList, { className: "h-auto justify-start overflow-y-auto overscroll-y-contain" },
                React.createElement(Link, { href: "/dashboard", className: "text-inherit", prefetch: false, title: t("dashboard") },
                    React.createElement(NavigationItemDashboard, null)),
                React.createElement(StockMenuUI, { dynamicFilterSubMenu: dynamicFilterSubMenu }),
                React.createElement(Link, { href: "/stockmgmt/dealer/list", className: "text-inherit", prefetch: false, title: t("dealers") },
                    React.createElement(NavigationMenuItem, { isActive: false },
                        React.createElement(MdOutlineStore, { size: "2rem" }))),
                roles.includes("ROLE_CRM") ? (React.createElement(PersonsAndOrganisationsMenu, null)) : (roles.includes("ROLE_RELATION") && (React.createElement(Link, { href: "/relationmgmt/relation/list", className: "text-inherit", prefetch: false, title: t("relations") },
                    React.createElement(NavigationMenuItem, { isActive: false },
                        React.createElement(MdOutlinePeopleAlt, { size: "2rem" }))))),
                roles.includes("ROLE_CRM") ? (React.createElement(OpportunitiesandDeliveriesMenu, { userRoles: roles })) : (roles.includes("ROLE_RELATION") && (React.createElement(Link, { href: "/relationmgmt/section/list", className: "text-inherit", prefetch: false, title: t("trajectories") },
                    React.createElement(NavigationMenuItem, { isActive: false },
                        React.createElement(MdOutlineRequestQuote, { size: "2rem" }))))),
                roles.includes("ROLE_INSIGHTS") && (React.createElement(Link, { href: "/insight", className: "text-inherit", title: t("insights"), prefetch: false },
                    React.createElement(NavigationItemInsights, null))),
                roles.includes("ROLE_TASK") && (React.createElement(Link, { href: "/relationmgmt/mytasks", className: "text-inherit", prefetch: false, title: t("mytasks") },
                    React.createElement(NavigationMenuItem, { isActive: false },
                        React.createElement(MdOutlineBadge, { size: "2rem" })))),
                roles.includes("ROLE_TASK_ADMIN") && (React.createElement(Link, { href: "/relationmgmt/task/list", className: "text-inherit", prefetch: false, title: t("tasks") },
                    React.createElement(NavigationMenuItem, { isActive: false },
                        React.createElement(MdOutlineCheck, { size: "2rem" })))),
                roles.includes("ROLE_DEALER_ADMIN") && (React.createElement(Link, { href: "/relationmgmt/guarantee/list", className: "text-inherit", prefetch: false, title: t("guarantees") },
                    React.createElement(NavigationMenuItem, { isActive: false },
                        React.createElement(MdOutlineSettings, { size: "2rem" }))))))));
};
export default NavBar;
//# sourceMappingURL=navbar.js.map