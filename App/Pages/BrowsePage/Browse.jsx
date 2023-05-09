import { React, useState } from "react";
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  Modal,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
//import Video from "react-native-video";
//import ShortVideo from "../../assets/ducksvideo.mp4";

import OneMovieSet from "../../Components/OneMovieSet/OneMovieSet";

const Browse = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        }}
      >
        <TouchableWithoutFeedback>
          <ScrollView
            style={styles.scrollView}
            removeClippedSubviews={true}
            scrollEventThrottle={16}
            keyboardDismissMode="on-drag"
          >
            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={{ flex: 2 / 3, backgroundColor: "white" }}>
                <ImageBackground
                  style={[styles.imageBackground, { opacity: 0.8 }]}
                  source={{
                    uri: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
                  }}
                >
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                      }}
                      style={styles.image}
                    />
                    {/*<Video
                    source={ShortVideo}
                    onError={this.videoError} // Callback when video cannot be loaded
                    style={styles.backgroundVideo}
                  />*/}

                    <Text style={styles.modalTextTitle}>Movie Details</Text>
                    <Text style={styles.modalTextDetails}>
                      Details about movie. Details about movie. Details about
                      movie. Details about movie. Details about movie.
                    </Text>
                    <Text style={styles.modalTextDetails}>Play Movie</Text>
                    <Text style={styles.modalTextDetails}>Add To Library</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </Modal>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <OneMovieSet
                  style={{ flex: 1 }}
                  onPress={() => setModalVisible(true)}
                />
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
              </View>
            </ScrollView>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <OneMovieSet
                  style={{ flex: 1 }}
                  onPress={() => setModalVisible(true)}
                />
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
              </View>
            </ScrollView>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
              </View>
            </ScrollView>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
              </View>
            </ScrollView>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
                <OneMovieSet style={{ flex: 1 }} />
              </View>
            </ScrollView>
          </ScrollView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: 50,

    justifyContent: "center",
    zIndex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 200,
    margin: 30,
    borderRadius: 15,
  },
  scrollView: {
    paddingTop: 50,
  },
  modalTextTitle: {
    color: "#fff",
    fontSize: 30,
    margin: 10,
  },
  modalTextDetails: {
    color: "#fff",
    fontSize: 15,
    margin: 10,
  },
  video: {
    flex: 1,
    height: 300,
    backgroundColor: "black",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Browse;
