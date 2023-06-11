import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import s from "./layout.scss";
import Activity from "../activity/Activity";
import ShowMore from "../show-more/ShowMore";
import ContextWrapper from "../context-wrapper/ContextWrapper";

export default function Layout() {
  return (
    <ContextWrapper>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[s.container]}>
        <Activity />
        <ShowMore />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    </ContextWrapper>
  );
}
