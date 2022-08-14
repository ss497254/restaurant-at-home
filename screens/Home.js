import { View, Text, SafeAreaView, ScrollView, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import GlobalStyles from "../GlobalStyles";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import ResturantItems, {
  localRestaurants,
} from "../components/home/ResturantItems";
import BottomTabs from "../components/home/BottomTabs";

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [active, setActive] = React.useState("Delivery");

  const handleOnChange = (event) => {
    setText(event);
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    if (location == text) return;
    else setLocation(text);
  };

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <View style={{ backgroundColor: "#fff", padding: 10 }}>
        <HeaderTabs active={active} setActive={setActive} />
        <SearchBar
          placeholder="Search"
          text={text}
          onChange={handleOnChange}
          onSubmit={onSubmit}
        />
      </View>
      <ScrollView>
        <Categories />
        <ResturantItems
          resturantData={localRestaurants}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
