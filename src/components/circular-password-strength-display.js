/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
/* eslint no-unused-vars: "error" */
import React from 'react';
import PropTypes from 'prop-types';
import RNSpeedometer from 'react-native-speedometer';

// Utils
import scorePassword from '../utils/score-password';
import { CIRCULAR_PASSWORD_STRENGTH_DISPLAY } from '../constants';

function CircularPasswordStrengthDisplay({
  password,
  labelVisible,
  minLength,
  scoreLimit,
  variations,
  easeDuration,
  levels,
  needleImage,
  wrapperStyle,
  outerCircleStyle,
  imageWrapperStyle,
  imageStyle,
  innerCircleStyle,
  labelWrapperStyle,
  labelStyle,
  labelNoteStyle,
}) {
  const convertedLevels = labelVisible ? levels.map(level => ({
    ...level,
    name: level.label,
  })) : levels;

  const score = scorePassword(password, minLength, scoreLimit, variations);
  return (
    <RNSpeedometer
      value={score}
      labels={convertedLevels}
      maxValue={scoreLimit}
      easeDuration={easeDuration}
      needleImage={needleImage}
      wrapperStyle={wrapperStyle}
      outerCircleStyle={outerCircleStyle}
      imageWrapperStyle={imageWrapperStyle}
      imageStyle={imageStyle}
      innerCircleStyle={innerCircleStyle}
      labelWrapperStyle={labelWrapperStyle}
      labelStyle={labelStyle}
      labelNoteStyle={labelNoteStyle}
    />
  );
}

CircularPasswordStrengthDisplay.defaultProps = CIRCULAR_PASSWORD_STRENGTH_DISPLAY;

CircularPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  labelVisible: PropTypes.bool,
  minLength: PropTypes.number,
  variations: PropTypes.object,
  scoreLimit: PropTypes.number,
  easeDuration: PropTypes.number,
  levels: PropTypes.array,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object,
  needleImage: PropTypes.string,
};

export default CircularPasswordStrengthDisplay;
