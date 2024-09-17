import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="signIn"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="signUp"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
}
