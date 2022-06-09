import React from "react";
import CAInputField from "@credavenue/core-input-field";
import InputStyle from "../styles/CAInput";
import Linkstyle from "../styles/CALink";

export default {
  title: "CAInputField",
  component: CAInputField,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.4',
      },
    },
  },
  argTypes: {
    alert: {
      control: "boolean",
      description: "Toggle between normal and alert state",
      defaultValue: { summary: false },
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
    keyboardType: {
      options: [
        "default",
        "number-pad",
        "decimal-pad",
        "numeric",
        "email-address",
        "phone-pad",
        "url",
      ],
      control: { type: "radio" },
      defaultValue: { summary: "default" },
      description: "Shows different variants of keyboard",
    },
    value: {
      description: "String",
    },
    placeholder: {
      description: "String",
    },
    suffix: {
      description: "String",
    },
    label: {
      description: "String",
    },
    caption: {
      description: "String",
    },
    leadingIcon: {
      description: "Icon (React Element)",
    },
    trailingIcon: {
      description: "Icon (React Element)",
    },
    themeConfig: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
    actionName: {
      description: "Enter link name",
    }
  },
};

const Template = ({
  value,
  placeholder,
  suffix,
  label,
  caption,
  leadingIcon,
  trailingIcon,
  onChangeText,
  onSubmitEditing,
  themeConfig,
  alert,
  size,
  disabled,
  keyboardType,
  actionName,
  actionLinkOnPress,
}) => (
  <CAInputField
    value={value}
    placeholder={placeholder}
    suffix={suffix}
    label={label}
    caption={caption}
    leadingIcon={leadingIcon}
    trailingIcon={trailingIcon}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
    themeConfig={themeConfig}
    alert={alert}
    size={size}
    disabled={disabled}
    keyboardType={keyboardType}
    actionName={actionName}
    actionLinkOnPress={actionLinkOnPress}
  >
    {undefined}
  </CAInputField>
);

export const Component = Template.bind({});

Component.args = {
  value: "",
  placeholder: "Enter value",
  suffix: "Sufix",
  label: "Label",
  caption: "Caption",
  leadingIcon: null,
  trailingIcon: null,
  themeConfig: {
    inputFieldThemeConfig: InputStyle,
    linkThemeConfig: Linkstyle,
  },
  alert: false,
  size: "medium",
  disabled: false,
  keyboardType: "default",
  actionName: "Link",
};
