import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const orders = [
  {
    id: "001",
    customer: "John Doe",
    date: "2024-07-28",
    status: "Pending",
    total: "$150.00",
  },
  {
    id: "002",
    customer: "Jane Smith",
    date: "2024-07-29",
    status: "Completed",
    total: "$220.00",
  },
  {
    id: "003",
    customer: "Alice Johnson",
    date: "2024-07-30",
    status: "Shipped",
    total: "$75.00",
  },
  {
    id: "004",
    customer: "Mike Brown",
    date: "2024-07-31",
    status: "Cancelled",
    total: "$0.00",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-500";
    case "Completed":
      return "bg-green-500";
    case "Shipped":
      return "bg-blue-500";
    case "Cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const OrderList = () => {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
        Order List
      </Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white rounded-lg p-4 mb-4 shadow-md">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-lg font-semibold text-gray-900">
                  Order ID: {item.id}
                </Text>
                <Text className="text-sm text-gray-600">
                  Customer: {item.customer}
                </Text>
                <Text className="text-sm text-gray-600">Date: {item.date}</Text>
              </View>
              <Text
                className={`text-sm font-semibold text-white px-2 py-1 rounded-full ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </Text>
            </View>
            <View className="mt-2 flex-row justify-between items-center">
              <Text className="text-sm text-gray-600">Total:</Text>
              <Text className="text-lg font-bold text-gray-900">
                {item.total}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default OrderList;
