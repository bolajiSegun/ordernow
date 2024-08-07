import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GeneralHeader from "@/src/components/general-header";
import CategoryMenu from "@/src/components/category-menu";
import FoodListItem from "@/src/components/food-list-item";

export default function FoodList() {
  return (
    <SafeAreaView>
      <GeneralHeader />
      <ScrollView>
        <View className="flex flex-row justify-start items-center p-[10px] mt-[20px]">
          <Text className="text-[#9B9C9F] text-[14px]">Filter:</Text>
          <TextInput className=" w-[80%] text-[#576267] text-[12px] ml-1 px-4  ">
            Biryani <Text>x</Text>
          </TextInput>
        </View>

        <Text className="font-pmedium text-[16px] p-[10px] pb-0 text-[#092c4c]">
          Biryani
        </Text>
        <View className=" w-[100%] p-[10px]">
          <View className="flex flex-row">
            <FoodListItem />
            <FoodListItem />
          </View>
          <View className="flex flex-row">
            <FoodListItem />
            <FoodListItem />
          </View>
          <View className="flex flex-row">
            <FoodListItem />
            <FoodListItem />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
