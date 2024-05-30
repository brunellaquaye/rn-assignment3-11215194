import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { AntDesign } from '@expo/vector-icons';

const Search = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
    style={{
     marginHorizontal: wp("9px"),
     gap: wp("10px"),
     paddingTop: insets.top,
     paddingBottom: insets.bottom,
   }}> 
   <View  style={{
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between"}}>
   <View style={{
     flexDirection: "row",
     alignItems: "center",
     gap: wp("2px"),
     backgroundColor: "#FBF9F7",
     padding: wp("2px"),
     width: wp("70px"),
     borderRadius: wp("2px"),
   }}>
   <AntDesign name="search1" size={24} color="black" />
   <Text
   style={{
     alignItems: "center",
     gap: wp("10px"),
     fontWeight: "bold",
   }}>Search</Text>
  
   </View>  
   <Image
    style={{
      backgroundColor: "#F0522F",
      borderRadius: wp("2px"),
      padding: wp("3px"),
    }}
      source={require("../assets/bx_slider.png")}
    />
    </View>
    
    </View>
  );
};

export default Search;
