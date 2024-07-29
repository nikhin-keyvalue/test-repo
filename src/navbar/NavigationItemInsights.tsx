'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MdQueryStats } from 'react-icons/md';

import { NavigationMenuItem } from './NavigationMenu';

const NavigationItemInsights = (): JSX.Element => {
  const pathname = usePathname();
  return (
    <NavigationMenuItem isActive={pathname.startsWith('/insight')}>
      <MdQueryStats size='2rem' />
    </NavigationMenuItem>
  );
};

export default NavigationItemInsights;
