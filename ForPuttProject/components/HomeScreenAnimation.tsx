import { Animated, StyleSheet, View, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";

const { height } = Dimensions.get("window");

const AnimatedBackground: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const backgroundColorInterpolation = animatedValue.interpolate({
    inputRange: [0, height],
    outputRange: ["#00FF00", "#FFFFFF"],
  });

  const animatedStyle = {
    transform: [{ translateY: animatedValue }],
  };

  const backgroundStyle = {
    backgroundColor: backgroundColorInterpolation,
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.animatedBackground, animatedStyle, backgroundStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF",
  },
  animatedBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: height,
  },
});

export default AnimatedBackground;
