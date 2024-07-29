"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Role } from "./types";

import NavItemOpportunityAndDelivery from "./NavItemOpportunityAndDelivery";

const OpportunitiesandDeliveriesMenu = ({
  userRoles
}: {
  userRoles: Role[];
}): JSX.Element => {
  const t = useTranslations("navBar");

  return (
    <Link href="/opportunities" className="text-inherit" title={t("sales")}>
      <NavItemOpportunityAndDelivery userRoles={userRoles} />
    </Link>
  );
};

export default OpportunitiesandDeliveriesMenu;
