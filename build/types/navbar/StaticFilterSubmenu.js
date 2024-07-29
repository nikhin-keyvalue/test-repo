import { useTranslations } from "next-intl";
import SubMenuItem from "./SubMenuItem";
import React from "react";
var StaticFilterSubmenu = function (_a) {
    var onClose = _a.onClose;
    var t = useTranslations();
    var staticFilters = [
        {
            label: t("navBar.allVehicles"),
            filters: [
                {
                    key: "stockStatusList",
                    value: ["IN_STOCK", "EXPECTED"],
                },
                {
                    key: "sellingStatusList",
                    value: ["AVAILABLE_FOR_SALE"],
                },
            ],
        },
        {
            label: t("navBar.expected"),
            filters: [
                {
                    key: "stockStatusList",
                    value: ["EXPECTED"],
                },
                {
                    key: "sellingStatusList",
                    value: ["AVAILABLE_FOR_SALE"],
                },
            ],
        },
        {
            label: t("navBar.available"),
            filters: [
                {
                    key: "stockStatusList",
                    value: ["IN_STOCK"],
                },
                {
                    key: "sellingStatusList",
                    value: ["AVAILABLE_FOR_SALE"],
                },
            ],
        },
        {
            label: t("navBar.reserved"),
            filters: [
                {
                    key: "stockStatusList",
                    value: ["IN_STOCK", "EXPECTED"],
                },
                {
                    key: "sellingStatusList",
                    value: ["RESERVED_FOR", "LEND_TO", "BORROW_FROM"],
                },
            ],
        },
        {
            label: t("navBar.soldOrNotForSale"),
            filters: [
                {
                    key: "sellingStatusList",
                    value: ["SOLD", "NOT_FOR_SALE"],
                },
            ],
        },
        {
            label: t("navBar.outOfStock"),
            filters: [
                {
                    key: "stockStatusList",
                    value: ["OUT_OF_STOCK"],
                },
            ],
        },
    ];
    var getFilterUrl = function (params) {
        var urlParams = new URLSearchParams();
        params.forEach(function (param) {
            urlParams.set(param.key, param.value.toString());
        });
        var query = urlParams.toString();
        return "/stock?".concat(query);
    };
    return (React.createElement("div", { className: "flex flex-col items-start" }, staticFilters.map(function (filter) { return (React.createElement(SubMenuItem, { key: filter.label, label: filter.label, url: getFilterUrl(filter.filters), onClick: onClose, prefetch: false })); })));
};
export default StaticFilterSubmenu;
//# sourceMappingURL=StaticFilterSubmenu.js.map