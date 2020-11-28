import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
    return (
        <View style={useStyles.container}>
            <Text style={useStyles.text}>Is loading...</Text>
        </View>
    )
}

const useStyles = StyleSheet.create({
    container:{
        
        backgroundColor: "#FDFAA5",
        justifyContent: 'center',
        alignItems: 'center',
        flex : 1
    },
    text:{
        color: '#483F29',
        fontSize: 25,
    }
})