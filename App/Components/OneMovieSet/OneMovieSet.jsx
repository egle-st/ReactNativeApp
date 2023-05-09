import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import MyText from "../Text/MyText";
import MyImage from "../Image/MyImage";

const OneMovieSet = ({ onPress }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: 300,
        height: 250,
        margin: 40,
        elevation: 30,
      }}
    >
      <MyText style={styles.title}>Category Title</MyText>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <MyImage
          source={{
            uri: "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <MyText style={styles.text2}>
          Photo by Roman Skrypnyk on Unsplash
        </MyText>
        <MyText style={styles.title}>Movie Title</MyText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
    borderRadius: 15,
  },
  title: {
    color: "#fff",
    fontSize: 30,
  },
  text2: {
    color: "#fff",
    fontSize: 10,
  },
});

export default OneMovieSet;
