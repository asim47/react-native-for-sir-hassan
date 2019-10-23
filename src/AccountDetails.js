

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
import { CheckBox, Icon, Input } from 'react-native-elements'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const AccountDetails = () => {
    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", paddingTop: 50 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 30 }}>
                Add Your Account
            </Text>
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder="First Name"
                type="name"
            />
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder="Last Name"
                type="name"
            />
            <Input

                inputContainerStyle={{
                    borderBottomWidth: 0
                }}
                containerStyle={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    paddingLeft: 10,
                }}
                rightIcon={
                    <Icon
                        type="font-awesome"
                        name='calendar'
                        size={24}
                        color='black'
                    />
                }
                placeholder="Date / Month / Year"
                type="name"
            />
            <View style={{ height: 50, width: "80%", backgroundColor: "#eee", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Text style={{ color: "grey" }}>Gender</Text>
                <RadioForm
                onPress={()=>console.log("asim") }
                    selectedButtonColor="rgb(193, 10, 40)"
                    buttonColor="rgb(193, 10, 40)"
                    style={{ width:200, justifyContent:"space-around"}}
                    radio_props={[
                        { label: "male", value: "male" },
                        { label: "Female", value: "Female" },

                    ]}
                    initial={0}
                    formHorizontal={true}
                />
            </View>
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    marginTop: 10,
                    padding: 10
                }}
                placeholder="Email"
                type="email"
            />
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder="Mobile"
                type="phone"
            />
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder="Landline Mobile"
                type="phone"
            />
            <TextInput
                style={{
                    height: 50,
                    width: "80%",
                    borderRadius: 5,
                    backgroundColor: "#EFEFEF",
                    marginBottom: 10,
                    padding: 10
                }}
                placeholder="P.O Box"
                type="po"
            />
            <TouchableNativeFeedback >
                <View style={{ borderRadius: 5, height: 50, margin: 10, width: "80%", justifyContent: "center", backgroundColor: "rgb(193, 10, 40)", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Next</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}


export default AccountDetails;
