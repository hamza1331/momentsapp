import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class iconTextButtons extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.buttonWrapper1}>
          <Icon
            style={styles.icon1}
            name="timer"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.content1}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeButtonWrapper}>
          <Icon
            style={styles.activeIcon}
            name="heart"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.activeContent}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <Icon
            style={styles.icon2}
            name="map-marker-radius"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.content2}>Nearby</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  buttonWrapper1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content1: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  },
  activeButtonWrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168
  },
  activeIcon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#3f51b5",
    fontSize: 24
  },
  activeContent: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#3f51b5"
  },
  buttonWrapper2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content2: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  }
});
