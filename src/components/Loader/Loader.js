import React from 'react';
import {View, StyleSheet, ActivityIndicator, Modal} from 'react-native';
import {COLORS} from '../../constants';
import {AppText} from '../AppText/text';

export const Loader = props => {
  const {loading, info, ...attributes} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size={props.size || 'large'}
            color={props.color || COLORS.blue}
            animating={loading}
          />
          {info && (
            <AppText preset={'PARAGRAPH_1M_16'} color={'white'} tx={info} />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
