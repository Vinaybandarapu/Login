// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WELCOME_PAGE, SPLASH_PAGE, LOGIN_PAGE, OTP_SCREEN, HOME_PAGE, FORGOT_PASSWORD, SIGNUP_PAGE, APP_DRAWER, PERFORMANCE_PAGE } from './RouteConst';
import WelcomePage from '../screens/WelcomePage';
import SplashPage from '../screens/Splash/Splash';
import LoginComponent from '../screens/LoginScreen/LoginComponent';
import OtpScreen from '../screens/Otp/OtpScreen';
import ForgotPassword from '../screens/LoginScreen/ForgotPassword';
import SignUp from '../screens/SignUp';
import AppDrawer from './AppDrawer';
import Performance from '../screens/Performance';




const Stack = createStackNavigator();

const RouteConfig = () => {
  return (
    // <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SPLASH_PAGE} component={SplashPage} options={{ title: '' }} />
        <Stack.Screen name={APP_DRAWER} component={AppDrawer}
        options={{ title: '', headerShown: false }}/>
        <Stack.Screen name={WELCOME_PAGE} component={WelcomePage}
          options={{ title: '', headerShown: false }}
        />
        <Stack.Screen name={LOGIN_PAGE} component={LoginComponent}
          options={{ title: '', headerShown: true }}
        />
        <Stack.Screen name={SIGNUP_PAGE} component={SignUp}
          options={{ title: '', headerShown: true }}
        />
        <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword}
          options={{ title: 'Forgot Password', headerShown: true }}
        />
        <Stack.Screen name={OTP_SCREEN} component={OtpScreen}
          options={{ title: 'OTP Screen', headerShown: true }}
        />
        <Stack.Screen name={PERFORMANCE_PAGE} component={Performance}
          options={{ title: 'OTP Screen', headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default RouteConfig;
