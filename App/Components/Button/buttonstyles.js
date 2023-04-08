import { StyleSheet } from "react-native";
const buttonStyles = StyleSheet.create({
  allButtons: {
    button: {
      backgroundColor: "rgba(68,60,104, 0.5)",
      borderColor: "rgb(99,89,133)",
      margin: 10,
      paddingTop: 10,
      paddingRight: 30,
      paddingBottom: 10,
      paddingLeft: 30,
      borderRadius: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "70%",
      maxHeight: 50,
      borderWidth: 2,
    },
    text: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
    },
  },
});

export { buttonStyles };
