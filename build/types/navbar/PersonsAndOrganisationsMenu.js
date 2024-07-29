'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import NavItemPersonAndOrganisation from './NavItemPersonAndOrganisation';
import React from 'react';
var PersonsAndOrganisationsMenu = function () {
    var t = useTranslations('navBar');
    return (React.createElement(Link, { href: '/persons', className: 'text-inherit', title: t('crm') },
        React.createElement(NavItemPersonAndOrganisation, null)));
};
export default PersonsAndOrganisationsMenu;
//# sourceMappingURL=PersonsAndOrganisationsMenu.js.map