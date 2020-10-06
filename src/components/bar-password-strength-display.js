/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
import React, { Component } from 'react';
import {
  View, Animated, Text,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import scorePassword from '../utils/score-password';
import calculateAbsoluteWidth from '../utils/calculate-absolute-width';
import calculateLevel from '../utils/calculate-level';

// Style
import style from '../style';
import { BAR_PASSWORD_STRENGTH_DISPLAY } from '../constants';

class BarPasswordStrengthDisplay extends Component {
  constructor(props) {
    super(props);
    this.animatedBarWidth = new Animated.Value(0);
  }

  render() {
    const {
      password,
      touched,
      scoreLimit,
      variations,
      minLength,
      labelVisible,
      levels,
      wrapperStyle,
      barContainerStyle,
      barStyle,
      labelStyle,
      barColor,
      width,
    } = this.props;
    const score = scorePassword(password, minLength, scoreLimit, variations);
    const absoluteWidth = calculateAbsoluteWidth(score, width);
    const { label, labelColor, activeBarColor } = calculateLevel(score, levels);

    Animated.timing(this.animatedBarWidth, {
      toValue: absoluteWidth,
      duration: 700,
      useNativeDriver: false
    }).start();
    return (
      <View style={[style.wrapper, wrapperStyle]}>
        <View style={[style.barContainer, barContainerStyle, { backgroundColor: barColor, width }]}>
          <Animated.View
            style={[
              style.bar,
              barStyle,
              { width: this.animatedBarWidth, backgroundColor: activeBarColor },
            ]}
          />
        </View>
        {labelVisible && (touched || score !== 0)
          ? <Text style={[style.label, labelStyle, { color: labelColor }]}>{label}</Text>
          : null
        }
      </View>
    );
  }
}

BarPasswordStrengthDisplay.defaultProps = BAR_PASSWORD_STRENGTH_DISPLAY;

BarPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  scoreLimit: PropTypes.number,
  variations: PropTypes.object,
  minLength: PropTypes.number,
  labelVisible: PropTypes.bool,
  levels: PropTypes.array,
  wrapperStyle: PropTypes.object,
  barContainerStyle: PropTypes.object,
  barStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  barColor: PropTypes.string,
  width: PropTypes.number,
};

export default BarPasswordStrengthDisplay;
