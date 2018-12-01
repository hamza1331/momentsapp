import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";

export default class list9 extends Component {
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
              <Image
                style={styles.avatarImageStyle}
                source={require("../assets/cardImage3.jpg")}
              />
              <View style={styles.content}>
                <Text style={styles.text1}>Two-line Item</Text>
                <Text style={styles.text2} numberOfLines={1}>
                  {" "}
                  Secondary text
                </Text>
              </View>
              <Icon
                style={styles.iconStyle}
                name="message"
                type="MaterialCommunityIcons"
              />
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFF",
    paddingTop: 8,
    flex: 1,
    margin: 0
  },
  rect1: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16
  },
  avatarImageStyle: {
    width: 40,
    height: 40,
    backgroundColor: "#CCCCCC",
    borderRadius: 20
  },
  content: {
    left: 72,
    right: 0,
    height: 72,
    position: "absolute",
    justifyContent: "center",
    paddingRight: 40,
    borderColor: "#BDBDBD",
    borderBottomWidth: 0.5
  },
  text1: {
    paddingBottom: 8,
    fontSize: 16,
    color: "#212121"
  },
  text2: {
    fontSize: 13,
    color: "#9E9E9E"
  },
  iconStyle: {
    right: 16,
    position: "absolute",
    color: "#CCCCCC",
    fontSize: 24
  }
});
