import { ImageSourcePropType } from "react-native";

export interface RestaurantImage {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

const Restaurant: RestaurantImage[] = [
  {
    id: 1,
    name: "Food Mall",
    image: require("../../assets/images/1.png"),
  },
  {
    id: 2,
    name: "Chinese Hub",
    image: require("../../assets/images/2.png"),
  },
  {
    id: 3,
    name: "Lunch Box",
    image: require("../../assets/images/3.png"),
  },
  {
    id: 4,
    name: "Html",
    image: require("../../assets/images/foodItems/food4.png"),
  },
  {
    id: 5,
    name: "Hello Bake",
    image: require("../../assets/images/0.png"),
  },
];

export default Restaurant;
