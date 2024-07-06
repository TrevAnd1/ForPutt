import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

const Header: React.FC = () => {
  const screenWidth = Dimensions.get("window").width;
  const [loaded, error] = useFonts({
    Arthington: require("../assets/fonts/Arthington.ttf"),
  });
  const ImageHeader = (props) => (
    <View style={{ backgroundColor: "#eee" }}>
      <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri: "https://i.pinimg.com/564x/05/6f/ed/056fed8b1554943b8190a9f99870a730.jpg",
        }}
      />
      <Header {...props} style={{ backgroundColor: "transparent" }} />
    </View>
  );

  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: "https://i.pinimg.com/564x/05/6f/ed/056fed8b1554943b8190a9f99870a730.jpg",
        }}
      ></Image>
      <Text style={styles.title}>ForPutt</Text>
      {screenWidth > 600 ? (
        <View style={styles.navContainer}>
          <TouchableOpacity>
            <Text style={styles.navItem}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navItem}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navItem}>Contact</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Menu</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: "11%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#6200ee",
  },
  title: {
    paddingLeft: 10,
    fontSize: 25,
    fontFamily: "Arthington",
    color: "#fff",
    paddingTop: 30,
    flex: 1,
  },
  navContainer: {
    flexDirection: "row",
  },
  navItem: {
    marginHorizontal: 10,
    fontSize: 18,
    color: "#fff",
  },
  menuButton: {
    padding: 10,
    backgroundColor: "#3700b3",
    borderRadius: 10,
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Artington",
  },
});

export default Header;
