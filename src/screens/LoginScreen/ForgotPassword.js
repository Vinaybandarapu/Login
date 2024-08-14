import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"


const ForgotPassword = ({ route }) => {
    const { email } = route.params;
    // const [email, setEmail] = useState('')
    console.log('email.....', email)
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>ForgotPassword</Text> */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(value) => {
                        // setEmail(value);
                        // handleValidEmail(value);
                    }}
                    keyboardType="email-address"
                    editable={false}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,

    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 22,
        fontSize: 20
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        // backgroundColor: "red",
    },
})

export default ForgotPassword;