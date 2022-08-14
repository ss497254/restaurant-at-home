import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    AndroidSafeAreaWhite: {
        flex: 1,
        backgroundColor: "white",
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})