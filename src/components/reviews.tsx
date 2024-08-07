import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import { Entypo } from "@expo/vector-icons";

export default function Reviews() {
  return (
    <View className="flex flex-row justify-between items-center px-3 mb-5">
      <View className="flex flex-row">
        <Image source={images.review} />
      </View>
      <View className="w-[80%]">
        <Text className="font-pmedium text-[14px] text-[#3E4145]">
          Hello Bangali Cafe
        </Text>
        <Text className="text-[#88909b]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi
          est non, repellat provident quos!
        </Text>
        <View className=" flex-row justify-between items-center w-[50%]">
          <View className="flex-row items-center">
            <Entypo name="star" size={17} color="#FFA216" />
            <Entypo name="star" size={17} color="#FFA216" />
            <Entypo name="star" size={17} color="#FFA216" />
            <Entypo name="star" size={17} color="#FFA216" />
            <Entypo name="star" size={17} color="#DADADA" />
          </View>
          <Text className="font-pmedium mt-1 color-[#092C4C] text-[14px]">
            4.5
          </Text>
        </View>
      </View>
    </View>
  );
}
