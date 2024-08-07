import React from "react";
import Overview from "./overview";
import Categories from "./category";
import AddCategory from "./add-new-category";
import Products from "./products";
import AddProduct from "./add-product";
import Orders from "./order";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard({ activeScreen }: any) {
  return (
    <SafeAreaView className="flex-1 py-4">
      {activeScreen === "Overview" && <Overview />}
      {activeScreen === "Categories" && <Categories />}
      {activeScreen === "AddCategory" && <AddCategory />}
      {activeScreen === "Products" && <Products />}
      {activeScreen === "AddProduct" && <AddProduct />}
      {activeScreen === "Orders" && <Orders />}
    </SafeAreaView>
  );
}
