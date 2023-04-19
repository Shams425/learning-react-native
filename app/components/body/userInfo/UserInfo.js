import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useRef, useState } from "react";

export default function UserInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Enter Your name:</Text>
      <TextInput
        placeholder="e.g John Smith"
        onChangeText={(val) => setName(val)}
        style={styles.inputFiled}
      />

      <Text>Enter Your age:</Text>
      <TextInput
        placeHolder="e.g 19"
        keyboardType="numeric"
        onChangeText={(val) => setAge(val)}
        style={styles.inputFiled}
      />

      <Text>
        Hello {name} your age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 25,
    padding: 20,
  },
  inputFiled: {
    width: 200,
    borderWidth: 1,
    borderColor: "#a3a3a336",
    borderStyle: "solid",
    marginBottom: 20,
  },
  buttonStyle: {
    textTransform: "lowercase",
  },
});
