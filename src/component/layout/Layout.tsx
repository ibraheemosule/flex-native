import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import s from "./layout.scss";

export default function Layout() {
  return (
    <View style={s.container}>
      <Text style={s.text}>
        Open up App.tsx to start w! {JSON.stringify(s)}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
