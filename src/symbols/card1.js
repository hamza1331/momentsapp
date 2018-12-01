import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default class card1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 282,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/jQuery-Plugin-For-Stacked-Polaroid-Image-Gallery-Photopile.jpg")}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",

    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "rgba(49,166,222,0.3)",
    height: 227.59
  }
});
