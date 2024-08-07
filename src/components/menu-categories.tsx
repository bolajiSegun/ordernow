import React, { useRef } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Restaurant from "@/assets/data/restaurant";
import CategoriesDetailsScreen from "../app/(tabs)/home/[categories]";
import { styled } from "nativewind";

interface foodType {
  id: number;
  image: any;
  name: string;
}

interface RestaurantsComponentProps {
  restaurants: foodType[];
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const MenuCategories = ({ restaurants }: any) => {
  const flatListRef = useRef<FlatList<foodType>>(null);

  const renderItem = ({ item }: any) => {
    return (
      <Link href={`/home/${CategoriesDetailsScreen.id}`} asChild>
        <StyledTouchableOpacity
          key={item.id}
          className="flex-col items-center justify-around m-2"
        >
          {item.image && (
            <StyledImage
              source={item.image}
              className="w-24 h-34 rounded-lg mb-2"
            />
          )}
          <StyledText className="text-sm text-black mt-2">
            {item.name}
          </StyledText>
        </StyledTouchableOpacity>
      </Link>
    );
  };

  return (
    <StyledView className="mt-4">
      <StyledText className="mb-2 text-lg font-bold text-black">
        Your favorite restaurants
      </StyledText>
      <FlatList
        ref={flatListRef}
        horizontal
        data={Restaurant}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </StyledView>
  );
};

export default MenuCategories;
