import {React, Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Login(){
    return (
        <View style={styles.container}>
            <Text>I'm Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})