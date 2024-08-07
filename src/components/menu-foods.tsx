import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ListRenderItem,
} from "react-native";
import { styled } from "nativewind";

const foods = [
  {
    id: 1,
    name: "Japanese",
    image: require("../../assets/images/foodItems/food2.png"),
  },
  {
    id: 2,
    name: "Chinese",
    image: require("../../assets/images/foodItems/food4.png"),
  },
  {
    id: 3,
    name: "Seafood",
    image: require("../../assets/images/foodItems/food1.png"),
  },
  {
    id: 4,
    name: "Salad",
    image: require("../../assets/images/foodItems/food2.png"),
  },
  {
    id: 5,
    name: "Vegies",
    image: require("../../assets/images/foodItems/food3.png"),
  },
];

type FoodItem = {
  id: number;
  name: string;
  image: any;
};

const MenuFoods: React.FC = () => {
  const flatListRef = useRef<FlatList<FoodItem>>(null);

  const renderItem: ListRenderItem<FoodItem> = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        className="flex items-center justify-around m-2 mt-4"
      >
        <Image source={item.image} className="w-16 h-16" />
        <Text className="text-sm text-gray-800 mt-2">{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ref={flatListRef}
        horizontal
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default styled(MenuFoods);
