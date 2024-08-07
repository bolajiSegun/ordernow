import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import { styled } from "nativewind";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function OrderList() {
  return (
    <ScrollView className="p-[10px] mt-[250px]">
      <View>
        <View className=" flex flex-row items-center pt-0 justify-between font-pregular">
          <View className="">
            <Image
              source={images.helloHead}
              className="w-[130px] h-[170px] rounded-xl"
            />
          </View>
          <View className=" pl-3">
            <View className="flex-row justify-between items-center mb-4 ">
              <Text className="text-[#415161] font-psemibold mr-2">
                Vegitable Pasta
              </Text>

              <Text className=" font-bold text-sm mr-4 text-[#27BC1A]">
                Delivered
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <MaterialIcons
                name="location-pin"
                size={14}
                color="#797C80"
                className="text-light-text mr-2.5"
              />
              <Text className="text-[#797C80]">1058 Lake Forest Drive, NY</Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Text className="text-[#797C80] mr-1">Order On:</Text>
              <Text className="">13 March 2020 at 01:10 pm</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[#797C80] mr-1">Items:</Text>
              <Text className="">1x Dum Biriyani</Text>
            </View>

            <View className=" flex flex-row items-center mt-4">
              <View className=" flex flex-row items-start ">
                <Text className="text-[#797C80] mr-1">Amount:</Text>
                <Text className="text-[#FFA216] text-[16px] font-psemibold mr-4">
                  #500
                </Text>
              </View>
              <View className=" flex flex-row items-center rounded-sm bg-[#E8ECEE] px-2 h-5">
                <FontAwesome
                  name="repeat"
                  size={12}
                  color="#576267"
                  className="pr-2"
                />
                <Text className="text-[#576267] text-[12px]  px-2 ">
                  Repeat Order
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="border-b-[1px] my-4 w-auto border-[#E7E7E7]"></View>
      </View>
      <View>
        <View className=" flex flex-row items-center pt-0 justify-between font-pregular">
          <View className="">
            <Image
              source={images.helloHead}
              className="w-[130px] h-[170px] rounded-xl"
            />
          </View>
          <View className=" pl-3">
            <View className="flex-row justify-between items-center mb-4 ">
              <Text className="text-[#415161] font-psemibold mr-2">
                Vegitable Pasta
              </Text>

              <Text className=" font-bold text-sm mr-4 text-[#27BC1A]">
                Delivered
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <MaterialIcons
                name="location-pin"
                size={14}
                color="#797C80"
                className="text-light-text mr-2.5"
              />
              <Text className="text-[#797C80]">1058 Lake Forest Drive, NY</Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Text className="text-[#797C80] mr-1">Order On:</Text>
              <Text className="">13 March 2020 at 01:10 pm</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[#797C80] mr-1">Items:</Text>
              <Text className="">1x Dum Biriyani</Text>
            </View>

            <View className=" flex flex-row items-center mt-4">
              <View className=" flex flex-row items-start ">
                <Text className="text-[#797C80] mr-1">Amount:</Text>
                <Text className="text-[#FFA216] text-[16px] font-psemibold mr-4">
                  #500
                </Text>
              </View>
              <View className=" flex flex-row items-center rounded-sm bg-[#E8ECEE] px-2 h-5">
                <FontAwesome
                  name="repeat"
                  size={12}
                  color="#576267"
                  className="pr-2"
                />
                <Text className="text-[#576267] text-[12px]  px-2 ">
                  Repeat Order
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="border-b-[1px] my-4 w-auto border-[#E7E7E7]"></View>
      </View>
      <View>
        <View className=" flex flex-row items-center pt-0 justify-between font-pregular">
          <View className="">
            <Image
              source={images.helloHead}
              className="w-[130px] h-[170px] rounded-xl"
            />
          </View>
          <View className=" pl-3">
            <View className="flex-row justify-between items-center mb-4 ">
              <Text className="text-[#415161] font-psemibold mr-2">
                Vegitable Pasta
              </Text>

              <Text className=" font-bold text-sm mr-4  text-[#27BC1A]">
                Delivered
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <MaterialIcons
                name="location-pin"
                size={14}
                color="#797C80"
                className="text-light-text mr-2.5"
              />
              <Text className="text-[#797C80] ">
                1058 Lake Forest Drive, NY
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Text className="text-[#797C80] mr-1">Order On:</Text>
              <Text className="truncate ...">
                13 March 2020 at 01:10 pm Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[#797C80] mr-1">Items:</Text>
              <Text className="">1x Dum Biriyani</Text>
            </View>

            <View className=" flex flex-row items-center mt-4">
              <View className=" flex flex-row items-start ">
                <Text className="text-[#797C80] mr-1">Amount:</Text>
                <Text className="text-[#FFA216] text-[16px] font-psemibold mr-4">
                  #500
                </Text>
              </View>
              <View className=" flex flex-row items-center rounded-sm bg-[#E8ECEE] px-2 h-5">
                <FontAwesome
                  name="repeat"
                  size={12}
                  color="#576267"
                  className="pr-2"
                />
                <Text className="text-[#576267] text-[12px]  px-2 ">
                  Repeat Order
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="border-b-[1px] my-4 w-auto border-[#E7E7E7]"></View>
      </View>
      <View>
        <View className=" flex flex-row items-center pt-0 justify-between font-pregular">
          <View className="">
            <Image
              source={images.helloHead}
              className="w-[130px] h-[170px] rounded-xl"
            />
          </View>
          <View className=" pl-3">
            <View className="flex-row justify-between items-center mb-4 ">
              <Text className="text-[#415161] font-psemibold mr-2">
                Vegitable Pasta
              </Text>

              <Text className=" font-bold text-sm mr-4 text-[#27BC1A]">
                Delivered
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <MaterialIcons
                name="location-pin"
                size={14}
                color="#797C80"
                className="text-light-text mr-2.5"
              />
              <Text className="text-[#797C80]">1058 Lake Forest Drive, NY</Text>
            </View>
            <View className="flex-row items-center mb-2">
              <Text className="text-[#797C80] mr-1">Order On:</Text>
              <Text className="">13 March 2020 at 01:10 pm</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-[#797C80] mr-1">Items:</Text>
              <Text className="">1x Dum Biriyani</Text>
            </View>

            <View className=" flex flex-row items-center mt-4">
              <View className=" flex flex-row items-start ">
                <Text className="text-[#797C80] mr-1">Amount:</Text>
                <Text className="text-[#FFA216] text-[16px] font-psemibold mr-4">
                  #500
                </Text>
              </View>
              <View className=" flex flex-row items-center rounded-sm bg-[#E8ECEE] px-2 h-5">
                <FontAwesome
                  name="repeat"
                  size={12}
                  color="#576267"
                  className="pr-2"
                />
                <Text className="text-[#576267] text-[12px]  px-2 ">
                  Repeat Order
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="border-b-[1px] my-4 w-auto border-[#E7E7E7]"></View>
      </View>
    </ScrollView>
  );
}
