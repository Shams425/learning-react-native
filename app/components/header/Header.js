import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

function Header() {
  const [names, setName] = useState([
    { name: "Ahmed", key: 1 },
    { name: "Mohamed", key: 2 },
    { name: "Ali", key: 3 },
    { name: "Ibrahim", key: 5 },
    { name: "Yassen", key: 6 },
    { name: "Sami", key: 7 },
  ]);

  return (
    <View style={styles.header}>
      <ScrollView>
        {names.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.listNames}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
    color: "#ff0000",
    fontSize: 18,
  },
  header: {
    marginTop: 50,
    padding: 20,
  },
  inputFiled: {
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    width: 350,
    borderWidth: 1,
    borderColor: "#a3a3a336",
    borderStyle: "solid",
  },
  listNames: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#a3a3a336",
    marginHorizontal: 20,
  },
});
export default Header;
