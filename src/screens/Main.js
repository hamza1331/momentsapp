import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import Card1 from "../symbols/card1";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image
} from "react-native";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          style={styles.statusBar}
          hidden={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.push("Camera");
          }}
        />
        <Center horizontal>
          <Icon
            name="camera"
            style={styles.icon}
            type="MaterialCommunityIcons"
          />
        </Center>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.push("Map");
          }}
        >
          <View style={styles.rect} />
          <Image
            style={styles.image}
            source={require("../assets/location-icon_1083-93.jpg")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.props.navigation.push("Gallery");
          }}
        />
        <Image
          source={require("../assets/jQuery-Plugin-For-Stacked-Polaroid-Image-Gallery-Photopile.jpg")}
          style={styles.image2}
          resizeMode="stretch"
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
  button: {
    height: "28.96%",
    width: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(49,166,222,1)",
    opacity: 1
  },
  icon: {
    top: 35,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 145
  },
  card1: {
    left: -4,
    position: "absolute",
    width: 364,
    top: "33.51%",
    height: "31.93%"
  },
  statusBar: {},
  button2: {
    height: "30.04%",
    width: "100%",
    top: 484,
    left: -2,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  rect: {
    top: 0,
    left: 0,
    width: 360,
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  image: {
    top: 0,
    left: 57,
    width: 245,
    height: 219,
    position: "absolute"
  },
  button3: {
    height: "36.13%",
    width: "99.67%",
    top: 217.88,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  image2: {
    height: "29.36%",
    width: "80%",
    position: "absolute",
    top: "35.45%",
    left: "9.72%"
  }
});
