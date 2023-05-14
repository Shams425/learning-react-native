import { View } from "react-native";
import Header from "./app/components/header/Header";
import UserInfo from "./app/components/body/userInfo/UserInfo";
import { globalStyles } from "./styles/global";

export default function App() {
  return (
    <View>
      <Header />
      <UserInfo style={globalStyles.container} />
    </View>
  );
}
