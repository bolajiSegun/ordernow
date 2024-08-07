import GeneralHeader from "@/src/components/general-header";
import OrderList from "@/src/components/order-list";
import { images } from "@/src/constants";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Orders() {
  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg z-10">
      <GeneralHeader />
      <ScrollView>
        <View>
          <ImageBackground
            source={images.six}
            className="h-[210px] w-full absolute "
          >
            <View className="h-full w-full justify-center relative">
              <View className="absolute h-full w-full bg-black/25 top-0 left-0"></View>
              <Text className="text-2xl text-white font-medium font-pmedium ml-10">
                Orders
              </Text>
            </View>
          </ImageBackground>
          <View className="mt-[5px]">
            <OrderList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
