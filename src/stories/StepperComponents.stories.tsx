import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavBar from "../navbar/navbar";
import {Role} from "../navbar/types";

const user = {
  id: 2367429,
  login: "demo-dealer",
  firstName: "Demo",
  lastName: "Dealer",
  email: "sales@am-i.nl",
  imageUrl: "",
  activated: true,
  langKey: "nl",
  displayValue: "demo-dealer",
  tenant: {
    id: 2367479,
    displayValue: "Demo Dealer",
    groupName: "",
  },
  createdBy: "jeroen",
  createdDate: "2020-07-30T10:33:11.337Z",
  lastModifiedBy: "jeroen",
  lastModifiedDate: "2024-06-28T06:46:27.360Z",
  authorities: [
    "ROLE_DEALER_ADMIN",
    "ROLE_CRM",
    "ROLE_DEALER",
    "ROLE_USER",
    "ROLE_ARTICLE_MANAGEMENT",
    "ROLE_DEALER_ADMIN_PREVIEW",
    "ROLE_SALES",
    "ROLE_RELATION",
  ] as Role[],
  firebaseNamespace: "tasks-data-updates:dev/demo-dealer",
  locale: "nl_NL",
  localeList: ["nl_NL", "nl_BE", "fr_BE"],
};

export default {
  title: "Example/Stepper2",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (props) => (
  <NavBar {...props} user={user} />
);

export const HorizontalStepperWithLabelOnLeft = Template.bind({});
HorizontalStepperWithLabelOnLeft.args = {
  user,
};
