// import { useTranslations } from "next-intl";

import SubMenuItem from "./SubMenuItem";
import React from "react";

const StaticFilterSubmenu = ({ onClose }: { onClose?: () => void }): JSX.Element => {
  // const t = useTranslations();

  const staticFilters = [
    {
      // label: t("navBar.allVehicles"),
      label: "navBar.allVehicles",
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
      // label: t("navBar.expected"),
      label: "navBar.expected",
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
      // label: t("navBar.available"),
      label: "navBar.available",
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
      // label: t("navBar.reserved"),
      label: "navBar.reserved",
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
      // label: t("navBar.soldOrNotForSale"),
      label: "navBar.soldOrNotForSale",
      filters: [
        {
          key: "sellingStatusList",
          value: ["SOLD", "NOT_FOR_SALE"],
        },
      ],
    },
    {
      // label: t("navBar.outOfStock"),
      label: "navBar.outOfStock",
      filters: [
        {
          key: "stockStatusList",
          value: ["OUT_OF_STOCK"],
        },
      ],
    },
  ];

  const getFilterUrl = (params: { key: string; value: string[] }[]): string => {
    const urlParams = new URLSearchParams();
    params.forEach((param) => {
      urlParams.set(param.key, param.value.toString());
    });

    const query = urlParams.toString();
    return `/stock?${query}`;
  };

  return (
    <div className="flex flex-col items-start">
      {staticFilters.map((filter) => (
        <SubMenuItem
          key={filter.label}
          label={filter.label}
          url={getFilterUrl(filter.filters)}
          onClick={onClose}
          prefetch={false}
        />
      ))}
    </div>
  );
};

export default StaticFilterSubmenu;
