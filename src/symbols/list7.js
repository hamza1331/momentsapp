import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list7 extends Component {
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
                name="checkbox-marked"
                type="MaterialCommunityIcons"
              />
              <View style={styles.content}>
                <Text style={styles.text1}>Two-line Item</Text>
                <Text style={styles.text2} numberOfLines={1}>
                  {" "}
                  Secondary text
                </Text>
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
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24
  },
  content: {
    left: 72,
    right: 0,
    height: 72,
    position: "absolute",
    justifyContent: "center",
    paddingRight: 16
  },
  text1: {
    paddingBottom: 8,
    fontSize: 16,
    color: "#212121"
  },
  text2: {
    fontSize: 13,
    color: "#9E9E9E"
  }
});
