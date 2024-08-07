import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryItems, setCategoryItems] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  return (
    <View
      className="flex p-4"
      style={{
        margin: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 5,
        height: "50%",
      }}
    >
      <Text className="text-xl mb-4">Add New Category</Text>
      <TextInput
        value={categoryName}
        onChangeText={setCategoryName}
        placeholder="Enter category name"
        className="border border-gray-400 p-2 mb-4"
      />
      <TextInput
        value={categoryItems}
        onChangeText={setCategoryItems}
        placeholder="Enter items"
        className="border border-gray-400 p-2 mb-4"
      />
      <TextInput
        value={categoryDescription}
        onChangeText={setCategoryDescription}
        placeholder="Enter description"
        className="border border-gray-400 p-2 mb-4"
        multiline
      />

      <Button title="Add Category" />
    </View>
  );
}
