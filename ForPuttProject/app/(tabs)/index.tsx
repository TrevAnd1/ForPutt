import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AnimatedBackground from "../../components/HomeScreenAnimation";
import AnimatedBackground2 from "../../components/HomeScreenAnimation2";

const { height, width } = Dimensions.get("screen");

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
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
  header: {
    borderColor: "#00000",
    backgroundColor: "#fffff",
    height: 10,
    width: width,
  },
});

export default HomeScreen;
