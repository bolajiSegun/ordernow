import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading: boolean;
  icon?: keyof (typeof Ionicons)["glyphMap"];
};

export default function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icon,
}: Props) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#2B33EF] dark:bg-[#2025ad] rounded-lg min-h-[48px] flex flex-row justify-center items-center w-full ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`text-white font-pmedium font-medium  text-lg ${textStyles}`}
      >
        {title}
      </Text>

      {icon && !isLoading && (
        <View className="ml-2">
          <Ionicons name={icon} size={24} color={"#fff"} />
        </View>
      )}

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
}
