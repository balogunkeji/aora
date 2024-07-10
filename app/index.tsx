import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

function Home() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='h-full w-full justify-center items-center px-4'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[130px] h-[84px]'
          />
          <Image
            source={images.cards}
            resizeMode='contain'
            className='max-w-[380px] w-full h-[300px]'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-center text-white font-bold'>
              Discover Endless Possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode='contain'
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
            />
          </View>
          <Text className='text-sm text-center text-gray-100 font-pregular mt-7'>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton title={"Continue with Email"} handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}

export default Home;
