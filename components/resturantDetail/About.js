import { View, Text, Image } from "react-native";
import React from "react";
import Rating from "../home/Rating";

export default function About({ route }) {
  const { image, title, price, rating, reviews, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  return (
    <View style={{ height: "50%", marginBottom: 10 }}>
      <ResturantImage image={image} />
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 16,
        }}
      >
        <ResturantTitle text={title} price={price} />
        <ResturantInfo
          text={formattedCategories}
          rating={rating}
          reviews={reviews}
        />
      </View>
    </View>
  );
}

const ResturantImage = (props) => (
  <Image
    source={{ uri: props.image }}
    style={{
      width: "100%",
      height: 250,
    }}
  />
);

const ResturantTitle = (props) => (
  <>
    <Text
      style={{
        fontWeight: "600",
        fontSize: 29,
        width: "75%",
      }}
    >
      {props.text}
    </Text>
    <Text style={{ fontSize: 29, position: "absolute", top: 30, right: 16 }}>
      {props.price}
    </Text>
  </>
);

const ResturantInfo = (props) => (
  <View>
    <Text
      style={{
        fontSize: 15,
        fontWeight: "400",
        width: "80%",
        color: "grey",
        marginTop: 4,
        marginVertical: 16,
      }}
    >
      {props.text}
    </Text>
    <Text style={{ marginBottom: 10, fontSize: 18, fontWeight: "400" }}>
      Rating:
    </Text>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Rating color={"#f0b010"} number={props.rating} />
      <Text style={{ color: "grey", fontWeight: "400", marginLeft: 5 }}>
        ({props.reviews}+) reviews
      </Text>
    </View>
  </View>
);
