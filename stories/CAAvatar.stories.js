import React from "react";
import CAAvatar from "@credavenue/caavatar";
import { caAvatarStyle } from "../styles/CAAvatar";

export default {
  title: "CAAvatar",
  component: CAAvatar,
  parameters: {
    docs: {
      description: {
        component: 'Version 1.0.5',
      },
    },
  },
  argTypes: {
    size: {
      options: ["tiny", "xs", "s", "m", "l", "xl"],
      control: { type: "radio" },
      defaultValue: { summary: "m" },
      description: "Based on the height the size will vary",
    },
    avatarType: {
      options: [
        "Initial",
        "Initial-Title-Caption",
        "Image",
        "Image-Title-Caption",
      ],
      control: { type: "radio" },
      defaultValue: { summary: "Initial-Title-Caption" },
      description: "Based on types diff types of avatar can be represented",
    },
    isActive: {
      control: "boolean",
      defaultValue: { summary: false},
      description: "represents online or offline",
    },
    avatarTheme: {
      defaultValue: { summary: {}},
      description: "design tokens",
    },
    title: {
      description: "String"
    },
    caption: {
      description: "String"
    },
    image: {
      description: "Image (React Element)"
    }
  },
};

const Template = ({
  avatarTheme,
  size,
  avatarType,
  title,
  caption,
  isActive,
  image,
}) => (
  <CAAvatar
    avatarTheme={avatarTheme}
    size={size}
    avatarType={avatarType}
    title={title}
    caption={caption}
    isActive={isActive}
    image={image}
  >
    {undefined}
  </CAAvatar>
);

export const Component = Template.bind({});

Component.args = {
  avatarTheme: caAvatarStyle,
  size: "xl",
  avatarType: "Initial-Title-Caption",
  title: "John Doe",
  caption: "Developer",
  isActive: false,
  image: "caAvatar",
};
