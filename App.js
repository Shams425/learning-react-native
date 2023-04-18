import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./app/components/header/Header";
import UserInfo from "./app/components/body/userInfo/UserInfo";

export default function App() {
  return (
    <View>
      <Header styles={styles.header} />
      <View style={styles.container}>
        <UserInfo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
