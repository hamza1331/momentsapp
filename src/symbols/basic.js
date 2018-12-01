import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class basic extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.buttonWrapper1}>
          <Icon
            style={styles.icon1}
            name="television"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.text1}>Movies & Tv</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeButtonWrapper}>
          <Icon
            style={styles.activeIcon}
            name="music-note"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.activeText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper2}>
          <Icon
            style={styles.icon2}
            name="book"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.text2}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper3}>
          <Icon
            style={styles.icon3}
            name="calendar-text"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.text3}>Calendar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3f51b5",
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
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#FFFFFF",
    fontSize: 24
  },
  text1: {
    opacity: 0.8,
    fontSize: 0,
    fontFamily: "Roboto",
    color: "#FFFFFF"
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
    opacity: 1,
    color: "#FFFFFF",
    fontSize: 24
  },
  activeText: {
    opacity: 1,
    paddingTop: 4,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#FFFFFF"
  },
  buttonWrapper2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#FFFFFF",
    fontSize: 24
  },
  text2: {
    opacity: 0.8,
    fontSize: 0,
    fontFamily: "Roboto",
    color: "#FFFFFF"
  },
  buttonWrapper3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#FFFFFF",
    fontSize: 24
  },
  text3: {
    opacity: 0.8,
    fontSize: 0,
    fontFamily: "Roboto",
    color: "#FFFFFF"
  }
});
