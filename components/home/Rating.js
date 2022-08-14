import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Rating(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={
          props.number >= 1
            ? "star"
            : props.number >= 0.5
            ? "star-half-full"
            : "star-outline"
        }
        color={props.color}
        size={20}
      />

      <MaterialCommunityIcons
        name={
          props.number >= 2
            ? "star"
            : props.number >= 1.5
            ? "star-half-full"
            : "star-outline"
        }
        color={props.color}
        size={20}
      />

      <MaterialCommunityIcons
        name={
          props.number >= 3
            ? "star"
            : props.number >= 2.5
            ? "star-half-full"
            : "star-outline"
        }
        color={props.color}
        size={20}
      />

      <MaterialCommunityIcons
        name={
          props.number >= 4
            ? "star"
            : props.number >= 3.5
            ? "star-half-full"
            : "star-outline"
        }
        color={props.color}
        size={20}
      />

      <MaterialCommunityIcons
        name={
          props.number >= 5
            ? "star"
            : props.number >= 4.5
            ? "star-half-full"
            : "star-outline"
        }
        color={props.color}
        size={20}
      />
      <Text>{props.number}</Text>
    </View>
  );
}
