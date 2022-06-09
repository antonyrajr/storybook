import React from "react";
import CALink from "@credavenue/core-link";
import Style from "../styles/CALink";

export default {
  title: "CALink",
  component: CALink,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.2',
      },
    },
  },
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
      defaultValue: { summary: "cta" },
      description: "The type changes the look and feel of the Link",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: { summary: "medium" },
      description: "Based on the height the size will vary",
    },
    disabled: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between enabled and disabled state",
    },
    themeConfig: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
    name: {
      description: "String",
    },
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
  size: "medium",
  themeConfig: Style,
  name: "Click Here",
  disabled: false,
};
