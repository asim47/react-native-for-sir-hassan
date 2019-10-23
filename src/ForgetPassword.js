

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

const ForgetPass = () => {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", paddingTop: 100 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                Forget Your Password
            </Text>
            <Text style={{ textAlign: "center", fontSize: 13, margin: 20, color: "grey" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae excepturi voluptas veniam inventore quia delectus.
            </Text>
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    margin: 10,
                    padding: 10
                }}
                placeholder="Email Adress"
                type="email"
            />
            <TouchableNativeFeedback >
                <View style={{ borderRadius: 5, height: 50, margin: 10, width: "80%", justifyContent: "center", backgroundColor: "rgb(193, 10, 40)", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Reset Password</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}


export default ForgetPass;
