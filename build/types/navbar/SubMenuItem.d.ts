/// <reference types="react" />
declare const SubMenuItem: ({ label, url, prefetch, onClick, }: {
    label: string;
    url: string;
    onClick?: (() => void) | undefined;
    prefetch?: boolean | undefined;
}) => JSX.Element;
export default SubMenuItem;
