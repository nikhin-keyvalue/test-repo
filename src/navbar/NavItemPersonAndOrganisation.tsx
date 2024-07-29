"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { useTranslations } from "next-intl";
import { isCrmPath } from "../utils/common";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger
} from "./NavigationMenu";
import SubMenuItem from "./SubMenuItem";

const NavItemPersonAndOrganisation = (): JSX.Element => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <NavigationMenuItem isActive={isCrmPath(pathname)}>
      <NavigationMenuTrigger className="cursor-pointer">
        <MdOutlinePeopleAlt size="2rem" />
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <p className="my-4 font-kanit text-[1.375rem] font-semibold capitalize">
          {t("navBar.crm")}
        </p>
        <div className="custom-scrollbar mr-1 h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden">
          <SubMenuItem
            label={t("navBar.persons")}
            onClick={(): null => null}
            url="/persons"
          />

          <SubMenuItem
            label={t("organisationsListing.title")}
            onClick={(): null => null}
            url="/organisations"
          />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavItemPersonAndOrganisation;
