import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {Input} from 'react-native-elements';
import Metrics from '../../constants/metrics';
import {COLORS, FONTS, FONT_SIZE} from '../../constants';
import {AppText} from '../AppText/text';

const AppTextField = props => {
  let {
    value,
    changeText,
    placeHolder,
    containerStyle,
    textFiledStyle,
    viewStyle,
    multiline,
    inputStyle,
    keyboardType,
    maxLength,
    touched,
    error,
    title,
    disabled,
  } = props;
  return (
    <>
      <View
        style={[
          {
            padding: Metrics.rfv(20),
            paddingVertical: Metrics.rfv(10),
          },
          {...containerStyle},
        ]}>
        {title && (
          <AppText
            preset={'HEADING_B_14'}
            color={'#000000'}
            tx={title}
            style={{
              fontWeight: 'bold',
              marginLeft: Metrics.rfv(4),
              marginBottom: Metrics.rfv(4),
            }}></AppText>
        )}
        <View style={[{...styles.viewStyle}, {...viewStyle}]}>
          <Input
            {...props}
            containerStyle={[styles.textFiledStyle, {...textFiledStyle}]}
            contextMenuHidden={true}
            inputContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0,
              borderBottomWidth: 0,
            }}
            inputStyle={[
              {
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: Metrics.rfv(2),
                color: 'black',
                fontSize: FONT_SIZE.medium,
                textAlignVertical: 'center',
                fontFamily: FONTS.primaryFont,
              },
              {...inputStyle},
            ]}
            defaultValue={value}
            placeholder={placeHolder}
            value={value}
            onChangeText={text => {
              changeText(text);
            }}
            disabled={disabled ? disabled : false}
            placeholderTextColor={COLORS.gray}
            multiline={multiline ? true : false}
            keyboardType={keyboardType ? keyboardType : 'default'}
            maxLength={maxLength}
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

//
const styles = StyleSheet.create({
  textFiledStyle: {
    height: '100%',
    //width: '100%',
    //padding: 10,
    paddingLeft: Metrics.rfv(20),
    paddingRight: Metrics.rfv(10),
  },
  viewStyle: {
    height: Metrics.rfv(44),
    // width: '100%',
    borderRadius: Metrics.rfv(6),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.white,
    borderColor: '#939393',
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5,
  },
});

export default AppTextField;
