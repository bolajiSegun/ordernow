import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function WishlistItems() {
  return (
    <Pressable className="w-[45%] bg-white m-5 ml-0 mt-0 rounded-lg">
      <Image
        className="mb-5 w-[100%] rounded-lg"
        source={require("../../assets/images/helloOne.png")}
      />
      <View className="flex-row justify-between items-center mb-2.5 px-2.5">
        <Text className="text-gray-800">Vegitable Pasta</Text>
        <Text className="text-white bg-[#FFA216] px-1.5 rounded">4.5</Text>
      </View>
      <Text className="font-bold text-lg text-gray-900 mb-3.5 px-2.5">
        #1000.00
      </Text>
      {/* checkbox */}
      <TouchableOpacity className="flex items-center justify-center w-[15px] h-[15px] rounded-full bg-[#FFFFFF] absolute right-4 mt-2"></TouchableOpacity>
    </Pressable>
  );
}
