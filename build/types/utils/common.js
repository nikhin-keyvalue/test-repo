export var opportunityAndDeliveryRoutes = [
    "/vehicles",
    "/quotations",
    "/deliveries",
    "/crm-settings",
    "/opportunities",
    "/miscellaneous",
    "/email-templates"
];
export var personAndOrganisationRoutes = ['/persons', '/organisations'];
export var isSalesPath = function (pathName) {
    return opportunityAndDeliveryRoutes.some(function (route) { return pathName.startsWith(route); });
};
export var isCrmPath = function (pathName) {
    return personAndOrganisationRoutes.some(function (route) { return pathName.startsWith(route); });
};
//# sourceMappingURL=common.js.map