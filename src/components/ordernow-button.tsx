import { View, Text } from "react-native";
import React from "react";

export default function OrderNowButton() {
  return (
    <View className="bg-[#2B33EF]  h-[48px]  rounded-md w-[90%] p-2 m-auto mt-4">
      <Text className="text-white text-center font-pmedium pt-2">
        Order Now
      </Text>
    </View>
  );
}
