import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import accountImg from "../../assets/images/account-img.png"; // Make sure to import your image
import { Link } from "expo-router";

const HomepageNav = () => {
  return (
    <View className="flex-row justify-between items-center h-24 pt-6 bg-light-background w-full">
      <Pressable>
        <MaterialIcons name="restaurant-menu" size={24} color="black" />
      </Pressable>
      <View className="flex-row items-center">
        <MaterialIcons
          name="location-pin"
          size={14}
          color="#797C80"
          className="text-light-text mr-2.5"
        />
        <Text className="text-[#797C80]">1058 Lake Forest Drive, NY</Text>
      </View>
      <Link href={"/profile"} asChild>
        <TouchableOpacity>
          <Image
            className="w-11 h-11 rounded-full mx-2 border-green-600 border-solid border-4"
            source={accountImg}
          />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default HomepageNav;
