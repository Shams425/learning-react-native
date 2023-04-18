import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text styles={styles.centerText}>hello from header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
    color: "#ff0000",
    fontSize: 15,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    textAlign: "center",
    zIndex: 9999,
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#a14242",
    color: "#FFFFFF",
  },
});
export default Header;
