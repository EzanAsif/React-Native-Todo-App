import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Todos from "./src/components/Todos";

import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <Todos />
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    backgroundColor: "#0d0d0d",
    flex: 1,
  },
});
