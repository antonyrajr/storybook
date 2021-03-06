import React from "react";
import CARadioButton from "@credavenue/caradiobutton";
import themeConfig from "../styles/CARadio";

export default {
  title: "CARadioButton",
  component: CARadioButton,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.6',
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between enabled and disabled state",
    },
    alert: {
      control: "boolean",
      description: "Toggle between normal and alert state",
      defaultValue: { summary: false },
    },
    hovered: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: { summary: "medium" },
      description: "Based on the height the size will vary",
    },
    checked: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between checked and unchecked state",
    },
    themeConfig: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
    label: {
      description: "String",
    },
    caption: {
      description: "String",
    },
  },
};

const Template = ({
  id,
  label,
  caption,
  disabled,
  alert,
  hovered,
  size,
  onClick,
  themeConfig,
  checked,
}) => (
  <CARadioButton
    id={id}
    label={label}
    caption={caption}
    disabled={disabled}
    alert={alert}
    hovered={hovered}
    size={size}
    onClick={onClick}
    themeConfig={themeConfig}
    checked={checked}
  >
    {undefined}
  </CARadioButton>
);

export const Component = Template.bind({});

Component.args = {
  id: 22,
  label: "Radio",
  caption: "Caption",
  disabled: false,
  alert: false,
  hovered: false,
  size: "medium",
  themeConfig: themeConfig,
  checked: false,
};
