import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginHorizontal: wp("9px"),
        gap: wp("10px"),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View 
      style = {{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: wp("10px"),
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        
      }}>
        <View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: wp("7px"),
            }}
          >
            Hello , Devs
          </Text>
          <Text
          style={{
            color: "black",
            fontSize: wp("3px"),
          }}>14 tasks today</Text>
        </View>

        <Image source={require("../assets/Profile_Image.png")} />
      </View>
    </View>
  );
};

export default Header;
