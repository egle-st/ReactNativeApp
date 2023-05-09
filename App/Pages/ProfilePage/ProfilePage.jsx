import { Text, ImageBackground, StyleSheet, View } from "react-native";

const ProfilePage = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.image}
      source={{
        uri: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Profile Page</Text>
      </View>
    </ImageBackground>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
