import React from "react";
import CASwitch from "@credavenue/core-switch";
import SwitchStyle from "../styles/CASwitch";

export default {
  title: "CASwitch",
  component: CASwitch,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.6',
      },
    },
  },
  argTypes: {
    checked: { control: "boolean",
    defaultValue: { summary: false },
    description: "Toggle between checked and unchecked state",
  },
    disabled: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between enabled and disabled state",
    },
    hovered: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: { summary: "medium" },
      description: "Based on the height the size will vary",
    },
    themeConfig: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
    text: {
      description: "String",
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
  text: "Swtich",
  size: "medium",
};
