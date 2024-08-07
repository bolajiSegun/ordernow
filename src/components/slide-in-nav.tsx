import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SlideInNav({ navigate }: any) {
  return (
    <SafeAreaView className="w-[30%] mt-4 bg-[#F38219] p-1">
      <TouchableOpacity onPress={() => navigate("Overview")}>
        <Text className="text-white border-b-2 border-[#cba27c] text-center pb-4 ">
          Overview
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Categories")}>
        <Text className="text-white border-b-2 border-[#cba27c] text-center py-4">
          Categories
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("AddCategory")}>
        <Text className="text-white border-b-2 border-[#cba27c] text-center py-4">
          Add Category
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Products")}>
        <Text className="text-white border-b-2 border-[#cba27c] text-center py-4">
          Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("AddProduct")}>
        <Text className="text-white border-b-2 border-[#cba27c] text-center py-4">
          Add New Product
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Orders")}>
        <Text className="text-white border-b-2 border-[#cba27c] text-center py-4">
          Orders
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
