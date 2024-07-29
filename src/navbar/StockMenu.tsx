"use client";

import Link from "next/link";
// import { useTranslations } from "next-intl";

import NavigationItemStock from "./NavigationItemStock";
import React from "react";

const StockMenuUI = ({
  dynamicFilterSubMenu
}: {
  dynamicFilterSubMenu: React.ReactNode;
}): JSX.Element => {
  let storedFilters: string | null = "";
  // try catch added to catch the error that is thrown while trying to access the session storage during ssr
  try {
    storedFilters = sessionStorage.getItem("stockFilters");
  } catch (e) {
    storedFilters =
      "/stock?stockStatusList=IN_STOCK%2CEXPECTED&sellingStatusList=AVAILABLE_FOR_SALE";
  }
  const stockURL = storedFilters
    ? `/stock?${storedFilters}`
    : "/stock?stockStatusList=IN_STOCK%2CEXPECTED&sellingStatusList=AVAILABLE_FOR_SALE";

  // const t = useTranslations("navBar");

  return (
    <Link
      prefetch={false}
      href={stockURL}
      className="text-inherit"
      // title={t("vehicles")}
      title="vehicles"
    >
      <NavigationItemStock />
    </Link>
  );
};

export default StockMenuUI;
