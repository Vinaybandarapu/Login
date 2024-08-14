import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Common } from '../../assets';

import { APPLICATION_STYLES, COLORS } from '../../constants';
import Metrics from '../../constants/metrics';
import { AppText } from '../AppText/text';

const getInitialDate = () => {
  const dt = new Date();
  dt.setFullYear(dt.getFullYear() - 18);
  return new Date(dt);
};

export const AppDateTimePicker = props => {
  const {
    icon,
    placeholder,
    date,
    maximumDate,
    mode,
    onDateSelected,
    error,
    title,
    containerStyle,
    viewStyle,
    selectedDate,
    minimumDate,
  } = props;
  const [isPickerVisible, setPickerVisible] = useState(false);

  const showDateTimePicker = () => {
    setPickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setPickerVisible(false);
  };

  const handleDatePicked = date => {
    console.log('A date has been picked: ', date);
    hideDateTimePicker();
    //onDateSelected(date);
    onDateSelected(date);
  };

  return (
    <>
      <View
        style={[
          {
            padding: Metrics.rfv(20),
            paddingVertical: Metrics.rfv(10),
          },
          { ...containerStyle },
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
              marginTop: Metrics.rfv(10),
            }}></AppText>
        )}
        <View style={[{ ...styles.viewStyle }, { ...viewStyle }]}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={showDateTimePicker}>
            <AppText
              preset={'HEADING_B_14'}
              color={selectedDate ? 'black' : 'gray'}
              tx={selectedDate ? selectedDate : placeholder}
              style={{
                fontWeight: 'bold',
                marginLeft: Metrics.rfv(14),
                flex: 1,
              }}></AppText>

            <TouchableOpacity
              style={[
                styles.centerView,
                {
                  width: Metrics.rfv(40),
                  height: Metrics.rfv(44),
                  marginRight: Metrics.rfv(14),
                },
              ]}
              onPress={showDateTimePicker}>
              <Icon
                name={icon || 'calendar-alt'}
                color={COLORS.gray}
                size={Metrics.rfv(20)}
              />
            </TouchableOpacity>
          </TouchableOpacity>
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
      <DateTimePicker
        isVisible={isPickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
        is24Hour={false}
        mode={mode || 'date'}
        date={date || getInitialDate()}
        //minimumDate={new Date()}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  ...APPLICATION_STYLES,
  borderUnderline: {
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: COLORS.gray,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textFiledStyle: {
    height: '100%',
    //width: '100%',
    //padding: 10,
    paddingLeft: Metrics.rfv(20),
    paddingRight: Metrics.rfv(10),
  },
  viewStyle: {
    height: Metrics.rfv(44),
    width: '99%',
    alignSelf: 'center',
    borderRadius: Metrics.rfv(10),
    marginRight: 6,
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
