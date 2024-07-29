"use client";

import Link from "next/link";
import React from "react";

const SubMenuItem = ({
  label,
  url,
  prefetch,
  onClick,
}: {
  label: string;
  url: string;
  onClick?: (() => void) | undefined;
  prefetch?: boolean;
}): JSX.Element => (
  <Link
    href={url}
    className=" flex h-10 w-full cursor-pointer items-center pl-4 pr-2 font-semibold text-white no-underline hover:bg-primary"
    onClick={onClick}
    prefetch={!!prefetch}
  >
    {label}
  </Link>
);

export default SubMenuItem;
