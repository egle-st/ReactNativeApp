import React from "react";
import { Image } from "react-native";

const Image = ({ source, style }) => {
  return <Image style={style} source={source}></Image>;
};

export default Image;
