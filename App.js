
// App.js
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { AuthProvider } from './src/navigation/AuthContext';
import RouteConfig from './src/navigation/RouteConfig';
export default function App() {
  return (
    <Provider store={store}>
     <AuthProvider>
     <RouteConfig />
    </AuthProvider>
    </Provider>
  );
}









// import { View, Button, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import { TextInput } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const handleLogin = async () => {
//     try {
//       // If login is successful, store user information in AsyncStorage
//       await AsyncStorage.setItem('user', JSON.stringify({ username, password }));

//       // Clear the username and password fields
//       setUsername('');
//       setPassword('');
//       console.log("login success", username, password);

//       // Navigate to the next screen or perform any other action
//       // ...
//     } catch (error) {
//       console.log(error);
//       // Handle login error
//     }
//   };
//   // const handleLoggedin = async () => {
//   //   try {
//   //     // If login is successful, store user information in AsyncStorage
//   //   await AsyncStorage.getItem('user');

//   //     // Clear the username and password fields
//   //     setUsername('');
//   //     setPassword('');
//   //     console.log("logged-in successfully", await AsyncStorage.getItem('user'));

//   //   } catch (error) {
//   //     console.log(error);
//   //     // Handle login error
//   //   }
//   // };
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//     }}>
//       <View style={styles.Textinput}>
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           // disabled
//           disabled={(password == "123456" || password == "") ? false : true}
//         />
//       </View>
//       <View style={styles.Textinput}>
//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//           disabled={username == "User" ? false : true}
//         />
//       </View>
//       <View style={styles.LoginButton}>
//         <Button
//           title="Login"
//           onPress={handleLogin}
//           disabled={(username == "User" && password == "123456") ? false : true}
//         />
//       </View>
//       {/* <Button 
//       title="get" 
//       onPress={handleLoggedin} 
//       // disabled ={password ? false : true}
//       /> */}
//     </View>
//   );
// };




// export default App;

// const styles = StyleSheet.create({
//   Textinput: {
//     paddingTop: 0,
//     marginTop: 20,
//     marginBottom: 20,
//     height: 40,
//     justifyContent: "center",
//     paddingLeft: 20,
//     paddingRight: 20,
//     borderRadius: 22,
//     // shadowColor: "#000",
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 2,
//     // },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 4,
//     // elevation: 5,
//     // backgroundColor: "red",
//   },
//   LoginButton: {
//     width: 200,
//     justifyContent: "center",
//     alignSelf: 'center',
//     marginTop: 20,
//     paddingLeft: 20,
//     paddingRight: 20,
//     borderRadius: 22,

//   }
// });