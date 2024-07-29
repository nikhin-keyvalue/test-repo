"use client";

import { usePathname } from "next/navigation";
import React, { ComponentType, ReactNode, Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { MdOutlineDirectionsCar } from "react-icons/md";

// import DynamicSearchCriteriaFallback from "@/components/search-criteria/DynamicSearchCriteriaFallback";
// import Spinner from "@/components/Spinner";
import { useTranslations } from "next-intl";

import StaticFilterSubmenu from "./StaticFilterSubmenu";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./NavigationMenu";

const NavigationItemStock = ({
  dynamicFilterSubMenu,
}: {
  dynamicFilterSubMenu: ReactNode;
}): JSX.Element => {
  const t = useTranslations();
  const pathname = usePathname();
  // TODO: Revisit;

  return (
    <NavigationMenuItem isActive={pathname.startsWith("/stock")}>
      <NavigationMenuTrigger className="cursor-pointer">
        <MdOutlineDirectionsCar size="2rem" />
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <p className="my-4 font-kanit text-[1.375rem] font-semibold">
          {t("navBar.vehicles")}
        </p>
        <div className="custom-scrollbar mr-1 h-[calc(100vh-72px)] overflow-y-auto overflow-x-hidden">
          <StaticFilterSubmenu />
          <div className="mt-8 w-full">
            <Suspense
              fallback={
                <div className="flex w-full justify-center">
                  {/* <Spinner /> */}
                  Loding...
                </div>
              }
            >
              {dynamicFilterSubMenu}
            </Suspense>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavigationItemStock;
