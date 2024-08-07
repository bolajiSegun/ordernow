import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <View
        style={{
          margin: 20,
          padding: 20,
          backgroundColor: "#ffffff",
          borderRadius: 10,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#333",
            marginBottom: 20,
          }}
        >
          Add New Product
        </Text>
        <TextInput
          value={productName}
          onChangeText={setProductName}
          placeholder="Product Name"
          placeholderTextColor="#888"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 5,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fafafa",
          }}
        />
        <TextInput
          value={productPrice}
          onChangeText={setProductPrice}
          placeholder="Product Price"
          placeholderTextColor="#888"
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 5,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fafafa",
          }}
        />
        <TextInput
          value={productDescription}
          onChangeText={setProductDescription}
          placeholder="Product Description"
          placeholderTextColor="#888"
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 5,
            padding: 10,
            marginBottom: 15,
            backgroundColor: "#fafafa",
          }}
        />

        <Button title="Add Product" color="#007bff" />
      </View>
    </ScrollView>
  );
}
