import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const FoodListItem = () => {
  return (
    <Link href={"/home/checkout-page"} asChild>
      <TouchableOpacity className="w-[45%] bg-white m-5 ml-0 mt-0 rounded-lg">
        <StyledImage
          className="mb-5 w-[100%] rounded-lg"
          source={require("../../assets/images/helloOne.png")}
        />
        <StyledView className="flex-row justify-between items-center mb-2.5 px-2.5">
          <StyledText className="text-gray-800 font-pmedium truncate ...">
            Biryani
          </StyledText>
          <StyledText className="text-white bg-amber-500 px-1.5 rounded">
            4.5
          </StyledText>
        </StyledView>
        <StyledText className="font-pregular text-[12px] mb-3.5 px-2.5 text-[#9B9C9F]">
          Pond Drive Bear, DE 19701
        </StyledText>
        <StyledText className="font-bold text-md  text-[#F2243D] mb-3.5 px-2.5">
          32 Mins Delivery
        </StyledText>
      </TouchableOpacity>
    </Link>
  );
};

export default FoodListItem;
