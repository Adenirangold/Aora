import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ color, icon, name, focused }) => {
  return (
    <View className="flex gap-2 items-center justify-center">
      <Image
        tintColor={color}
        resizeMode="contain"
        source={icon}
        className="w-6 h-6"
      ></Image>
      <Text
        style={{ color: color }}
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs `}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 90,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  focused={focused}
                  name="Home"
                  color={color}
                  icon={icons.home}
                ></TabIcon>
              );
            },
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  focused={focused}
                  name="Bookmark"
                  color={color}
                  icon={icons.bookmark}
                ></TabIcon>
              );
            },
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  focused={focused}
                  name="Create"
                  color={color}
                  icon={icons.plus}
                ></TabIcon>
              );
            },
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  focused={focused}
                  name="Profile"
                  color={color}
                  icon={icons.profile}
                ></TabIcon>
              );
            },
          }}
        ></Tabs.Screen>
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabsLayout;
