import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Overview() {
  const data = [
    {
      name: "Sales",
      population: 40,
      color: "#ff6384",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Orders",
      population: 30,
      color: "#36a2eb",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Categories",
      population: 20,
      color: "#4bc0c0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Products",
      population: 10,
      color: "#ffce56",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView className="flex-1 p-4 bg-gray-100">
      <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">
          Dashboard Overview
        </Text>
        <PieChart
          data={data}
          width={screenWidth - 32}
          height={220}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        <View className="mt-4">
          {data.map((item, index) => (
            <View key={index} className="flex-row items-center mb-2">
              <View
                style={{
                  backgroundColor: item.color,
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
              <Text className="text-base text-gray-800">
                {item.name}: {item.population}%
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">
          Total Sales
        </Text>
        <Text className="text-2xl text-blue-500">$12,345</Text>
      </View>
      <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">
          Total Orders
        </Text>
        <Text className="text-2xl text-blue-500">678</Text>
      </View>
      <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">
          New Categories
        </Text>
        <Text className="text-2xl text-blue-500">24</Text>
      </View>
      <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
        <Text className="text-lg font-bold text-gray-800 mb-2">
          New Products
        </Text>
        <Text className="text-2xl text-blue-500">35</Text>
      </View>
    </ScrollView>
  );
}
