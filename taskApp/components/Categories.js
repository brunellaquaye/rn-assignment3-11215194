import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const categoryData = [
  {
    id: 1,
    title: "Exercise",
    description: "12 Tasks",
    imageUrl: require("../assets/category1.png"),
  },
  {
    id: 2,
    title: "Study",
    description: "1 Tasks",
    imageUrl: require("../assets/category2.png"),
  },
  {
    id: 3,
    title: "Code",
    description: "15 Tasks",
    imageUrl: require("../assets/category1.png"),
  },
  {
    id: 4,
    title: "Cook",
    description: "12 Tasks",
    imageUrl: require("../assets/category2.png"),
  },
  {
    id: 5,
    title: "Read",
    description: "12 Tasks",
    imageUrl: require("../assets/category1.png"),
  },
  {
    id: 6,
    title: "Meals",
    description: "12 Tasks",
    imageUrl: require("../assets/category2.png"),
  },
  {
    id: 7,
    title: "Chores",
    description: "16 Tasks",
    imageUrl: require("../assets/category1.png"),
  },
  {
    id: 8,
    title: "Lectures",
    description: "12 Tasks",
    imageUrl: require("../assets/category2.png"),
  },
  {
    id: 9,
    title: "Events",
    description: "12 Tasks",
    imageUrl: require("../assets/category1.png"),
  },
  {
    id: 10,
    title: "Hackatons",
    description: "12 Tasks",
    imageUrl: require("../assets/category2.png"),
  },
];
const Categories = () => {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: wp("10px"),
        }}
      >
        <View
          style={{
            flexDirection: "column",
            padding: wp("10px"),
            backgroundColor: "#FBF9F7",
            borderRadius: wp("4px"),
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontWeight: "bold",
              fontSize: hp("2.5px"),
              paddingTop: insets.top,
            }}
          >
            {categoryData.title}
          </Text>
          <Text style={{}}>{categoryData.description}</Text>
          <Image source={categoryData.imageUrl} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: hp("2.5px"),
          marginHorizontal: wp("10px"),
          paddingTop: insets.top,
        }}
      >
        Categories
      </Text>
      <FlatList
        data={categoryData}
        renderItem={({ item }) => (
          <View
            style={{
              gap: wp("5px"),
              flexDirection: "column",
              padding: wp("5px"),
              backgroundColor: "#FBF9F7",
              borderRadius: wp("4px"),
              marginHorizontal: wp("5px"),
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontWeight: "semibold", fontSize: hp("1.5px") }}>
                {item.description}
              </Text>
            </View>
            <Image source={item.imageUrl} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default Categories;
