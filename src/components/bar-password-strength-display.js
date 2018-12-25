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
import style, { width as deviceWidth } from '../style';

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

BarPasswordStrengthDisplay.defaultProps = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  barContainerStyle: {},
  barStyle: {},
  labelStyle: {},
  barColor: '#f1f3f4',
  width: deviceWidth - 20,
};

BarPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  scoreLimit: PropTypes.number,
  variations: PropTypes.object,
  minLength: PropTypes.string,
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
