import React from "react";
import CAButton from "@credavenue/core-cabutton";
import Styles from "../styles/CAButton";

export default {
  title: "CAButton",
  component: CAButton,
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
    },
    size: { options: ["small", "medium", "large"], control: { type: "radio" } },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    quite: { control: "boolean" },
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
  value: "CAButton",
  children: "CAButton",
  type: "primary",
  size: "small",
  loading: false,
  disabled: false,
  quite: false,
  themeConfig: Styles,
};
