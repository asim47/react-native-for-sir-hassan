import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableNativeFeedback,
    TextInput
} from 'react-native';
import { CheckBox, Icon } from 'react-native-elements'


const VerifyAccount = () => {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", paddingTop: 100 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 80 }}>
                Verify Account
            </Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "rgb(70, 70, 70)" }}>
                Email and Mobile
            </Text>
            <Text style={{ fontSize: 15, color: "rgb(70, 70, 70)", margin: 10 }}>
                Code sent to your email and mobile
            </Text>
            <Text style={{ fontSize: 15, color: "rgb(70, 70, 70)", fontWeight: "bold", margin: 3 }}>
                Enter Your Email code here
            </Text>
            <TextInput
                style={{ margin: 20 }}
                placeholder="• • • • "
                placeholderTextColor="rgb(193, 10, 40)"
                fontSize={60}
                maxLength={4}

            />
            <TouchableNativeFeedback >
                <View style={{ borderRadius: 5, height: 50, margin: 10, width: "80%", justifyContent: "center", backgroundColor: "rgb(193, 10, 40)", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Verify Now</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default VerifyAccount
