import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA216",
        headerShown: false,
        tabBarInactiveTintColor:
          colorScheme === "light" ? "#BBC1C7" : "#81868C",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "light" ? "#fff" : "#4B4F53",
          height: 64,
          borderTopWidth: 1,
          borderTopColor: colorScheme === "light" ? "#fff" : "#232533",
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmarks-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
