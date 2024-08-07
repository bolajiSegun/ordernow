import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const CategoryMenu = () => {
  return (
    <Link href={"/home/checkout-page"} asChild>
      <TouchableOpacity className="w-[45%] bg-white m-5 ml-0 mt-0 rounded-lg">
        <StyledImage
          className="mb-5 w-[100%] rounded-lg"
          source={require("../../assets/images/helloOne.png")}
        />
        <StyledView className="flex-row justify-between items-center mb-2.5 px-2.5">
          <StyledText className="text-gray-800">Vegitable Pasta</StyledText>
          <StyledText className="text-white bg-blue-500 px-1.5 rounded">
            4.5
          </StyledText>
        </StyledView>
        <StyledText className="font-bold text-lg text-gray-900 mb-3.5 px-2.5">
          #1000.00
        </StyledText>
      </TouchableOpacity>
    </Link>
  );
};

export default CategoryMenu;
