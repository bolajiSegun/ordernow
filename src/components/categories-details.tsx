import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import GeneralHeader from "./general-header";
import { useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import CategoryMenu from "./category-menu";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";

const data = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
];

const renderItem = () => <CategoryMenu />;

const CategoriesDetails = () => {
  return (
    <SafeAreaView>
      <Image
        className="w-full h-100 aspect-square absolute"
        source={require("../../assets/images/helloHead.png")}
      />

      <View className="mx-2 rounded-2xl bg-white shadow-lg relative top-56">
        <View className="flex-row justify-between items-center mb-1 p-5 pb-0">
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-2xl mr-2.5">Hello Gangla</Text>
            <Text className="flex-row items-center p-1 py-0.5 text-xs bg-red-600 rounded text-white">
              <Entypo name="star" size={12} color="white" /> Awesome
            </Text>
          </View>
          <View className="rounded-full w-5 h-5 justify-center items-center border-2 border-green-700">
            <Text className="w-2.5 h-2.5 rounded-full bg-green-700"></Text>
          </View>
        </View>
        <Text className="text-gray-600 px-5">Indian, Chinese food</Text>
        <View className="mt-2.5 flex-row justify-between items-center w-4/5 px-5">
          <View className="flex-row items-center mb-2.5">
            <Entypo name="star" size={24} color="#FFA216" />
            <Entypo name="star" size={24} color="#FFA216" />
            <Entypo name="star" size={24} color="#FFA216" />
            <Entypo name="star" size={24} color="#FFA216" />
            <Entypo name="star" size={24} color="#DADADA" />
          </View>
          <Text className="font-medium text-base">
            4.5 <Text className="text-gray-600">(100 reviews)</Text>{" "}
          </Text>
        </View>
        <View className="border-b-2 border-gray-300 my-3.5"></View>
        <View className="flex-row justify-between items-center mb-2.5 px-5">
          <View>
            <Text className="text-gray-600 text-xs font-bold mb-2.5">
              Delivery Time
            </Text>
            <Text className="text-base font-semibold">42 min</Text>
          </View>
          <View>
            <Text className="text-gray-600 text-xs font-bold mb-2.5">
              Open time
            </Text>
            <Text className="text-base font-semibold">11:00am</Text>
          </View>
          <View className="flex-col items-center justify-center w-20 px-1.5 py-0.5 bg-gray-200 rounded text-center border-2 border-green-700 mt-2.5">
            <Image source={require("../../assets/images/leaf.png")} />
            <Text className="text-xs font-semibold">PURE VEG</Text>
          </View>
        </View>
      </View>
      <View className="mt-64 px-2.5">
        <Text className="font-bold text-lg text-gray-800 mb-3.5">
          Best Seller
        </Text>
        <View className=" w-[100%]">
          <View className="flex flex-row">
            <CategoryMenu />
            <CategoryMenu />
          </View>
          <View className="flex flex-row">
            <CategoryMenu />
            <CategoryMenu />
          </View>
          <View className="flex flex-row">
            <CategoryMenu />
            <CategoryMenu />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesDetails;
