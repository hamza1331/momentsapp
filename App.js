import React from "react";
import { YellowBox, AsyncStorage } from "react-native";

import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

import { Font } from "expo";

import Main from "./src/screens/Main";
import Camera from "./src/screens/Camera";
import Gallery from "./src/screens/Gallery";

import MapScreen from "./src/screens/Map";
import Pictures from "./src/screens/Pictures";

import { createStackNavigator,createAppContainer } from "react-navigation";
let user = [
  {
    id: 1,
    username: "Test",
    password: "test",
    email: "Test"
  }
];
const StackNavigation = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Main: {
      screen: Main
    },
    Camera: {
      screen: Camera
    },
    Gallery: {
      screen: Gallery
    },
    Map: {
      screen: MapScreen
    },
    Pictures: {
      screen: Pictures
    }
  },
  {
    headerMode: "none"
  }
);
const Root = createAppContainer(StackNavigation)
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  storeData = async user => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    this.storeData(user);
    // AsyncStorage.setItem("user", JSON.stringify(users));
    await Font.loadAsync({
      "Avenir-Medium": require("./src/assets/fonts/Arial.ttf"),
      Chalkduster: require("./src/assets/fonts/Chalkduster.ttf"),
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
        <Root />
    ) : (
      <Expo.AppLoading />
    );
  }
}
