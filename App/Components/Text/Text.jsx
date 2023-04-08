import React from "react";
import { Text } from "react-native";

const Text = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default Text;
