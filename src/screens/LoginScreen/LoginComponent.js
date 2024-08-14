import React, { memo, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View, Text,
  Image, ScrollView, Dimensions,
  TextInput
} from 'react-native';

import { Common } from '../../assets';
import { APPLICATION_STYLES } from '../../constants';
import Metrics from '../../constants/metrics';
import { COLORS } from '../../constants';
import { AppOkAlert } from '../../constants/AlertHelper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import api from '../../api'
import { withGlobalize } from 'react-native-globalize';
import { API_STATUS } from '../../constants/AppConst';
import { APP_DRAWER, SIGNUP_PAGE, } from '../../navigation/RouteConst';
import { saveToken, saveUserProfileInfo } from '../../constants/AsyncStorageHelper';




const LoginComponent = withGlobalize(memo(props => {
  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState('emailTab');
  const [email, setEmail] = useState('student@eclature.com');
  const [emailValidError, setEmailValidError] = useState("");
  const [password, setPassword] = useState('123456');
  const [passwordError, setPasswordError] = React.useState("");
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = React.useState(false);

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
  const handleValidPassword = (val) => {
    if (val.length < 5) {
      setPasswordError("enter valid password");
      return false;
    } else if (val.length > 4 === true) {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    try {

      if (activeButton === 'emailTab') {

        if (email === '') {
          alert('Please enter email');
          return;
        } else if (password === '') {
          alert('Please enter password');
          return;
        }
        const payload = {
          email: `${email}`,
          password: `${password}`,
          status: "T"
        }
        // console.log('Payload................:', payload);
        const res = await api.user.loginService({}, payload)
        setLoading(false);
        console.log("res =====>", JSON.stringify(res));
        if (res && res.data.Status == "Fail") {
          alert(JSON.stringify(res.data.Message))
          setLoading(false)
        }
        else if (res && res.status == "OK" && res.data) {
          const loginData = res.data;
          const loginToken = res.data.tokendata.token;
          await saveUserProfileInfo(loginData);
          await saveToken(loginToken);
          navigation.navigate(APP_DRAWER)
          setLoading(false)
          // console.log("token login", loginToken);
        }

        setLoading(false)

      } else if (activeButton === 'mobileTab') {
        if (mobile === '') {
          alert('Please enter your mobile number');
          return;
        }
        navigation.navigate('OtpScreen', { type: 'mobile', value: mobile });
        // Handle mobile number login
        console.log('Logging in with mobile number:', mobile);
      }

    } catch (error) {
      console.log('error:', error.message);

    }
  };


  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={{}}>
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
            Login
          </Text>
        </View>

        <View style={styles.buttonTabs}>
          {/* Button 1 */}
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: activeButton === 'emailTab' ? COLORS.themeColor1 : 'white' }
            ]}
            onPress={() => {
              handlePress('emailTab');
              setMobile('');
            }}>
            <Text style={[
              styles.buttonText,
              { color: activeButton === 'emailTab' ? COLORS.white : COLORS.black }
            ]}>
              {activeButton === 'emailTab' ? 'Email' : 'Email'}
            </Text>
          </TouchableOpacity>

          {/* Button 2 */}
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: activeButton === 'mobileTab' ? COLORS.themeColor1 : 'white' }
            ]}
            onPress={() => {
              handlePress('mobileTab')
              setEmail('')
              setPassword('')
            }}>
            <Text style={[
              styles.buttonText,
              { color: activeButton === 'mobileTab' ? COLORS.white : COLORS.black }
            ]}>
              {activeButton === 'mobileTab' ? 'Phone' : 'Phone'}
            </Text>
          </TouchableOpacity>
        </View>

        {activeButton === 'emailTab' && (
          <View style={styles.inputContainer}>
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
            <View style={styles.passwordContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                value={password}
                minLength={5}
                maxLength={30}
                onChangeText={(email) => {
                  setPassword(email);
                  handleValidPassword(email);
                }}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'visibility-off' : 'visibility'}
                  size={24}
                  color="#000"
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
            {passwordError ? <Text>{passwordError}</Text> : null}

          </View>
        )}
        {activeButton === 'mobileTab' && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
          </View>

        )}
        <View style={{ marginBottom: Metrics.rfv(20), }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              marginTop: Metrics.rfv(4),
              paddingRight: 20,
            }}
            onPress={() => {
              if (email == '') {
                AppOkAlert('Please enter user name', () => { });
                return;
              }
              AppOkAlert('forgot password', () => { });
              // onForgotPassword();
              navigation.navigate('ForgotPassword', { email: email })
            }}>
            <Text style={{ color: COLORS.themeColor1, fontSize: Metrics.rfv(15), }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            margin: 10,
            borderRadius: 15,
            borderWidth: 1,
            backgroundColor: COLORS.themeColor1,
            width: '80%',
            alignSelf: 'center',
            alignItems: 'center',
            // marginTop: Metrics.rfv(4),
          }}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Continue</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: '30%',
            marginBottom: Metrics.rfv(30),
            width: '90%',
            height: Metrics.rfv(30),
            alignItems: 'flex-end',
            // backgroundColor:'red',
          }}>
          <Text style={{ color: '#000000', fontSize: Metrics.rfv(15) }}>Don't have a account ? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SIGNUP_PAGE);
            }}
          >
            <Text style={{ color: '#98280B', fontSize: Metrics.rfv(18) }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View >
  );
}));

const styles = StyleSheet.create({
  ...APPLICATION_STYLES,
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '40%'
    // alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',

  },
  buttonTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.themeColor1,
    margin: Metrics.rfv(10),
    // marginTop: Metrics.rfv(50),
    borderRadius: 20
  },
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    justifyContent: 'center',

  },
});
export default LoginComponent;