import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useRef, useState } from "react";

export default function UserInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const showUserData = useRef(null);
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const updateUser = () => {
    if (nameInput.current.value === "" || ageInput.current.value === "") return;

    showUserData.current.innerText = `Hello ${name} your age is ${age}`;
  };

  return (
    <View>
      {/* this is a label */}
      <Text>Enter Your name:</Text>
      <TextInput
        value={name}
        placeHolder="e.g John Smith"
        onChange={(val) => setName(val.target.value)}
        styles={styles.inputFiled}
        ref={nameInput}
      />

      {/* this is a label */}
      <Text>Enter Your age:</Text>
      <TextInput
        placeHolder="e.g 19"
        keyboardType="numeric"
        value={age}
        onChange={(val) => setAge(val.target.value)}
        styles={styles.inputFiled}
        ref={ageInput}
      />

      <View style={styles.buttonStyle}>
        <Button title="Update" onPress={updateUser} />
      </View>

      <Text ref={showUserData}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputFiled: {
    width: "60vw",
    borderWidth: 1,
    borderColor: "#a3a3a336",
    borderStyle: "solid",
  },
  buttonStyle: {
    backgroundColor: "#fff",
    textTransform: "lowercase",
  },
});
