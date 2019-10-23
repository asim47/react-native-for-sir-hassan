

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
let slides = [
    {
        image: require("../assests/icon1.png"),
        title: "Register",
        para1: "Set asim Your Location to start  exploring resturains around you",
        para2: "Set Your Location to start  exploring resturains around you Set Your Location to start  exploring resturains around you Set Your Location to start  exploring resturains around you"
    },
    {
        image: require("../assests/icon2.png"),
        title: "Place An Order",
        para1: "Set asim Your Location to start  exploring resturains around you",
        para2: "Set Your Location to start  exploring resturains around you Set Your Location to start  exploring resturains around you Set Your Location to start  exploring resturains around you"
    },
    {
        image: require("../assests/icon3.png"),
        title: "Fast Delievery",
        para1: "Set asim Your Location to start  exploring resturains around you",
        para2: "Set Your Location to start  exploring resturains around you Set Your Location to start  exploring resturains around you Set Your Location to start  exploring resturains around you"
    },
]

const Tour = () => {

    let _renderItem = (item) => {
        
        return (
            <>
                <View style={{ flex: 6, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 200, width: 200 }} source={item.item.image} />
                    <Text style={{ fontSize: 50, fontWeight: "bold" }}>{item.item.title}</Text>
                    <Text style={{ fontSize: 17, textAlign: "center", margin: 30 }}>{item.item.para1}</Text>
                    <Text style={{ fontSize: 17, textAlign: "center", margin: 30 }}>{item.item.para2}</Text>


                </View>
                
            </>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: .5, justifyContent: "center", alignItems: "flex-end", paddingRight: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Skip Tour</Text>
            </View>
            <View style={{ flex: 6, justifyContent: "center", alignItems: "center" }}>

                <AppIntroSlider activeDotStyle={{backgroundColor:"rgb(193, 10, 40)"}} renderItem={_renderItem} slides={slides} />


            </View>
            <View style={{ flex: .5, }}>

            </View>
        </View>
    )
}


export default Tour;
