import React, { Component } from "react";
import Icon from "@builderx/icons";

import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Username extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 378,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect1}>
          <Icon
            style={styles.icon}
            name={this.props.iconName ? this.props.iconName : "account"}
            type={
              this.props.iconType ? (
                this.props.iconType
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            ref={this.props.ref}
            clearButtonMode="always"
            style={styles.textInput}
            placeholder={
              this.props.textInput ? this.props.textInput : "Email"
            }
            placeholderTextColor="#FFF"
            onChangeText={this.props.onChangeText}
            onBlur={this.props.onBlur}
          />
        </View>
        <Text
          style={[
            styles.textNaN,
            {
              color: this.props.errorText
                ? "rgba(208,2,27,1)"
                : "rgba(155,155,155,0)"
            }
          ]}
        >
          {this.props.errorText}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(49,166,222,1)"
  },

  rect1: {
    flexDirection: "row"
  },
  textNaN: {
    alignSelf: "flex-end",
    paddingTop: 4,
    paddingRight: 8
  },

  textInput: {
    backgroundColor: "transparent",
    fontSize: 16,
    letterSpacing: -0.22,
    color: "rgba(255,255,255,1)",
    flex: 1,
    height: 50,
    alignSelf: "stretch",
    marginLeft: 12
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 16
  }
});
