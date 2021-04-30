import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const WeatherOptions = {
      Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#636FA4","#E8CBC0"],
        title : "",
        subtitle : ""
      },
      Drizzle : {
        iconName: "weather-rainy",
        gradient: ["#1c92d2","#f2fcfe"],
        title : "",
        subtitle : ""
      },
      Rain : {
        iconName: "weather-pouring",
        gradient: ["#1c92d2","#f2fcfe"],
        title : "",
        subtitle : ""
          },
      Snow : {
        iconName: "weather-snowy",
        gradient: ["#74ebd5","#ACB6E5"],
        title : "",
        subtitle : ""
      },
      Clear : {
        iconName: "white-balance-sunny",
        gradient: ["#f05053","#e1eec3"],
        title : "Clear as crystal-clear",
        subtitle : "enjoy the weather"
      },
      Clouds : {
        iconName: "weather-partly-cloudy",
        gradient: ["#8e9eab","#eef2f3"],
        title : "",
        subtitle : ""
      },
      Mist : {
        iconName: "weather-partly-rainy",
        gradient: ["#d9a7c7","#fffcdc"],
        title : "",
        subtitle : ""
      },
      Smoke : {
        iconName: "weather-fog",
        gradient: ["#1c92d2","#f2fcfe"],
        title : "",
        subtitle : ""
      },
      Haze : {
        iconName: "weather-fog",
        gradient: ["#C9D6FF","#E2E2E2"],
        title : "",
        subtitle : ""
      },
      Dust : {
        iconName: "air-purifier",
        gradient: ["#d6ae7b","#eacda3"],
        title : "",
        subtitle : ""
      },
      Fog : {
        iconName: "weather-fog",
        gradient: ["#C9D6FF","#E2E2E2"],
        title : "",
        subtitle : ""
      },
      Sand : {
        iconName: "air-purifier",
        gradient: ["#d6ae7b","#eacda3"],
        title: "Today's Air-condition is bad",
        subtitle : "wear face mask"
      },
      
      Ash: {
        iconName: "weather-cloudy-alert",
        gradient: ["#ACBB78","#F7F8F8"],
        title : "",
        subtitle : ""
      },
      Squall : {
        iconName: "weather-cloudy-alert",
        gradient: ["#ACBB78","#F7F8F8"],
        title : "",
        subtitle : ""
      },
     Tornado : {
        iconName: "weather-tornado",
        gradient: ["#ACBB78","#F7F8F8"],
        title : "",
        subtitle : ""
      }
   
    };
    
export default function Weather({temp, condition}){
    return (
    <LinearGradient
        colors={WeatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle={"light-content"}/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                name={WeatherOptions[condition].iconName} 
                size={80} 
                color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{WeatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{WeatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const  styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    temp : {
        fontSize : 32,
        color: "white"
    },
    halfContainer : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title : {
        color: "white",
        fontSize : 45
    },
    subtitle : {
        color : "white",
        fontWeight: "600",
        fontSize : 25
    },
    textContainer : {
        paddingHorizontal: 10,
        alignItems : "flex-start"
    }
})