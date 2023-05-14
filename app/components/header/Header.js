import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  touch,
  FlatList,
  TouchableOpacity,
} from "react-native";

function Header() {
  const [names, setName] = useState([
    { name: "Ahmed", id: 1 },
    { name: "Mohamed", id: 2 },
    { name: "Ali", id: 3 },
    { name: "Ibrahim", id: 5 },
    { name: "Yassen", id: 6 },
    { name: "Sami", id: 7 },
    { name: "Yousif", id: 8 },
    { name: "Mazin", id: 9 },
    { name: "Tarig", id: 10 },
    { name: "Mohaned", id: 11 },
  ]);

  const pressHandler = (id) => {
    setName((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.header}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={names}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.listNames}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {names.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.listNames}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
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
  listNames: {
    marginBottom: 20,
    padding: 10,
    width: 150,
    backgroundColor: "#a3a3a336",
    marginHorizontal: 20,
  },
});
export default Header;
