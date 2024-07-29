'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { MdQueryStats } from 'react-icons/md';
import { NavigationMenuItem } from './NavigationMenu';
var NavigationItemInsights = function () {
    var pathname = usePathname();
    return (React.createElement(NavigationMenuItem, { isActive: pathname.startsWith('/insight') },
        React.createElement(MdQueryStats, { size: '2rem' })));
};
export default NavigationItemInsights;
//# sourceMappingURL=NavigationItemInsights.js.map