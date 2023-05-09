import React from "react";

import { Image } from "react-native";

const MyImage = ({ source, style }) => {
  return <Image style={style} source={source}></Image>;
};

export default MyImage;
