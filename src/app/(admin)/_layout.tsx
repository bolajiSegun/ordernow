import React, { useState } from "react";
import { View } from "react-native";
import SlideInNav from "@/src/components/slide-in-nav";
import Dashboard from "./dashboard";

export default function Layout() {
  const [activeScreen, setActiveScreen] = useState("Overview");

  const handleNavigation = (screen: any) => {
    setActiveScreen(screen);
  };

  return (
    <View className="flex-1 flex-row">
      <SlideInNav navigate={handleNavigation} />
      <Dashboard activeScreen={activeScreen} />
    </View>
  );
}
