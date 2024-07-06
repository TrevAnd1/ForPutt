import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AnimatedBackground from "../../components/HomeScreenAnimation";
import Header from "../../components/Header";

const { height, width } = Dimensions.get("screen");

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AnimatedBackground />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
