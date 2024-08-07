import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { images } from "@/src/constants";

export default function Notifications() {
  return (
    <SafeAreaView className="h-full bg-light-bg dark:bg-dark-bg">
      <View>
        <ImageBackground
          source={images.six}
          className="h-[210px] w-full absolute left-0 top-0"
        >
          <View className="h-full w-full justify-center relative">
            <View className="absolute h-full w-full bg-black/25 top-0 left-0"></View>
            <Text className="text-2xl text-white font-medium font-pmedium ml-10">
              Notification
            </Text>
          </View>
        </ImageBackground>
        <NotificationList />
      </View>
    </SafeAreaView>
  );
}

function NotificationItem() {
  return (
    <View
      style={{
        paddingBottom: 16,
        marginVertical: 1,
        borderBottomWidth: 1,
      }}
      className="flex-row gap-3 border-tertiary dark:border-tertiary-dark bg-light-bg dark:bg-dark-bg"
    >
      <View className="w-[52px] h-[52px] rounded-full overflow-hidden">
        <Image
          source={images.profile}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>
      <View>
        <Text className="text-sm font-medium font-pmedium text-secondary dark:text-secondary-dark">
          Lorem ipsum dolor sit amet!
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-sm  font-pregular text-secondary dark:text-tertiary-dark"
        >
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
        </Text>
        <View className="flex-row items-center gap-1 mt-2">
          <Ionicons name={"time"} size={12} color={"#C6D0D8"} />
          <Text className="text-xs  font-pregular text-tertiary dark:text-tertiary-dark">
            28 May, 2020
          </Text>
        </View>
      </View>
    </View>
  );
}

function EmptyNotification() {
  return (
    <View className="h-10 justify-center items-center bg-light-bg dark:bg-dark-bg">
      <Text className="text-tertiary dark:text-tertiary-dark font-pregular text-lg">
        No Notification yet.
      </Text>
    </View>
  );
}
const ItemSeparator = () => (
  <View
    style={{
      height: 10,
      marginHorizontal: 16,
    }}
  />
);

function NotificationList() {
  return (
    <FlatList
      data={[
        { id: "1" },
        { id: "12" },
        { id: "13" },
        { id: "14" },
        { id: "15" },
        { id: "16" },
        { id: "17" },
        { id: "18" },
        { id: "171" },
        { id: "183" },
        { id: "1832" },
        { id: "1833" },
      ]}
      contentContainerStyle={{ paddingTop: 190 }}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<EmptyNotification />}
      renderItem={() => <NotificationItem />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}
