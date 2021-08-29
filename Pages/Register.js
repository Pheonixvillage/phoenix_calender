import { Component, useContext} from 'react';
import React , {useState} from 'react';
import { Image, StyleSheet, View, Text, TextInput, SafeAreaView , TouchableOpacity} from 'react-native';

import {login_funtion} from '../App';

import { UserEmailContext } from './components/contexts';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    useFonts,
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script'



export default function Register({ route, navigation }){
    console.log(route.params)
    const [useremail, setUseremail] = useState("");
    const [userpass, setUserpass] = useState("");
    const [username, setUsername] = useState("");
    //route.params.pages()
    return(
        <SafeAreaView style={styles.container}>
            <Text style={{ fontFamily: 'DancingScript_500Medium', fontSize: 50 }}>
                Daylit
            </Text>
            <TextInput
                style={{ height: 55, borderColor: 'black', borderWidth: 1 , width: '90%', marginTop: 30, textAlign: 'center', fontSize: 20}}
                onChangeText={email => setUseremail(email)}
            />
            <TextInput
                style={{ height: 55, borderColor: 'black', borderWidth: 1 , width: '90%', marginTop: 30, textAlign: 'center', fontSize: 20}}
                secureTextEntry={true}
                onChangeText={pass => setUserpass(pass)}
            />
            <TextInput
                style={{ height: 55, borderColor: 'black', borderWidth: 1 , width: '90%', marginTop: 30, textAlign: 'center', fontSize: 20}}
                onChangeText={name => setUsername(name)}
            />

            <TouchableOpacity activeOpacity={0.1}  style={{ height: 55, borderColor: 'black', borderWidth: 1 , width: '90%', marginTop: 30, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => {route.params.start_login(useremail, userpass)}} >
                <Text style={{fontSize: 20}}>Register and start</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.1}  style={{ height: 55, borderColor: 'black', borderWidth: 0 , width: '90%', marginTop: 30, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => {route.params.setPage("Login")}} >
                <Text style={{fontSize: 10}}>Or Login</Text>
            </TouchableOpacity>

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
    },
    button: {
        borderColor: 'black',
        height: 50,
        width: '90%',
        marginLeft: '5%'
    }
})