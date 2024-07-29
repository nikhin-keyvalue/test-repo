import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import React from "react";
interface NavigationMenuItemProps extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> {
    isActive: boolean;
}
declare const NavigationMenuViewport: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const NavigationMenu: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React.RefAttributes<HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React.ForwardRefExoticComponent<NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>;
declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuIndicator: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuIndicator, NavigationMenuViewport, };
