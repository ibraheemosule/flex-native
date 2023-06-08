import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import s from "./layout.scss";
import Activity from "../activity/Activity";

export default function Layout() {
  return (
    <View style={s.container}>
      <Activity />
      <StatusBar style="auto" />
    </View>
  );
}
