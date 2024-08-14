import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, BackHandler, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useIsFocused, useNavigation, useRoute, DrawerActions } from '@react-navigation/native';
import { useDispatch, useStore } from 'react-redux';
import { withGlobalize } from 'react-native-globalize';
import { COLORS } from '../../constants/colors';
import Metrics from '../../constants/metrics';
import api from '../../api';
import { Common } from '../../assets/index';
import { memo } from 'react';
// import { logout } from '../../Redux/reducer/User';
import { WELCOME_PAGE } from '../../navigation/RouteConst';

export const headerBackIntlProvider = props => ({
  // wantLogout: IntlProvider(props, 'sideMenu/wantLogout')
});

const AppHeader = withGlobalize(memo(props => {
  const { title, leftIcon, rightIcon, menuIcon } = props;
  const intl = headerBackIntlProvider(props);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch()


  // const onBackPressed = () => {
  //   navigation.goBack();
  //   return true;
  // };

  const onLogoutPress = async () => {
    await api.user.logoutService();
    // dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{ name: WELCOME_PAGE }],
    });
  };

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', onBackPressed);
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', onBackPressed);
  //   }
  // }, [isFocused]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {/* {menuIcon && ( */}
          <TouchableOpacity
            style={[
              styles.centerView,
              styles.iconContainer,
              {
                marginLeft: Metrics.rfv(5),
                marginRight: Metrics.rfv(6),
              },
            ]}
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());

            }}>
            <Feather name={'align-justify'} color={'black'} size={Metrics.rfv(35)} />
          </TouchableOpacity>
        {/* )} */}
        {leftIcon && (
          <TouchableOpacity
            style={[
              styles.centerView,
              styles.iconContainer,
              {
                marginLeft: Metrics.rfv(20),
                marginRight: Metrics.rfv(6),
              },
            ]}
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcons name={'west'} color={COLORS.black} size={Metrics.rfv(30)} />
          </TouchableOpacity>
        )}
        {/* <View
          style={[
            styles.textContainer,
            { marginLeft: !leftIcon ? Metrics.rfv(20) : Metrics.rfv(4) },
          ]}> */}
          
            <Image
              style={{
                height: Metrics.rfv(40),
                width: Metrics.rfv(50),
              }}
              source={Common.SplashImg}
              resizeMode={"cover"}
            >
            </Image>
           
        {/* {rightIcon && ( */}
          <TouchableOpacity
            style={[
              styles.centerView,
              styles.iconContainer,
              {
                marginLeft: '60%',
                marginRight: Metrics.rfv(4),
                // backgroundColor:'black',
              },
            ]}
            onPress={() => {
              Alert.alert("Logout", "Are you want Logout ?",
                [
                  { text: "Cancel", onPress: () => { } },
                  { text: "Ok", onPress: () => onLogoutPress() }
                ])
            }}>
            <Feather name={'power'} color={COLORS.white} size={Metrics.rfv(25)} />
          </TouchableOpacity>
        {/* )} */}


      </View>
    </View>
  )
}))
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: Metrics.rfv(55),
    backgroundColor: COLORS.red,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: Metrics.rfv(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    width: Metrics.rfv(40),
    height: Metrics.rfv(40),
  },
  leftIconContainer: {
    marginLeft: Metrics.rfv(10),
    borderRadius: Metrics.rfv(20),
    overflow: 'hidden',
    borderWidth: 0,
  },

  textContainer: {
    flex: 1,
    marginLeft: Metrics.rfv(4),
  },
});
export default withGlobalize(AppHeader);