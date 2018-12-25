/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import scorePassword from '../utils/score-password';
import calculateLevel from '../utils/calculate-level';

// Style
import style from '../style';

// eslint-disable-next-line react/prefer-stateless-function
class TextPasswordStrengthDisplay extends Component {
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
      labelStyle,
    } = this.props;
    const score = scorePassword(password, minLength, scoreLimit, variations);
    const { label, labelColor } = calculateLevel(score, levels);

    return (
      <View style={[style.wrapper, wrapperStyle]}>
        {labelVisible && (touched || score !== 0)
          ? <Text style={[style.label, labelStyle, { color: labelColor }]}>{label}</Text>
          : null
        }
      </View>
    );
  }
}

TextPasswordStrengthDisplay.defaultProps = {
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
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  labelStyle: {},
};

TextPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  scoreLimit: PropTypes.number,
  variations: PropTypes.object,
  minLength: PropTypes.string,
  labelVisible: PropTypes.bool,
  levels: PropTypes.array,
  wrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

export default TextPasswordStrengthDisplay;
