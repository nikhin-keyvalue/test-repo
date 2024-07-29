'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { NavigationMenuItem } from './NavigationMenu';
var NavigationItemDashboard = function () {
    var pathname = usePathname();
    return (React.createElement(NavigationMenuItem, { isActive: pathname.startsWith('/dashboard') },
        React.createElement(MdOutlineDashboard, { size: '2rem' })));
};
export default NavigationItemDashboard;
//# sourceMappingURL=NavigationItemDashboard.js.map