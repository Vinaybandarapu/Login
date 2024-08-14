import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ForgotPassword from '../screens/LoginScreen/ForgotPassword';
import Home from '../screens/Home';
import { HOME_PAGE, PERFORMANCE_PAGE } from './RouteConst';
import Performance from '../screens/Performance';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
    initialRouteName={HOME_PAGE}
    >
      <Drawer.Screen name={HOME_PAGE} component={Home} />
      <Drawer.Screen name={PERFORMANCE_PAGE} component={Performance} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;









// import * as React from 'react';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import * as RouteConst from './RouteConst';
// import { widthPercentageToDP } from 'react-native-responsive-screen';
// import Home from '../screens/Home';


// const Drawer = createDrawerNavigator();

// export const AppDrawer = (props) => {


//   return (
//     <Drawer.Navigator
//       drawerStyle={{
//         //backgroundColor: THEME_COLOR
//         width: widthPercentageToDP('70%')
//       }}
//       screenOptions={{
//         headerShown: false,
//         //headerTransparent:true
//       }}
//       initialRouteName={RouteConst.HOME_PAGE}
//       >
//       <Drawer.Screen name={RouteConst.HOME_PAGE} component={Home} />
     
//     </Drawer.Navigator>
//   )
 
// }

// export default AppDrawer;