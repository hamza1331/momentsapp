import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list3 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <FlatList
        style={[styles.root, this.props.style]}
        renderItem={({ item, separators }) => {
          return (
            <View style={styles.rect1}>
              <Icon
                style={styles.iconStyle}
                name="checkbox-blank"
                type="MaterialCommunityIcons"
              />
              <View style={styles.content}>
                <Text style={styles.text1}>Single-line Item</Text>
              </View>
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  rect1: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16
  },
  iconStyle: {
    color: "#616161",
    fontSize: 32
  },
  content: {
    left: 72,
    right: 0,
    height: 48,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    paddingRight: 16,
    borderColor: "#BDBDBD",
    borderBottomWidth: 0.5
  },
  text1: {
    fontSize: 16,
    color: "#212121"
  }
});
