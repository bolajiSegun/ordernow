import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// import { icons } from "../constants";
type Props = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: any;
  [key: string]: any;
};
export default function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="w-full h-16 border-b-2 border-b-[#DADADA] dark:border-b-[#565B61] focus:border-b-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-primary dark:text-primary-dark font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#C9CED2"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color={"#F38219"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
