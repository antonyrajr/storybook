import React from "react";
import CAInputField from "@credavenue/core-input-field";
import InputStyle from "../styles/CAInput";
import Linkstyle from "../styles/CALink";

export default {
  title: "CAInputField",
  component: CAInputField,
  argTypes: {
    alert: { control: "boolean" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    disabled: { control: "boolean" },
    KeyboadTypes: {
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
    },
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
  value: "CAInputField",
  placeholder: "CAInputField",
  suffix: "CAInputField",
  label: "CAInputField",
  caption: "CAInputField",
  leadingIcon: null,
  trailingIcon: null,
  themeConfig: {
    inputFieldThemeConfig: InputStyle,
    linkThemeConfig: Linkstyle,
  },
  alert: false,
  size: "small",
  disabled: false,
  keyboardType: "default",
  actionName: "Link",
};
