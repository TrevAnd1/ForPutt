import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HeaderCenterComponent = () => {
  return (
    <View>
      <Text style={styles.text}>ForPutt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Arthington",
    fontSize: 24,
  },
});

export default HeaderCenterComponent;
