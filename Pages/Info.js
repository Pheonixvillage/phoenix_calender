import React , {useState} from 'react';
import { Component } from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import getList from './components/list';
import Collapsible from 'react-native-collapsible';

export default function Info({ route, navigation }){

    const [iscollapsed , setIscollapsed] = useState(true);

    console.log(route.params.daydata)
    navigation.setOptions({ title: route.params.daydata.dateString })
    const lists = getList(route.params.daydata.dateString).lists.map(spe => 
    <View style={styles.list}>
        <Text style={styles.titletext} >{spe.title}</Text>
        <Text style={styles.titletext} >{spe.specific}</Text>

    </View>);
    return (
        <View style={styles.box}>
            <View style={styles.holder}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center'
    },
    holder: {
        height: 692,
        width: 376,
        alignItems: 'center',
        backgroundColor: 'rgba(104, 42, 234, 0.25)'
    },
    list : {
        height: 58,
        width: 338,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10
    },
    titletext :{
        marginTop: 8,
        marginLeft: 12,
        color: 'black'
    }
});