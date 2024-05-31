import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, ScrollView} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

  const ongoingData = [
    {
      id: 1,
      title: "Mobile App Development",
    },
    {
      id: 2,
      title: "Web Development",
    },
    {
      id: 3,
      title: "Push Ups",
    },
    {
      id: 4,
      title: "Cook",
    },
    {
      id: 5,
      title: "Relax",
    },
    {
      id: 6,
      title: "Data Structures and Algorithms",
    },
    {
      id: 7,
      title: "Chores",
    },
    {
      id: 8,
      title: "Exercise",
    },
    {
      id: 9,
      title: "Hackaton",
    },
    {
      id: 10,
      title: "Personal Study",
    },
    {
      id: 11,
      title: "Systems Administration",
    },
    {
      id: 12,
      title: "Calculus 2",
    },
    {
      id: 13,
      title: "Calculus 1",
    },
    {
      id: 14,
      title: "Creating APIs",
    },
    {
      id: 15,
      title: "Java Tutorials",
    },
  ];


const Ongoingtask = () => {
  const insets = useSafeAreaInsets();
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View
        style={{
          marginHorizontal: wp("9px"),
      gap: wp("5px"),
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
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
            {ongoingData.title}
          </Text>
          <Text style={{}}>{ongoingData.description}</Text>
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
        Ongoing Task
      </Text>
      <FlatList
        data={ongoingData}
        renderItem={({ item }) => (
          <View
            style={{
              padding: wp("10px"),
              backgroundColor: "#FBF9F7",
              borderRadius: wp("2px"),
              borderColor:"#E8D1BA",
              borderWidth: wp("0.3px"),
              flexDirection: "column",
              borderRadius: wp("3px"),
              marginHorizontal: wp("5px"),
              marginVertical: wp("3px"),



            }}
          >
            <View>
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ fontWeight: "semibold", fontSize: hp("1.5px") }}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        vertical
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

//   return (
//     <View
//     style={{
//      marginHorizontal: wp("9px"),
//      gap: wp("5px"),
//      paddingTop: insets.top,
//      paddingBottom: insets.bottom,
//    }}>        
//    <Text  
//    style={{
//           fontWeight: "bold",
//           fontSize: hp("2.5px"),
//         }}>Ongoing Task</Text>
//    <ScrollView>
//    <View style = {{
//     padding: wp("10px"),
//     backgroundColor: "#FBF9F7",
//     borderRadius: wp("2px"),
//     borderColor:"#E8D1BA",
//     borderWidth: wp("0.3px"),
//     flexDirection: "column",
//     borderRadius: wp("3px"),
//    }}>
//     <Text>Mobile App Development</Text>
//    </View>
//    <View style = {{
//     padding: wp("10px"),
//     backgroundColor: "#FBF9F7",
//     borderRadius: wp("2px"),
//     borderColor:"#E8D1BA",
//     borderWidth: wp("0.3px"),
//     flexDirection: "column",
//     borderRadius: wp("3px"),
//    }}>
//     <Text>Mobile App Development</Text>
//    </View>
//    <View style = {{
//     padding: wp("10px"),
//     backgroundColor: "#FBF9F7",
//     borderRadius: wp("2px"),
//     borderColor:"#E8D1BA",
//     borderWidth: wp("0.3px"),
//     flexDirection: "column",
//     borderRadius: wp("3px"),
//    }}>
//     <Text>Mobile App Development</Text>
//    </View>
//    <View style = {{
//     padding: wp("10px"),
//     backgroundColor: "#FBF9F7",
//     borderRadius: wp("2px"),
//     borderColor:"#E8D1BA",
//     borderWidth: wp("0.3px"),
//     flexDirection: "column",
//     borderRadius: wp("3px"),
//    }}>
//     <Text>Mobile App Development</Text>
//    </View>
//    </ScrollView>
//     </View>
//   )
// }

export default Ongoingtask