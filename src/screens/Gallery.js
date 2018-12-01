import React, { Component } from "react";

import Header4 from "../symbols/header4";
import List11 from "../symbols/list11";
import Card53 from "../symbols/card53";

import { View, StyleSheet, ScrollView } from "react-native";

export default class Gallery extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header4 title="Gallery" navigation={this.props.navigation} style={styles.header4} />
        <List11 style={styles.list11} />
        <ScrollView style={styles.scrollArea} />
        <Card53
          style={styles.card53}
          onPress={() => {
            this.props.navigation.push("Pictures");
          }}
        />
        <Card53
          style={styles.card532}
          onPress={() => {
            this.props.navigation.push("Pictures");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },

  header4: {
    top: 0,
    left: "0%",
    width: "100.83%",
    height: "5.95%",
    position: "absolute"
  },
  list11: {
    top: 36.32,
    left: 525.74,
    position: "absolute",
    height: 500,
    width: 375
  },
  scrollArea: {
    height: "94.05%",
    width: "100.16%",
    top: 44.62,
    left: 0,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  card53: {
    top: 44,
    left: 2,
    position: "absolute",
    width: "99.72%"
  },
  card532: {
    left: 0,
    width: "100%",
    position: "absolute",
    top: "55.16%"
  }
});
