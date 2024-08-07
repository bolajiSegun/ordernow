import { View, Text, Image } from "react-native";
import React from "react";
import Restaurant from "@/assets/data/restaurant";
import { RestaurantImage } from "@/assets/data/restaurant";

export default function AdminFavorite() {
  return (
    <View className="flex flex-row flex-wrap w-[100%] m-auto px-2">
      {Restaurant.map((image: RestaurantImage) => (
        <Image
          key={image.id}
          source={image.image}
          className="mr-4 w-[45%] rounded-lg mb-4 flex flex-w h-[140px]"
        />
      ))}
    </View>
  );
}
