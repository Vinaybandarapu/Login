// @flow
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import {AppText} from '../../components';
import Metrics from '../../constants/metrics';
import Icon from 'react-native-vector-icons/AntDesign';
import {textPresets} from '../AppText/text.presets';

interface IProps {
  isVisible: boolean;
  message: string;
}

export const ErrorMessage = (props: IProps) => {
  const [isVisible, setVisible] = useState(null);

  useEffect(() => setVisible(props.isVisible), [props.isVisible]);
  const close = () => setVisible(false);
  return isVisible ? (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Icon
          name="exclamationcircle"
          style={{
            ...textPresets.HEADING_B_14,
            color: COLORS.white,
            fontSize: Metrics.rfv(22),
          }}
          size={Metrics.rfv(24)}
        />
        <View style={styles.messageContainer}>
          <AppText
            preset={'PARAGRAPH_2M_14'}
            style={[styles.message]}
            tx={props.message}
          />
        </View>
        <TouchableOpacity onPress={close}>
          <Icon
            name="close"
            style={{
              color: COLORS.white,
              fontSize: Metrics.rfv(20),
            }}
            size={Metrics.rfv(24)}
          />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: Metrics.rfv(20),
    paddingHorizontal: Metrics.rfv(24),
    width: '100%',
  },
  container: {
    width: '100%',
    backgroundColor: COLORS.red,
    padding: Metrics.rfv(15),
    borderRadius: Metrics.rfv(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.rfv(10),
  },
  messageContainer: {
    flex: 1,
    marginHorizontal: Metrics.rfv(15),
    //maxWidth: '80%',
  },
  message: {
    color: COLORS.white,
  },
});
