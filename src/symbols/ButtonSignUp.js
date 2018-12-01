import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default class ButtonSignup extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 100,
    height: 74
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        disabled={this.props.disabled}
        onPress={()=>this.props.navigation.push('SignUp')}
      >
        <Text style={styles.signIn}>Sign Up</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "darkcyan",
    borderRadius: 100,
    shadowColor: "rgba(255,255,255,0.2794384057971014)",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    height: 60
  },
  signIn: {
    top: "37.84%",
    left: "39.85%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    letterSpacing: -0.25,
    color: "rgba(255,255,255,1)"
  }
});
