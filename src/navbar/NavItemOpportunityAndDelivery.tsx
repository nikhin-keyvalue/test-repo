"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineRequestQuote } from "react-icons/md";

// import { useTranslations } from "@/hooks/translation";
import { Role } from "./types";
import { isSalesPath } from "../utils/common";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger
} from "./NavigationMenu";
import SubMenuItem from "./SubMenuItem";

const NavItemOpportunityAndDelivery = ({
  userRoles
}: {
  userRoles: Role[];
}): JSX.Element => {
  // const t = useTranslations();
  const pathName = usePathname();

  const hasSettingsPageAccess = userRoles?.includes("ROLE_DEALER_ADMIN");

  return (
    <NavigationMenuItem isActive={isSalesPath(pathName)}>
      <NavigationMenuTrigger className="cursor-pointer">
        <MdOutlineRequestQuote size="2rem" />
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <p className="my-4 font-kanit text-[1.375rem] font-semibold capitalize">
          {/* {t("navBar.sales")} */}
          navBar.sales
        </p>
        <div className="custom-scrollbar mr-1 h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden">
          <SubMenuItem
            // label={t("opportunityListing.title")}
            label={"opportunityListing.title"}
            onClick={(): null => null}
            url="/opportunities"
          />
          <SubMenuItem
            // label={t("deliveryListing.title")}
            label={"deliveryListing.title"}
            onClick={(): null => null}
            url="/deliveries"
          />
          <SubMenuItem
            // label={t("navBar.createQuotation")}
            label={"navBar.createQuotation"}
            onClick={(): null => null}
            url="/quotations/quick"
          />

          {hasSettingsPageAccess ? (
            // <SubMenuItem label={t("navBar.settings")} url="/crm-settings" />
            <SubMenuItem label={"navBar.settings"} url="/crm-settings" />
          ) : null}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavItemOpportunityAndDelivery;
