import CACheckbox from "@credavenue/cacheckbox";
import { checkBoxStyle } from "../styles/CACheckbox";

export default {
  title: "CACheckbox",
  component: CACheckbox,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.3',
      },
    },
  },
  argTypes: {
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
    checked: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between checked and unchecked state",
    },
    indeterminate: {
      control: "boolean",
      defaultValue: { summary: false },
      description: "Toggle between intermediate and normal state",
    },
    themeConfig: {
      defaultValue: { summary: {} },
      description: "design tokens",
    },
    onClick: {
      control: Function,
      description: "Callback for click [type: (checked: boolean) => void]",
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
  checked,
  onClick,
  label,
  caption,
  size,
  disabled,
  indeterminate,
  themeConfig,
}) => (
  <CACheckbox
    checked={checked}
    onClick={onClick}
    label={label}
    caption={caption}
    size={size}
    disabled={disabled}
    indeterminate={indeterminate}
    themeConfig={themeConfig}
  />
);

export const Component = Template.bind({});

Component.args = {
  checked: false,
  onClick: () => {},
  label: "Label",
  caption: "Caption",
  size: "medium",
  disabled: false,
  indeterminate: false,
  themeConfig: checkBoxStyle,
};
