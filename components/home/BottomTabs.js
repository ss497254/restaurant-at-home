import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 8,
        paddingHorizontal: 25,
        backgroundColor: "white",
        justifyContent: "space-between",
        borderTopColor: "#ababab",
        borderTopWidth: 0.5,
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <View style={{ alignItems: "center" }}>
    <TouchableOpacity>
      <FontAwesome5
        style={{ alignSelf: "center", marginBottom: 3 }}
        name={props.name}
        size={20}
        color="#333"
      />
      <Text style={{ fontWeight: "600", fontSize: 9, alignSelf: "center" }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
