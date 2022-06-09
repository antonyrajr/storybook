import React from "react";
import CAIcon from "@credavenue/ca-core-icons";

export default {
  title: "CAIcon",
  component: CAIcon,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.1.2',
      },
    },
  },
  argTypes: {
    name: {
      options: ["loader"],
      control: { type: "radio" },
      description: "name of the icons",
    },
    size: {
      description: "Pass size as int",
      defaultValue: {summary: 22}
    },
    color: {
      description: "Pass color in Hex code or color value",
      defaultValue: {summary: "black"}
    }
  },
};

const Template = ({ size, color, name, onClick }) => (
  <CAIcon size={size} color={color} name={name} onClick={onClick}>
    {undefined}
  </CAIcon>
);

export const Component = Template.bind({});

Component.args = { size: 22, color: "CAIcon", name: "loader" };
