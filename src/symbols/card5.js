import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

export default class card5 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 350,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/maps-local-search1-ss-1920-800x450.jpg")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
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
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 210
  }
});
