import { useColorScheme } from "nativewind";
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import HomepageNav from "@/src/components/homepage-nav";
import MenuFoods from "@/src/components/menu-foods";
import MenuCategories from "@/src/components/menu-categories";
import AvailableMenu from "@/src/components/available-menu";
import { images } from "@/src/constants";
import { Image } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg font-pregular">
      <View className="flex-1 px-4 mt-2 bg-light-background">
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
        <HomepageNav />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="font-psemibold text-2xl dark:text-light-bg text-light-header w-[100%]">
            What would you like to eat?
          </Text>
          <View className="w-full h-12 flex-row bg-gray-200 rounded-lg px-2 py-1 my-2 mt-4 justify-between items-center">
            <TextInput
              className="text-light-searchBoxText font-normal text-xs"
              placeholder="Enter dish Name"
            />
            <FontAwesome
              name="search"
              size={16}
              color="#F38219"
              className="text-light-tint text-xl"
            />
          </View>
          <View className="flex flex-row items-center justify-around m-2 mt-4">
            <Link href={"/home/food-list"} asChild>
              <TouchableOpacity className="flex items-center justify-around m-2 mr-16 px-10 mt-4 relative z-10 mr">
                <Image source={images.breakTime} className="w-16 h-16" />
                <Text className="text-sm text-gray-800 mt-2 font-psemibold">
                  ALL
                </Text>
              </TouchableOpacity>
            </Link>
            <MenuFoods />
          </View>
          <MenuCategories />
          <View className="flex-row justify-between items-center mt-4">
            <Text className="font-bold text-lg text-light-header">
              Available Menu
            </Text>
            <TouchableOpacity className="flex-row justify-between items-center">
              <Text className="text-[#F38219] font-normal text-base text-light-tint">
                Delivery
              </Text>
              <MaterialIcons
                className="text-light-text text-xl"
                name="arrow-drop-down"
                size={24}
                color="#797C80"
              />
            </TouchableOpacity>
          </View>
          <AvailableMenu />
          <AvailableMenu />
          <AvailableMenu />
          <AvailableMenu />
          <AvailableMenu />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
