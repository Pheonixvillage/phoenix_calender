import React from "react";
import { Component } from "react";
import { StyleSheet, View, Text , Image} from "react-native";
import loading_image from "./components/assets/loading_calender.gif";

export default function(){
    return(
        <View style={styles.container}>
            <Image source={loading_image} style={styles.loading}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        width: 225,
        height: 225
    }
});