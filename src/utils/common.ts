export const opportunityAndDeliveryRoutes = [
  "/vehicles",
  "/quotations",
  "/deliveries",
  "/crm-settings",
  "/opportunities",
  "/miscellaneous",
  "/email-templates"
];

export const personAndOrganisationRoutes = ['/persons', '/organisations'];

export const isSalesPath = (pathName: string): boolean =>
  opportunityAndDeliveryRoutes.some((route) => pathName.startsWith(route));

export const isCrmPath = (pathName: string): boolean =>
  personAndOrganisationRoutes.some((route) => pathName.startsWith(route));
