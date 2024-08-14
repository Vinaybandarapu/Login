import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Metrics from '../../constants/metrics';
import {Table, Row} from 'react-native-table-component';
import {APPLICATION_STYLES, COLORS} from '../../constants';
import {textPresets} from '../AppText/text.presets';
import {AppText} from '../AppText/text';
import Icon from 'react-native-vector-icons/Ionicons';

export const TableRowItem = ({
  rowIndex,
  colIndex,
  label,
  onPress,
  type = 'text',
  icon,
  iconColor = COLORS.blue,
  icons = [],
  colors = [],
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        type == 'icons' && {flexDirection: 'row'},
      ]}
      onPress={type == 'icons' ? null : () => onPress(rowIndex, colIndex)}>
      {type == 'text' && (
        <AppText
          preset={'PARAGRAPH_2R_14'}
          color={'blue'}
          tx={label}
          style={{textAlign: 'center'}}></AppText>
      )}
      {type == 'icon' && (
        <Icon name={icon} size={Metrics.rfv(24)} color={iconColor} />
      )}
      {type == 'icons' &&
        icons.map((icon, i) => (
          <Icon
            key={`${i + 1}`}
            name={icon}
            size={Metrics.rfv(24)}
            color={colors[i]}
            onPress={() => {
              onPress(rowIndex, colIndex, i);
            }}
            style={{
              paddingHorizontal: Metrics.rfv(4),
            }}
          />
        ))}
    </TouchableOpacity>
  );
};

export const AppTable = props => {
  let {containerStyle, tableHeaders, widthArr, tableData, title} = props;

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
          <View
            style={{
              backgroundColor: COLORS.themeColor1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: Metrics.rfv(8),
            }}>
            <AppText preset={'PARAGRAPH_1M_16'} color={'white'} tx={title} />
          </View>
        )}
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={{marginBottom: Metrics.rfv(20)}}>
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor: COLORS.tableBorderColor,
              }}>
              <Row
                data={tableHeaders}
                widthArr={widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table
                style={{}}
                borderStyle={{
                  borderWidth: 1,
                  borderColor: COLORS.tableBorderColor,
                }}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: COLORS.mainBG},
                    ]}
                    textStyle={styles.textRow}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ...APPLICATION_STYLES,
  container: {
    flex: 1,
    padding: Metrics.rfv(8),
    paddingTop: Metrics.rfv(10),
    backgroundColor: COLORS.white,
  },
  header: {height: Metrics.rfv(50), backgroundColor: COLORS.blue},
  text: {
    textAlign: 'center',
    color: COLORS.white,
    ...textPresets.PARAGRAPH_2M_14,
  },
  textRow: {
    textAlign: 'center',
    marginTop: Metrics.rfv(5),
    color: COLORS.black,
    ...textPresets.PARAGRAPH_2R_14,
  },
  dataWrapper: {marginTop: -1},
  row: {backgroundColor: COLORS.lightGray, paddingBottom: Metrics.rfv(10)},
  btn: {width: Metrics.rfv(30), height: Metrics.rfv(30), borderRadius: 2},
  btnText: {textAlign: 'center', color: COLORS.white},
});
