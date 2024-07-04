import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { icons } from "@/constants";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffa001',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#cdcde0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,

        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={'Home'}
              color={color}
              icon={icons.home}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='bookmark'
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={'Bookmark'}
              color={color}
              icon={icons.bookmark}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={'Create'}
              color={color}
              icon={icons.plus}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={'Profile'}
              color={color}
              icon={icons.profile}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
