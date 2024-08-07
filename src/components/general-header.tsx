import React from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styled } from "nativewind";

const accountImg = require("@/assets/images/account-img.png");

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);

const GeneralHeader = () => {
  return (
    <StyledView className="flex-row justify-between items-center w-full bg-transparent z-100 ">
      <Link href="/home" asChild>
        <StyledPressable className="flex-row justify-between items-center text-white">
          <MaterialIcons name="keyboard-backspace" size={18} color="#F38219" />
          <StyledText className="text-[#F38219] text-base font-medium ml-1">
            Back
          </StyledText>
        </StyledPressable>
      </Link>
      <Link href={"/profile"} asChild>
        <TouchableOpacity>
          <StyledImage
            className="w-11 h-11 rounded-full mx-2 border-green-600 border-solid border-4"
            source={accountImg}
          />
        </TouchableOpacity>
      </Link>
    </StyledView>
  );
};

export default GeneralHeader;
