import { Component} from 'react';
import React from 'react';
import { Image, StyleSheet, View, Text, TextInput, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    useFonts,
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script'

export default function Login({ route, navigation }){
    console.log(route.params);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={{ fontFamily: 'DancingScript_500Medium', fontSize: 50 }}>
                Daylit
            </Text>
            <TextInput
                style={{ height: 55, borderColor: 'black', borderWidth: 1 , width: '90%', marginTop: 30, textAlign: 'center'}}
            />
            <TextInput
                style={{ height: 55, borderColor: 'black', borderWidth: 1 , width: '90%', marginTop: 30, textAlign: 'center'}}
                secureTextEntry={true}
            />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_emial: {
        color: 'black',
        height: 50,
        width: '90%',
        marginLeft: '5%'
    }
})