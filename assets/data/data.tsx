import { View, Text } from "react-native";
import React from "react";

export interface DataType {
  categories: string[][];
  products: string[][];
  orders: string[][];
}

const Data: DataType = {
  categories: [
    ["Categories", "Column 2", "Column 3", "Column 4"],
    ["Row 1", "Data 1", "Data 2", "Data 3"],
    ["Row 2", "Data 3", "Data 4", "Data 5"],
    ["Row 1", "Data 1", "Data 2", "Data 3"],
    ["Row 2", "Data 3", "Data 4", "Data 5"],
    ["Row 1", "Data 1", "Data 2", "Data 3"],
    ["Row 2", "Data 3", "Data 4", "Data 5"],
    ["Row 1", "Data 1", "Data 2", "Data 3"],
    ["Row 2", "Data 3", "Data 4", "Data 5"],
  ],
  products: [
    ["Products", "Column 2", "Column 3"],
    ["Name", "John Doe", "Age"],
    ["Location", "New York", "Occupation"],
    ["Products", "Column 2", "Column 3"],
    ["Name", "John Doe", "Age"],
    ["Location", "New York", "Occupation"],
    ["Products", "Column 2", "Column 3"],
    ["Name", "John Doe", "Age"],
    ["Location", "New York", "Occupation"],
    ["Products", "Column 2", "Column 3"],
    ["Name", "John Doe", "Age"],
    ["Location", "New York", "Occupation"],
  ],
  orders: [
    ["Orders", "Option 1", "Option 2", "Delivered", "Pending", "Processing"],
    ["Setting 1", "Enabled", "Disabled", "Delivered", "Pending", "Processing"],
    ["Setting 2", "Off", "On", "Delivered", "Pending", "Processing"],
    ["Setting 1", "Enabled", "Disabled", "Delivered", "Pending", "Processing"],
    ["Setting 2", "Off", "On", "Delivered", "Pending", "Processing"],
    ["Setting 1", "Enabled", "Disabled", "Delivered", "Pending", "Processing"],
    ["Setting 2", "Off", "On", "Delivered", "Pending", "Processing"],
    ["Setting 1", "Enabled", "Disabled", "Delivered", "Pending", "Processing"],
    ["Setting 2", "Off", "On", "Delivered", "Pending", "Processing"],
    ["Setting 1", "Enabled", "Disabled", "Delivered", "Pending", "Processing"],
    ["Setting 2", "Off", "On", "Delivered", "Pending", "Processing"],
  ],
};

export default Data;
