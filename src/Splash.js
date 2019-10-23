

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

const Splash = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ width: '100%', height: '100%', justifyContent:"center", alignItems:"center" }}
                source={require('../assests/background.png')}
            >
                    <Image style={{width:340, height:400, opacity:1}} source={require("../assests/logo.png")}/>
            </ImageBackground>
        </View>
    )
}


export default Splash;
