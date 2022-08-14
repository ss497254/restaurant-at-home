import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar(props) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10 }}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      <TextInput
        autoCorrect={true}
        placeholder={props.placeholder}
        value={props.text}
        underlineColorAndroid="transparent"
        clearButtonMode="always"
        style={styles.text}
        onChangeText={props.onChange}
        onSubmitEditing={props.onSubmit}
      />
      <View style={styles.searchIcon}>
        <TouchableOpacity onPress={props.onSubmit}>
          <Ionicons name="search" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 2,
    paddingVertical: 8,
  },

  text: {
    marginLeft: 7,
    fontWeight: "500",
    flex: 1,
  },
  searchIcon: {
    paddingHorizontal: 15,
  },
});
