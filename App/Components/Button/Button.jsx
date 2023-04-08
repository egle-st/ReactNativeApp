import { React } from "react";
import { Pressable, Text } from "react-native";

const Button = ({ onPress, title, style }) => {
  return (
    <Pressable onPress={onPress} style={style.button}>
      <Text numberOfLines={1} style={style.text}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
