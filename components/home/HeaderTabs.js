import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        active={props.active}
        setActive={props.setActive}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        active={props.active}
        setActive={props.setActive}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.active === props.text ? "black" : "white",
      height: 38,
      display: "flex",
      justifyContent: "center",
      paddingHorizontal: 26,
      borderRadius: 50,
    }}
    onPress={() => {
      props.setActive(props.text);
    }}
  >
    <Text
      style={{
        color: props.active === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "800",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
