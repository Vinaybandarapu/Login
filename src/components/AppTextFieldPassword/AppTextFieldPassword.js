import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Metrics from '../../constants/metrics';
import { COLORS, FONTS, FONT_SIZE } from '../../constants';
import { AppText } from '../AppText/text';

const AppTextFieldPassword = props => {
  let { value, changeText, placeHolder, touched, error, title } = props;
  const [viewPassword, setViewPassword] = useState(true);

  return (
    <>
      <View
        style={{ padding: Metrics.rfv(20), paddingVertical: Metrics.rfv(10) }}>
        {title && (
          <AppText
            preset={'HEADING_B_14'}
            color={'red'}
            tx={title}
            style={{
              fontWeight: 'bold',
              marginLeft: Metrics.rfv(4),
              marginBottom: Metrics.rfv(4),
            }}></AppText>
        )}
        <View style={[{ ...styles.viewStyle }]}>
          <Input
            {...props}
            containerStyle={styles.textFiledStyle}
            contextMenuHidden={true}
            inputContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0,
              borderBottomWidth: 0,
            }}
            inputStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              color: COLORS.black,
                marginTop: Metrics.rfv(2),
              fontSize: FONT_SIZE.medium,
              textAlignVertical: 'center',
              fontFamily: FONTS.primaryFont,
            }}
            rightIcon={
              <Icon
                name={!viewPassword ? 'eye-slash' : 'eye'}
                color={COLORS.red}
                size={Metrics.rfv(20)}
                style={{
                  textAlignVertical: 'center',
                }}
                onPress={() => {
                  setViewPassword(!viewPassword);
                }}
              />
            }
            defaultValue={value}
            placeholder={placeHolder}
            value={value}
            onChangeText={text => {
              changeText(text);
            }}
            editable={true}
            secureTextEntry={viewPassword}
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </View>
      {touched && error && (
        <AppText
          preset={'PARAGRAPH_2R_12'}
          color={'red'}
          tx={`* ${error}`}
          style={{
            marginLeft: Metrics.rfv(24),
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  textFiledStyle: {
    height: '100%',
    width: '100%',
    //padding: 10,
    paddingLeft: Metrics.rfv(20),
    paddingRight: Metrics.rfv(20),
  },
  viewStyle: {
    height: Metrics.rfv(44),
    width: '100%',
    borderRadius: Metrics.rfv(6),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.white,
    borderColor: '#939393',
    borderWidth:1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
});

export default AppTextFieldPassword;
