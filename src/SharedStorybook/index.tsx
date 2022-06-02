import React, { FC } from "react";
import { View, Text } from "react-native";
import SharedStorybookStyle from "./SharedStorybook.style";
import { SharedStorybookProps } from "./SharedStorybook.type";

const SharedStorybook: FC<SharedStorybookProps> = (props) => {
  const {} = props;

  return (
    <View style={SharedStorybookStyle.container}>
      <Text>SharedStorybook Working!!!</Text>
    </View>
  );
};

export default SharedStorybook;
