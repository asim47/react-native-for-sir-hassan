

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

import {} from "react-native-vector-icons"
const Login = () => {
    return (
        <View style={{ flex: 1 }}>
            
            <View style={{ paddingTop: 50, flex: 6, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Login To Proceed</Text>
                <Text style={{ color: "grey", width: 250, textAlign: "center", margin: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat accusantium eligendi, ,</Text>
                <TextInput
                    style={{
                        height: 50,
                        width: "80%",
                        borderRadius: 5,
                        backgroundColor: "#EFEFEF",
                        margin: 10,
                    }}
                    placeholder="User / Email"
                    type="email"
                />
                <TextInput
                    style={{
                        height: 50,
                        width: "80%",
                        borderRadius: 5,
                        backgroundColor: "#EFEFEF",
                        margin: 10,
                    }}
                    placeholder="password"
                    type="password"
                />
                <CheckBox
                    containerStyle={{ borderWidth: 0,backgroundColor:"#fff", width: "80%" }}
                    title='Keep me Login'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor="rgb(193, 10, 40)"
                    checked={true}
                />
                <TouchableNativeFeedback >
                    <View style={{ margin: 10, height: 50, width: "80%", justifyContent: "center", backgroundColor: "rgb(193, 10, 40)", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <Text style={{ color: "gray", marginTop: 20, marginBottom: 10 }}>Forget Password?</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <Text style={{ color: "gray", marginTop: 30 }}>Or login with</Text>
                </TouchableNativeFeedback>


            </View>
            <View style={{paddingLeft:"10%",paddingRight:"10%", flex: 1, height: 20, width: "100%", flexDirection:"row",justifyContent:"space-around",alignItems:"center" }}>
            <TouchableNativeFeedback >
                    <View style={{flexDirection:"row", height: 50, width: 150, justifyContent: "center", backgroundColor: "rgb(10, 130, 176)", alignItems: "center" }}>
                    <Icon
                        size={40}
                        name='sc-facebook'
                        type='evilicon'
                        color='white'
                        /> 
                      <Text style={{ color: "white",fontSize:17,fontWeight:"bold" }}>
                      
                          facebook
                          
                          </Text>
                    </View>
                </TouchableNativeFeedback>  
                <TouchableNativeFeedback >
                    <View style={{flexDirection:"row", height: 50, width: 150, justifyContent: "center", backgroundColor: "rgb(253, 1, 0)", alignItems: "center" }}>
                    <Icon
                        size={30}
                        name='google'
                        type='font-awesome'
                        color='white'
                        />
                         <Text style={{marginLeft:10, color: "white",fontSize:17,fontWeight:"bold" }}>google</Text>
                    </View>
                </TouchableNativeFeedback> 
            </View>
            <View style={{ flex: .7, }}>
                <TouchableNativeFeedback >
                    <View style={{ height: "100%", width: "100%", justifyContent: "center", backgroundColor: "rgb(193, 10, 40)", alignItems: "center" }}>
                        <Text style={{ color: "white" }}>SIGN UP AN ACCOUNT</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}


export default Login;
