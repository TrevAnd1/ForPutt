import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AnimatedBackground from "../../components/HomeScreenAnimation";
import AnimatedBackground2 from "../../components/HomeScreenAnimation2";
import { Header, Icon } from "react-native-elements";
import HeaderCenterComponent from "../../components/HeaderCenterComponent";

const { height, width } = Dimensions.get("screen");

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        placement="left"
        backgroundColor="grey"
        statusBarProps={{ barStyle: "light-content" }}
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={<HeaderCenterComponent />}
        rightComponent={{ icon: "account-circle", color: "#fff" }}
      />
      <AnimatedBackground2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
  },
});

export default HomeScreen;
