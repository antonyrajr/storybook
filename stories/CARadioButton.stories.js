import React from "react";
import CARadioButton from "@credavenue/caradiobutton";
import themeConfig from "../styles/CARadio";

export default {
  title: "CARadioButton",
  component: CARadioButton,
  argTypes: {
    disabled: { control: "boolean" },
    alert: { control: "boolean" },
    hovered: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    checked: { control: "boolean" },
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
  label: "CARadioButton",
  caption: "CARadioButton",
  disabled: false,
  alert: false,
  hovered: false,
  size: "small",
  themeConfig: themeConfig,
  checked: false,
};
