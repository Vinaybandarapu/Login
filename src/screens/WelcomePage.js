import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Metrics from '../constants/metrics';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_PAGE, LOGIN_CONTAINER, SIGNUP_PAGE } from '../navigation/RouteConst';
import { COLORS } from '../constants';
import { Common } from '../assets';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_SCREEN_HEIGHT } from '../constants/AppConst';

const WelcomePage = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <View>
        <Image
          style={{
            // justifyContent: 'center', 
            alignSelf: 'center',
            justifyContent: 'center', alignSelf: 'center',
            height: Metrics.rfv(80),
            width: Metrics.rfv(300),
            marginTop: RFValue(50, STANDARD_SCREEN_HEIGHT),
          }}
          source={Common.SplashText}
          resizeMode={"stretch"}
        >
        </Image>
      </View>

      <View>
        <Image
          style={{
            // justifyContent: 'center', 
            alignSelf: 'center',
            height: Metrics.rfv(230),
            width: Metrics.rfv(280),
            marginTop: RFValue(30, STANDARD_SCREEN_HEIGHT),
            marginBottom: RFValue(30, STANDARD_SCREEN_HEIGHT),

            // backgroundColor: 'white'
          }}
          source={Common.WomenInMeeting}
          resizeMode={"cover"}
        >
        </Image>
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Text 
        style={{ margin: Metrics.rfv(10), fontWeight: 'bold', fontSize: Metrics.rfv(25), color: COLORS.black }}
        >
          Welcome to TridaPro
          </Text>
        <Text 
        style={{ margin: Metrics.rfv(0), fontSize: Metrics.rfv(15), color: COLORS.black }}
        >
          Where learning meets excellence!
          </Text>
      </View>
      <View style={{ margin: Metrics.rfv(20),width: '80%', }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(LOGIN_PAGE)
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(SIGNUP_PAGE)
          }}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red'

  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.themeColor1,
    padding: Metrics.rfv(15),
    margin: Metrics.rfv(10),
    borderRadius: Metrics.rfv(20),

  },
  buttonText: {
    color: 'white',
    fontSize: Metrics.rfv(15),
  }
})

export default WelcomePage