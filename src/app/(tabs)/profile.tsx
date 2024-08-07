import { images } from "@/src/constants";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import accountImg from "@/assets/images/account-img.png";
import AdminFavorite from "@/src/components/admin-favorite";
import Reviews from "@/src/components/reviews";

export default function Profile() {
  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg font-pregular">
      <ScrollView>
        <View>
          <ImageBackground
            source={images.helloHead}
            className="h-[210px] w-full absolute left-0 top-0"
          >
            <View className="h-full w-full justify-center relative">
              <View className="absolute h-full w-full bg-black/25 top-0 left-0"></View>
            </View>
            <Link href="/home" asChild>
              <TouchableOpacity className="flex-row justify-between items-center text-white absolute mt-6 px-[10px]">
                <MaterialIcons
                  name="keyboard-backspace"
                  size={18}
                  color="#F38219"
                />
                <Text className="text-[#F38219] text-base font-medium ml-1">
                  Back
                </Text>
              </TouchableOpacity>
            </Link>
          </ImageBackground>
          <View className="mt-[130px] items-center justify-center p-[20px] ">
            <Link href={"/profile"} asChild>
              <TouchableOpacity className="border-white border-solid border-[4px] w-[120px] h-[120px] aspect-square rounded-full flex justify-center items-center">
                <Image
                  className=" w-[113px] h-[113px] aspect-square rounded-full "
                  source={accountImg}
                />
              </TouchableOpacity>
            </Link>
          </View>
          <View className=" p-[10px] pt-[0px]">
            <Text className="text-[#092C4C] text-center text-[28px] font-psemibold">
              John Doe
            </Text>
            <Text className="text-gray-400 text-center font-medium text-[16px]">
              United State
            </Text>
            {/* button */}
            <Link href={"/orders"} asChild>
              <View className="flex flex-row items-center justify-center mt-4">
                <TouchableOpacity className="  h-[22px] bg-[#DCDDF3] px-2 rounded-sm flex justify-center items-center">
                  <Text className="text-[#576267] text-center font-pmedium text-[10px]">
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </Link>
          </View>
          <View>
            <Text className="font-pmedium text-[18px] p-[10px] pb-2 mt-4 text-[#092c4c]">
              Admin Favorite
            </Text>
            <AdminFavorite />
          </View>
          <View>
            <Text className="font-pmedium text-[18px] p-[10px] pb-2 mt-4 text-[#092c4c]">
              Reviews
            </Text>
            <Reviews />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
