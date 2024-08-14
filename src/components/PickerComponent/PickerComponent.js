import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {APPLICATION_STYLES, COLORS} from '../../constants';
import Metrics from '../../constants/metrics';
import {textPresets} from '../AppText/text.presets';
import {AppText} from '../AppText/text';

export const PickerComponent = props => {
  const {containerStyle, onItemChecked, item, key} = props;
  return (
    <View
      style={[
        {
          borderWidth: 0,
          borderColor: COLORS.lightGray,
          flexDirection: 'row',
          alignItems: 'center',
          margin: Metrics.rfv(6),
        },
        {...containerStyle},
        {...APPLICATION_STYLES.CARD},
        {...APPLICATION_STYLES.SHADOW_EFFECT},
      ]}
      key={key}>
      <AppText
        preset={'HEADING_B_14'}
        color={'text'}
        tx={`${item.answer_no}) `}
        style={{
          marginLeft: Metrics.rfv(8),
        }}></AppText>
      <CheckBox
        iconLeft
        containerStyle={{
          flex: 1,
          height: Metrics.rfv(40),
          backgroundColor: 'trasparent',
          borderWidth: 0,
          justifyContent: 'center',
          padding: Platform.OS == 'ios' ? 0 : Metrics.rfv(8),
        }}
        title={item.value}
        textStyle={{
          width: '70%',
          color: COLORS.black,
          ...textPresets.HEADING_B_14,
        }}
        checkedColor={COLORS.themeColor1}
        uncheckedColor={COLORS.gray}
        checked={item.isChecked}
        onPress={() => {
          onItemChecked(item, !item.isChecked);
        }}
      />
    </View>
  );
};
