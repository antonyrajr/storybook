import React from "react";
import CASwitch from "@credavenue/core-switch";
import SwitchStyle from "../styles/CASwitch";

export default {
  title: "CASwitch",
  component: CASwitch,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    hovered: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

const Template = ({
  checked,
  onClick,
  disabled,
  hovered,
  themeConfig,
  text,
  size,
}) => (
  <CASwitch
    checked={checked}
    onClick={onClick}
    disabled={disabled}
    hovered={hovered}
    themeConfig={themeConfig}
    text={text}
    size={size}
  >
    {undefined}
  </CASwitch>
);

export const Component = Template.bind({});

Component.args = {
  checked: false,
  disabled: false,
  hovered: false,
  themeConfig: SwitchStyle,
  text: "CASwitch",
  size: "small",
};
