import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Dimensions, Easing } from "react-native";

const { height, width } = Dimensions.get("screen");

const AnimatedBackground2: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const backgroundOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: -height,
        duration: 2000,
        easing: Easing.bezier(0.42, 0, 0.58, 1),
        useNativeDriver: false,
      }),
      Animated.timing(backgroundOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [animatedValue, backgroundOpacity]);

  const golfBallStyle = {
    transform: [{ translateY: animatedValue }],
  };

  const backgroundStyle = {
    opacity: backgroundOpacity,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, backgroundStyle]} />
      <Animated.View style={[styles.golfBall, golfBallStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00FF00",
    opacity: 0,
  },
  golfBall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFF",
    borderColor: "#00000",
    borderWidth: 1,
    color: "#FFFFF",
  },
});

export default AnimatedBackground2;
