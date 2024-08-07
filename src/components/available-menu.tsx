import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";

type AvailableMenuProps = {
  name: string;
  rating: number;
  address: string;
  distance: string;
};
const resto = require("../../assets/images/4.png");

const AvailableMenu = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-evenly items-center bg-openedRestaurantBg my-4 rounded-lg py-2">
        <Image source={resto} />
        <View>
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-bold text-lg mr-2">Resto House</Text>
            <Text className="flex-row items-center px-2 py-1 text-xs bg-red-500 rounded-sm text-white">
              <Entypo name="star" size={12} color="white" /> Awesome
            </Text>
          </View>
          <View className="flex-row justify-between items-center mb-2">
            <MaterialIcons
              name="location-pin"
              size={14}
              className="text-light.text mr-1"
            />
            <Text className="text-light.text text-sm">
              1058 Lake Forest Drive, NY
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-light.header font-bold text-sm mr-4">
              35 - 42 Min
            </Text>
            <Text className="text-light.header font-bold text-sm mr-4">
              <Entypo name="star" size={14} color="#FFA216" /> 4.5
            </Text>
            <TouchableOpacity>
              <View className="flex-row items-center">
                <Ionicons
                  className="text-green-500 mr-2"
                  name="call-outline"
                  size={14}
                  color="black"
                />
                <Text className="text-light.header font-bold text-sm">
                  Contact
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AvailableMenu;
