import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Platform} from 'react-native';
import Metrics from '../../constants/metrics';
import {AppText} from '../AppText/text';
import {COLORS, FONT_SIZE} from '../../constants';
import {textPresets} from '../AppText/text.presets';

const AppDropDown = props => {
  let {
    value,
    changeText,
    containerStyle,
    textFiledStyle,
    viewStyle,
    multiline,
    inputStyle,
    keyboardType,
    maxLength,
    inputContainerStyle,
    label,
    items,
    placeholder,
    error,
    disabled = false,
    onBlur = () => {}
  } = props;
  items = items.map((item, index) => {
    return {
      ...item,
      key: index + 1,
    };
  });
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
        {label && (
          <AppText
            preset={'HEADING_B_14'}
            color={'#000000'}
            tx={label}
            style={{
              fontWeight: 'bold',
              marginLeft: Metrics.rfv(4),
              marginBottom: Metrics.rfv(4),
              marginTop: Metrics.rfv(4),
            }}></AppText>
        )}

        <View style={[{...styles.viewStyle}, {...viewStyle}]}>
          <RNPickerSelect
            onValueChange={value => changeText(value)}
            items={items || []}
            style={{
              inputIOS: {
                ...textPresets.HEADING_B_14,
                fontSize: FONT_SIZE.medium,
                color: 'black',
                margin: Metrics.rfv(14),
                marginTop: Metrics.rfv(16),
                alignItems: 'center',
                lineHeight: Metrics.rfv(0),
                letterSpacing: Metrics.rfv(0.270833),
                opacity: disabled ? 0.5 : 1,
              },
              inputAndroid: {
                ...textPresets.HEADING_B_14,
                fontSize: FONT_SIZE.medium,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                lineHeight: Metrics.rfv(0),
                letterSpacing: Metrics.rfv(0.270833),
                opacity: disabled ? 0.5 : 1,
              },
              placeholder: {
                color: COLORS.gray,
                ...textPresets.HEADING_B_14,
                lineHeight: Metrics.rfv(0),
                letterSpacing: Metrics.rfv(0.270833),
              },
            }}
            useNativeAndroidPickerStyle={true}
            Icon={() => (
              <Icon
                // name="sort-down"
                color={COLORS.gray}
                size={Metrics.rfv(20)}
                style={{
                  marginTop:
                    Platform.OS == 'android' ? Metrics.rfv(10) : Metrics.rfv(8),
                  marginRight: Metrics.rfv(10),
                }}
              />
            )}
            placeholder={{label: placeholder, value: placeholder}}
            value={value}
            disabled={disabled}
            onClose={onBlur}
          />
        </View>
      </View>
      {error && (
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
    borderRadius: Metrics.rfv(22),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.red,
    borderColor:'gray',
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

export default AppDropDown;
