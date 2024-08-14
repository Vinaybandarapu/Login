import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const SafeAreaCompact = props => {
  let hasNotch = DeviceInfo.hasNotch();
  if (hasNotch) {
    return (
      <SafeAreaView style={[styles.container, {...props.style}]}>
        {props.children}
      </SafeAreaView>
    );
  } else {
    return (
      <View style={[styles.container, {...props.style}]}>{props.children}</View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
