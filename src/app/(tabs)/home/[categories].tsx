import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

import CategoriesDetails from "@/src/components/categories-details";
import { useLocalSearchParams } from "expo-router";
import GeneralHeader from "@/src/components/general-header";

const CategoriesDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-transparent mt-9">
      <ScrollView>
        <GeneralHeader />
        <CategoriesDetails />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesDetailsScreen;
