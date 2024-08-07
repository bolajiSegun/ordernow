import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { images } from "../constants";
import { styled } from "nativewind";
import { Entypo } from "@expo/vector-icons";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

type ActiveButtonType = "increment" | "decrement" | null;

export default function CheckoutItems() {
  const [counter, setCounter] = useState(0);
  const [activeButton, setActiveButton] = useState<ActiveButtonType>(null);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter > 0 ? counter - 1 : 0);
  return (
    <ScrollView className="p-[10px] mt-[250px]">
      <View>
        <View className=" flex flex-row items-start pt-0 justify-between font-pregular">
          <View className="">
            <Image
              source={images.helloHead}
              className="w-[97px] h-[90px] rounded-xl"
            />
          </View>
          <View className="">
            <View className="flex-row justify-between items-center mb-1 ">
              <StyledText className="text-[#415161] font-psemibold mr-2">
                Vegitable Pasta
              </StyledText>
              <Text className=" font-bold text-sm mr-4">
                <Entypo name="star" size={14} color="#FFA216" /> 4.5
              </Text>
            </View>
            <Text className="text-[#797C80] text-[14px]">
              Popular Indian Foods
            </Text>

            <View className=" flex flex-row items-center mt-2">
              <Text className="text-[#092C4C] text-[16px] font-psemibold mr-4">
                #500
              </Text>
              <Text className="text-[#576267] text-[12px] rounded-sm bg-[#E8ECEE] px-2 h-5">
                Remove
              </Text>
            </View>
          </View>
          <View className="">
            <View className="flex flex-row items-center justify-evenly border-[#DBDBDB] border-2 pr-2 pl-2 h-[20px]">
              <Pressable
                onPress={decrement}
                onPressIn={() => setActiveButton("decrement")}
                onPressOut={() => setActiveButton(null)}
              >
                <Text
                  className={`mr-3 ${
                    activeButton === "decrement"
                      ? "text-[#FFA216]"
                      : "text-[#53565A]"
                  } `}
                >
                  -
                </Text>
              </Pressable>
              <TextInput
                value={`${counter}`}
                className="text-[#53565A] bg-[#F2F4F6] mr-3 text-center"
                editable={false}
              ></TextInput>
              <Pressable
                onPress={increment}
                onPressIn={() => setActiveButton("increment")}
                onPressOut={() => setActiveButton(null)}
              >
                <Text
                  className={` ${
                    activeButton === "increment"
                      ? "text-[#FFA216]"
                      : "text-[#53565A]"
                  }`}
                >
                  +
                </Text>
              </Pressable>
            </View>
            <Text className="mt-4 text-right text-[#75797C] text-sm">
              #1000
            </Text>
          </View>
        </View>
        <View className="border-b-[1px] my-4 w-auto border-[#E7E7E7]"></View>
      </View>
    </ScrollView>
  );
}
