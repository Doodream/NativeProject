import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


const weatherOption = {
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient: ["black","yellow"],
        title: "천둥번개",
        subtitle: "밖에 나가지 마세요 😱",
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#373B44","#4286f4"],
        title: "비",
        subtitle: "우산을 챙겨 나가세요. ☂️",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#ADA996","#EAEAEA"],
        title: "눈",
        subtitle: "펄펄 눈이 내려와요 ❄️ ",
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#BE93C5","#7BC6CC"],
        title: "안개",
        subtitle: "안개가 자욱해요 🌫",
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "짙은 안개",
        subtitle: "짙은 안개속 산신령이 나타날지도..?",
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#16222A","#3A6073"],
        title: "토네이도",
        subtitle: "용오름이 오네요! 🐉",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9","#FFFFFF"],
        title: "맑음",
        subtitle: "언제봐도 좋은 날씨에요 ☀︎",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "흐림",
        subtitle: "꿀꿀한데 소주한잔 하죠?  🍶",
    },
}

export default function Weather({temp, weather}){
    return (
        <LinearGradient colors={weatherOption[weather].gradient} style={useStyles.container}>
            <StatusBar barstyle = "light-content" />
            <View style={useStyles.halfContainer}>
                <MaterialCommunityIcons name={weatherOption[weather].iconName} size={96} color="white" />
                <Text style={useStyles.temp}>{Math.round(temp)}℃</Text>
            </View>
            <View style={useStyles.halfContainer}>
                <Text style={useStyles.title}>{weatherOption[weather].title}</Text>
                <Text style={useStyles.subtitle}>{weatherOption[weather].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

const useStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },  
    temp:{
        fontSize: 40,
        fontWeight: "600",
        color: "white"
    },
    title:{
        fontSize: 40,
        color: "white",
        marginBottom: 15,
        fontWeight: "200"
    },
    subtitle:{
        fontSize: 25,
        color: "white",
        fontWeight: "800"

    }
}) 

Weather.prototypes = {
    temp: PropTypes.number.isRequired,
    weather: PropTypes.oneOf([
        "Thunderstorm",
        "Rain",
        "Snow",
        "Haze",
        "Fog",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};