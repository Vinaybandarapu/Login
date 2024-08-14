import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Metrics from '../../constants/metrics';
import { AppText } from '../AppText/text';
import { COLORS } from '../../constants';

const AppButton = props => {
  const { label, containerStyle, textStyle, mainContainerStyle, colors } = props;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors}
      style={[
        {
          //padding: RFValue(30, STANDARD_SCREEN_HEIGHT),
          //paddingVertical: 10,
        },
        { ...styles.viewStyle },
        { ...mainContainerStyle },
        { ...containerStyle },
      ]}>
      <TouchableOpacity
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            height: Metrics.rfv(44),
          },
        ]}
        {...props}>
        <AppText
          preset={'PARAGRAPH_1M_16'}
          color={'white'}
          tx={label}
          style={textStyle}></AppText>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textFiledStyle: {
    //flex:1,
    height: '100%',
    //width: '100%',
    //padding: 10,
    paddingLeft: Metrics.rfv(20),
    paddingRight: Metrics.rfv(20),
  },
  viewStyle: {
    height: Metrics.rfv(44),
    //width: '100%',
    borderRadius: Metrics.rfv(6),
    backgroundColor: "#98280B",
  },
});

export default AppButton;
