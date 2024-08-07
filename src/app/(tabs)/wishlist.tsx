import GeneralHeader from "@/src/components/general-header";
import OrderNowButton from "@/src/components/ordernow-button";
import WishlistItems from "@/src/components/wishlist-items";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wishlist() {
  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg px-[10px]">
      <GeneralHeader />
      <ScrollView>
        <Text className="font-pmedium text-[16px] pb-2 mt-4 text-[#092c4c]">
          Wishlist Recommendation
        </Text>
        <View className="flex flex-row items-center mt-4">
          <WishlistItems />
          <WishlistItems />
        </View>
        <View className="flex flex-row items-center mt-4">
          <WishlistItems />
          <WishlistItems />
        </View>
        <View className="flex flex-row items-center mt-4">
          <WishlistItems />
          <WishlistItems />
        </View>
      </ScrollView>
      <OrderNowButton />
    </SafeAreaView>
  );
}
