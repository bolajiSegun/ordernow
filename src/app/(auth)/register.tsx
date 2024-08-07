import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants";
import { Link, useRouter } from "expo-router";

import FormField from "../../components/form-field";
import { useState } from "react";
import CustomButton from "../../components/custom-button";
import { useColorScheme } from "nativewind";

type formInput = {
  fullname: string;
  email: string;
  password: string;
};

export default function Register() {
  const { colorScheme } = useColorScheme();
  const router = useRouter();
  const active: number = 2;
  const [form, setForm] = useState<formInput>({
    fullname: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg">
      <ScrollView>
        <View className="flex-1 w-full min-h-screen">
          <ImageBackground
            source={colorScheme === "light" ? images.authBg : images.authBgDark}
            className="w-full h-full"
            resizeMode="cover"
          >
            <View className="flex-1">
              <View className="h-[85vh] mt-11">
                <View className="flex-row gap-7 pl-11 items-center">
                  <Link
                    href={"/login"}
                    className={`text-base ${
                      active === 1
                        ? "font-pmedium text-action"
                        : "font-pregular text-tertiary dark:text-tertiary-dark"
                    } `}
                  >
                    Login
                  </Link>
                  <Link
                    href={"/register"}
                    className={`text-base ${
                      active === 2
                        ? "font-pmedium text-action"
                        : "font-pregular text-tertiary dark:text-tertiary-dark"
                    } `}
                  >
                    Registration
                  </Link>
                </View>
                <View className="pl-11 mt-10 mb-auto">
                  <Text className="text-3xl leading-10 font-pregular text-primary dark:text-primary-dark w-48">
                    Let's create your Account
                  </Text>
                </View>
                <View className="pl-11 pr-8 py-11 bg-white dark:bg-dark-bg rounded-xl w-[75vw]">
                  <View className="gap-2">
                    <FormField
                      title="Fullname"
                      placeholder="Full Name"
                      value={form.fullname}
                      handleChangeText={(e) =>
                        setForm({ ...form, fullname: e })
                      }
                    />
                    <FormField
                      title="Email"
                      placeholder="Email"
                      value={form.email}
                      handleChangeText={(e) => setForm({ ...form, email: e })}
                    />
                    <FormField
                      title="Password"
                      placeholder="Password"
                      value={form.password}
                      handleChangeText={(e) =>
                        setForm({ ...form, password: e })
                      }
                    />
                  </View>

                  <CustomButton
                    title="Continue"
                    isLoading={false}
                    handlePress={() => router.push("/home")}
                    containerStyles="mt-10"
                    icon={"arrow-forward"}
                  />
                </View>
                <View className="pl-11 mt-auto">
                  <Text className="text-primary dark:text-primary-dark text-base font-pregular mb-5">
                    Login With
                  </Text>
                  <View className="flex-row gap-6 items-center">
                    <Pressable onPress={() => {}}>
                      <Image
                        source={icons.gmail}
                        width={22}
                        height={22}
                        resizeMode="contain"
                      />
                    </Pressable>
                    <Pressable onPress={() => {}}>
                      <Image
                        source={icons.facebook}
                        width={22}
                        height={22}
                        resizeMode="contain"
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
