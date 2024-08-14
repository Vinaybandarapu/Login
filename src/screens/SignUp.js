import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, View, Text, Alert } from 'react-native';
import { COLORS } from '../constants';
import Metrics from '../constants/metrics';
import { Common } from '../assets';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LOGIN_PAGE } from '../navigation/RouteConst';



const SignUp = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState("");
    const [checkOne, setCheckOne] = useState(null);
    const [checkTwo, setCheckTwo] = useState(null);

    const handleValidEmail = (val) => {
        let reg =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (val.length === 0) {
            setEmailValidError("email address must be enter");
        } else if (val.length != 0 && reg.test(val) === false) {
            setEmailValidError("enter valid email address");
        } else if (reg.test(val) === true) {
            setEmailValidError("");
        }
    };

    const handleLogin = async () => {
        if (email === '') {
            alert('Please enter email');
            return;
        }
        else if (checkOne && checkTwo) {
            Alert.alert('Registered successfully');
            // navigation.navigate('NextScreen');
        } else {
            Alert.alert('Selection Required', 'Please select terms and conditions to proceed.');
        }
    }

    return (
        <SafeAreaView>
            <View style={{
                alignSelf: 'center',
                marginTop: Metrics.rfv(20),
            }}>
                <Image
                    style={{
                        // justifyContent: 'center', 
                        alignSelf: 'center',
                        height: Metrics.rfv(65),
                        width: Metrics.rfv(250),
                        // marginBottom: RFValue(50, STANDARD_SCREEN_HEIGHT),
                        // backgroundColor: 'white'
                    }}
                    source={Common.SplashText}
                    resizeMode={"cover"}
                >
                </Image>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: Metrics.rfv(30),
            }}>
                <Text
                    style={{ margin: Metrics.rfv(10), fontWeight: 900, fontSize: Metrics.rfv(25), color: COLORS.themeColor1, }}
                >
                    Sign Up
                </Text>
            </View>
            <View style={{
                paddingLeft: 20,
                paddingRight: 20,
            }}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(value) => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
                    keyboardType="email-address"
                />
                {emailValidError ? <Text>{emailValidError}</Text> : null}
            </View>

            <View>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setCheckOne(!checkOne)}
                >
                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <View style={[styles.radio, checkOne && styles.selectedRadio]} >
                            {checkOne && <Icon name="check" size={16} color="#fff" />}
                        </View>
                        <Text style={styles.text}>I authorise TridaPro to send me important information and reminders on Whatsapp </Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                    onPress={() => setCheckTwo(!checkTwo)}
                >
                    <View style={{ flexDirection: 'row', margin: 20 }}>

                        <View style={[styles.radio, checkTwo && styles.selectedRadio]} >
                            {checkTwo && <Icon name="check" size={16} color="#fff" />}
                        </View>
                        <Text style={styles.text}>By creating an account, You agree to our Terms of Service and Policy </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: '40%',
                    width: '90%',
                    height: Metrics.rfv(30),
                    alignItems:'flex-end',
                    // backgroundColor:'red',
                  }}>
                  <Text style={{ color: '#000000', fontSize: Metrics.rfv(15) }}>Already have an account ? </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(LOGIN_PAGE);
                    }}
                  >
                    <Text style={{ color: '#98280B', fontSize: Metrics.rfv(18) }}>Login</Text>
                  </TouchableOpacity>
                </View>

            <TouchableOpacity
                style={{
                    padding: 10,
                    margin: 50,
                    borderRadius: 15,
                    borderWidth: 1,
                    backgroundColor: COLORS.themeColor1,
                    width: '80%',
                    alignSelf: 'center',
                    alignItems: 'center',
                }}
                onPress={() => {
                    handleLogin();
                }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    selectedRadio: {
        backgroundColor: '#000',
    },
    text: {
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,

    },
});

export default SignUp;