import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

function Header(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const showUserData = useRef(null);
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const updateUser = () => {
    showUserData.current.innerText = `Hello ${name} your age is ${age}`;
  };

  return (
    <View style={styles.header}>
      <Text>Enter Your name:</Text>
      <TextInput
        placeHolder="e.g John Smith"
        onChange={(val) => setName(val)}
        styles={styles.inputFiled}
        ref={nameInput}
      />

      <Text>Enter Your age:</Text>
      <TextInput
        placeHolder="e.g 19"
        keyboardType="numeric"
        onChange={(val) => setAge(val)}
        styles={styles.inputFiled}
        ref={ageInput}
      />

      <View>
        <Button title="Update" onPress={updateUser} />
      </View>

      <Text ref={showUserData}></Text>
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
    marginTop: 15,
    marginEnd: 15,
    width: 200,
    borderWidth: 1,
    borderColor: "#a3a3a336",
    borderStyle: "solid",
  },
});
export default Header;
