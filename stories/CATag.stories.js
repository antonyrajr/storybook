import React from "react";
import CATag from "@credavenue/catags";
import { caTagsStyle } from "../styles/CATags";
import CAIcon from "@credavenue/ca-core-icons";

export default {
  title: "CATag",
  component: CATag,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.3',
      },
    },
  },
  argTypes: {
    size: {
      options: ["s", "m", "l"],
      control: { type: "radio" },
      defaultValue: { summary: "m" },
      description: "Based on the height the size will vary",
    },
    look: {
      options: ["solid", "subtle", "outline"],
      control: { type: "radio" },
      defaultValue: { summary: "solid" },
      description: "changes the look of the tag",
    },
    state: {
      options: ["default", "hover", "selected", "disabled"],
      control: { type: "radio" },
      defaultValue: { summary: "default" },
      description: "Toggle between different state",
    },
    type: {
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "negative",
        "special",
      ],
      control: { type: "radio" },
      defaultValue: { summary: "primary" },
      description: "The type changes the look and feel of the Tag",
    },
    theme: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
    title: {
      description: "String",
    },
    leadingIcon: {
      description: "Icon (React Element)",
    },
    callback: {
      control: Function,
      description: "Callback for click [type: (checked: boolean) => void]",
    },
  },
};

const Template = ({
  title,
  theme,
  size,
  state,
  type,
  look,
  leadingIcon,
  callback,
}) => (
  <CATag
    title={title}
    theme={theme}
    size={size}
    state={state}
    type={type}
    look={look}
    leadingIcon={leadingIcon}
    callback={callback}
  />
);

export const Component = Template.bind({});

Component.args = {
  title: "Tag",
  theme: caTagsStyle,
  size: "l",
  state: "default",
  type: "secondary",
  look: "solid",
  leadingIcon: null,
  callback: function () {
    console.log("ca tag clicked");
  },
};
