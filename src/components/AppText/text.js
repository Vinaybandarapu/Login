import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {textPresets} from './text.presets';
import {COLORS} from '../../constants/colors';
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function AppText(props) {
  // grab the props
  const {
    preset = 'PARAGRAPH_1R_16',
    color = 'darkBlue',
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    numberOfLines,
    ...rest
  } = props;

  // figure out which content to use
  const i18nText = tx;
  const content = i18nText || text || children;
  if (!content) return null;

  const style = [textPresets[preset], {color: COLORS[color]}, styleOverride];

  return (
    <ReactNativeText
      numberOfLines={numberOfLines}
      {...rest}
      style={style}
      allowFontScaling={false}>
      {content}
    </ReactNativeText>
  );
}
