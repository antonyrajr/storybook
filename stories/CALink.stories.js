import React from "react";
import CALink from "@credavenue/core-link";
import Style from "../styles/CALink";

export default {
  title: "CALink",
  component: CALink,
  argTypes: {
    type: {
      options: [
        "primary",
        "secondary",
        "contrastPrimary",
        "negative",
        "success",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
  },
};

const Template = ({ type, size, onPress, themeConfig, name, disabled }) => (
  <CALink
    type={type}
    size={size}
    onPress={onPress}
    themeConfig={themeConfig}
    name={name}
    disabled={disabled}
  >
    {undefined}
  </CALink>
);

export const Component = Template.bind({});

Component.args = {
  type: "primary",
  size: "small",
  themeConfig: Style,
  name: "CALink",
  disabled: false,
};
