import React from "react";
import { View, Text, FlatList } from "react-native";

const foodCategories = [
  { id: "1", name: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { id: "2", name: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
  { id: "3", name: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
  { id: "4", name: "Meat", items: ["Chicken", "Beef", "Pork"] },
  { id: "5", name: "Seafood", items: ["Salmon", "Shrimp", "Crab"] },
];

const FoodCategoryTable = () => {
  return (
    <View>
      <Text className="text-2xl font-bold text-gray-800 text-center">
        Food Categories
      </Text>
      <FlatList
        data={foodCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className=" rounded-lg m-2 mx-auto text-center">
            <Text className="text-lg font-bold text-gray-800 border text-center py-2 w-[100px]">
              {item.name}
            </Text>
            {item.items.map((foodItem, index) => (
              <Text
                key={index}
                className="text-base text-gray-600 border text-center py-1 w-[100px]"
              >
                {foodItem}
              </Text>
            ))}
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="p-4 bg-gray-100"
      />
    </View>
  );
};

export default FoodCategoryTable;
