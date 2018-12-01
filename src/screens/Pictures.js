import React, { Component } from "react";
import Header4 from "../symbols/header4";
import { Center } from "@builderx/utils";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

export default class Pictures extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header4 title="Pictures" navigation={this.props.navigation} style={styles.header4} />
        <ScrollView style={styles.scrollArea} />
        <Image
          source={require("../assets/DSC100472064.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/dawn-3725927_1920.jpg")}
          style={styles.image2}
        />
        <Image
          source={require("../assets/dawn-3358468_1920.jpg")}
          style={styles.image3}
        />
        <Image
          source={require("../assets/pier-407252_1920.jpg")}
          style={styles.image4}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header4: {
    top: 0,
    left: 0,
    width: "100.83%",
    height: "5.95%",
    position: "absolute"
  },
  scrollArea: {
    height: "93.78%",
    width: "100%",
    left: 3,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    top: "5.95%"
  },
  image: {
    height: 153,
    width: 180,
    position: "absolute",
    left: "0%",
    top: "5.95%"
  },
  image2: {
    height: 151,
    width: 180,
    top: 46,
    left: 181,
    position: "absolute"
  },
  image3: {
    height: 157,
    width: 180,
    position: "absolute",
    left: "0%",
    top: "28.08%"
  },
  image4: {
    height: 155,
    width: 181,
    top: 209,
    left: 180,
    position: "absolute"
  }
});
