import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GlobalStyles from "../GlobalStyles";
import LottieView from "lottie-react-native";
import MenuItems from "../components/resturantDetail/MenuItems";
import { db, collection, getDocs, query, orderBy, limit } from "../firebase";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const height = 0.3 * Dimensions.get("window").height;
  const remainHeight = 0.2 * Dimensions.get("window").height;

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const getOrderFromFirebase = async () => {
    try {
      const q = query(
        collection(db, "orders"),
        orderBy("createdAt", "desc"),
        limit(1)
      );
        const docRef = await getDocs(q);
        docRef.forEach((doc) => {
            setLastOrder(doc.data())
        })
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getOrderFromFirebase();
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeAreaWhite}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
        }}
      >
        <View style={{ height: remainHeight }}>
          <LottieView
            style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/check-mark.json")}
            autoPlay
            speed={0.5}
            loop={false}
          />
          <Text>
            Your order at the {restaurantName} has been placed for ${totalUSD}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 10 }}
        >
          <MenuItems
            foods={lastOrder.items}
            hideCheckBox={true}
            marginLeft={10}
            showHeight={false}
          />
        </ScrollView>
        <LottieView
          style={{ height: height, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
}
