'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import NavItemPersonAndOrganisation from './NavItemPersonAndOrganisation';
import React from 'react';

const PersonsAndOrganisationsMenu = (): JSX.Element => {
  const t = useTranslations('navBar');

  return (
    <Link href='/persons' className='text-inherit' title={t('crm')}>
      <NavItemPersonAndOrganisation />
    </Link>
  );
};

export default PersonsAndOrganisationsMenu;
