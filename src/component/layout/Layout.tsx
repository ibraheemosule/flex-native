import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import s from "./layout.scss";
import Activity from "../activity/Activity";
import ShowMore from "../show-more/ShowMore";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[s.container]}>
        <Activity />
        <ShowMore />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
