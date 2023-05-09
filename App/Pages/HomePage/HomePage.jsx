import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Logo from "../../assets/logoAPI.svg";
import Button from "../../Components/Button/Button";
import { buttonStyles } from "../../Components/Button/buttonstyles";

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={{
        uri: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Flexn Presents</Text>

        <Button
          title={"Browse"}
          style={buttonStyles.allButtons}
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title={"Login"}
          style={buttonStyles.allButtons}
          accessibilityLabel={"Go to Login page"}
        />
      </View>
      <View style={styles.container2}>
        <Logo width={50} height={50} />
        <Text style={styles.textBottom}>
          *Photo by Olena Sergienko on Unsplash. {"\n"}*This product uses the
          TMDB API but is not endorsed or certified by TMDB.
        </Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //undefined,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    widht: "100%",
  },
  container2: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "95%",
    margin: 10,
  },
  title: {
    fontSize: 40,
    marginBottom: 95,
    color: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  textBottom: {
    color: "#C9CCD5",
    fontSize: 9,
    margin: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default HomePage;
