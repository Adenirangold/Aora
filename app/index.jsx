import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          ></Image>
          <Image
            className="max-w-[380px] w-full h-[300px]"
            source={images.cards}
            resizeMode="contain"
          ></Image>
          <View className="relative mt-8">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"} Possibilities With{"  "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
              resizeMode="contain"
              source={images.path}
            ></Image>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            handlePress={() => {
              router.push("/signIn");
            }}
            title="Continue With Email"
            containerStyles="w-full mt-7"
          ></CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </SafeAreaView>
  );
}
