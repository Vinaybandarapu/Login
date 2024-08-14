import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View,Text ,BackHandler} from 'react-native';
import { useNavigation,useRoute,  useIsFocused, } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const WebView = () => {

  const navigation = useNavigation()
  const isFocused = useIsFocused();
  const route=useRoute();
  // const{name,path}=route.params;
  //console.log(' web view values',name +""+path);
   const {path,name} =route.params;
    console.log("path value",path);
  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
  BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [isFocused]);

  return <View style={{ flex: 1 }}>
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    }}>
      <WebView
        javaScriptEnabled={true}
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        source={{
          uri:path
       // uri:'https://www.aicte-india.org/vef/load/efe60986f7c116f23875d0b412d34a4c?width=640&height=365'
        }}
        style={{ marginTop: 20 }}
      />

    </View>
  </View>

}

export default WebView;
