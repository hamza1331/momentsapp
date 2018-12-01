import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class card53 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 349,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "auto"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage11.jpg")}
        />
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>Title goes here</Text>
          <Text style={styles.subtitleStyle}>Subtitle here</Text>
        </View>
      </TouchableOpacity>
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
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#000"
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  }
});
