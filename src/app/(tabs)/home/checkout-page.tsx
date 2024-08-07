import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/src/constants";
import GeneralHeader from "@/src/components/general-header";
import CheckoutItems from "@/src/components/checkout-items";
import PlaceorderButton from "@/src/components/placeorder-button";

export default function CheckoutPage() {
  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg">
      <GeneralHeader />
      <ScrollView>
        <View>
          <ImageBackground
            source={images.helloHead}
            className="h-[210px] w-full absolute left-0 top-0"
          >
            <View className="h-full w-full justify-center relative">
              <View className="absolute h-full w-full bg-black/25 top-0 left-0"></View>
              <Text className="text-2xl text-white font-medium font-pmedium ml-10">
                Checkout
              </Text>
            </View>
          </ImageBackground>
          <CheckoutItems />
        </View>

        <View className="p-[10px] pt-0 flex flex-row items-center">
          <TextInput
            placeholder="Coupon Code"
            placeholderTextColor={"#9CA2A9"}
            className="bg-[#F2F3FA]  h-[48px] rounded-l-md w-[70%] p-2 mt-4"
          />

          <Pressable className="">
            <Text className="bg-[#FFA216] h-[48px] rounded-r-md p-2 pt-4 text-white mt-4">
              Apply Coupon
            </Text>
          </Pressable>
        </View>

        <View className="  p-[10px] pb-[20px]">
          <Text className="text-xl font-pmedium mb-3">Cart Totals</Text>
          <View className="flex flex-row items-center justify-between mb-2">
            <Text className="text-[#415161] font-pmedium">Sub Total</Text>
            <Text className="text-[#415161] font-pmedium">#1000.00</Text>
          </View>
          <View className="flex flex-row items-center justify-between mb-2">
            <Text className="text-[#415161] font-pmedium">Taxs & Chargesl</Text>
            <Text className="text-[#415161] font-pmedium">#25.00</Text>
          </View>
          <View className="flex flex-row items-center justify-between mb-2">
            <Text className="text-[#415161] font-pmedium">Grand Total</Text>
            <Text className="text-[#0E7BDF] font-pmedium text-[18px]">
              $125.00
            </Text>
          </View>
        </View>

        <PlaceorderButton />
      </ScrollView>
    </SafeAreaView>
  );
}
