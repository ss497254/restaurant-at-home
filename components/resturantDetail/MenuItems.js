import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";


export default function MenuItems({ restaurantName, foods, hideCheckBox, marginLeft, showHeight }) {
  const height = 0.5 * Dimensions.get("window").height;
  const orderHeight = 0.40 * Dimensions.get("window").height;

  const items = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const checking = (food, cartItems) => {
      return Boolean(cartItems.find((check) => check.title == food.title))
  }

  const dispatch = useDispatch();

  const selectItem = (item, restaurantName, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  return (
    <View style={{ height: showHeight ? height :orderHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: "5%" }}
      >
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              { !hideCheckBox && (<BouncyCheckbox
                iconStyle={{ borderColor: "lightgrey", borderRadius: 0 }}
                fillColor="green"
                isChecked={checking(food, items)}
                onPress={(checkboxValue) => selectItem(food, restaurantName, checkboxValue)}
              />) }
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={ marginLeft ? marginLeft : 0} />
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: "53%", justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({marginLeft, ...props}) => (
  <Image
    source={{ uri: props.food.image }}
    style={{
      width: 100,
      height: 100,
      borderRadius: 8,
      marginLeft: marginLeft
    }}
  />
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
