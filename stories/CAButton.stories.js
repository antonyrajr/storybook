import React from "react";
import CAButton from "@credavenue/core-cabutton";
import Styles from "../styles/CAButton";

export default {
  title: "CAButton",
  component: CAButton,
  parameters: {
    docs: {
      description: {
        component: 'Version 3.3.1',
      },
    },
  },
  argTypes: {
    type: {
      options: [
        "primary",
        "secondary",
        "success",
        "negative",
        "cta",
        "contrastCta",
        "contrastPrimary",
      ],
      control: { type: "radio" },
      defaultValue: { summary: "cta" },
      description: "The type changes the look and feel of the button",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: { summary: "medium" },
      description: "Based on the height the size will vary",
    },
    loading: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between loading and non-loading state",
    },
    disabled: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between enabled and disabled state",
    },
    quite: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Quite variant of chosen type",
    },
    value: {
      description: "String",
    },
    children: {
      description: "String",
    },
    themeConfig: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
  },
};

const Template = ({
  value,
  children,
  type,
  size,
  loading,
  disabled,
  quite,
  leadingIcon,
  trailingIcon,
  themeConfig,
  onClick,
}) => (
  <CAButton
    value={value}
    children={children}
    type={type}
    size={size}
    loading={loading}
    disabled={disabled}
    quite={quite}
    leadingIcon={leadingIcon}
    trailingIcon={trailingIcon}
    themeConfig={themeConfig}
    onClick={onClick}
  >
    {children}
  </CAButton>
);

export const Component = Template.bind({});

Component.args = {
  value: "Button",
  children: "Button",
  type: "cta",
  size: "medium",
  loading: false,
  disabled: false,
  quite: false,
  themeConfig: Styles,
};
