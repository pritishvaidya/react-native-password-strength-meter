/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
/* eslint no-unused-vars: "error" */
import React, { Component } from 'react';
import {
  View, Animated, Text,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import scorePassword from '../utils/score-password';
import calculateLevel from '../utils/calculate-level';
import calculateLevelWidth from '../utils/calculate-level-width';

// Style
import style, { width as deviceWidth } from '../style';

class BoxPasswordStrengthDisplay extends Component {
  constructor(props) {
    super(props);
    this.animatedBoxWidths = props.levels.map(() => new Animated.Value(0));
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
      boxContainerStyle,
      boxStyle,
      labelStyle,
      boxColor,
      width,
      boxSpacing,
    } = this.props;
    const score = scorePassword(password, minLength, scoreLimit, variations);
    const { label, labelColor, activeBarColor } = calculateLevel(score, levels);
    const levelWidth = calculateLevelWidth(width, levels, boxSpacing);
    const currentLevelIndex = levels.findIndex(level => level.label === label);
    return (
      <View style={[style.wrapper, wrapperStyle]}>
        <View style={[style.boxContainerWrapper]}>
          {levels.map((level, index) => {
            const currentAnimatedBoxWidth = this.animatedBoxWidths[index];
            if (currentLevelIndex >= index && score !== 0) {
              Animated.timing(currentAnimatedBoxWidth, {
                toValue: levelWidth,
                duration: 700,
              }).start();
            } else {
              Animated.timing(currentAnimatedBoxWidth, {
                toValue: 0,
                duration: 700,
              }).start();
            }
            return (
              <View
                style={[style.boxContainer,
                  boxContainerStyle,
                  { backgroundColor: boxColor, width: levelWidth, marginHorizontal: boxSpacing },
                ]}
              >
                <Animated.View
                  style={[
                    style.box,
                    boxStyle,
                    { width: currentAnimatedBoxWidth, backgroundColor: activeBarColor },
                  ]}
                />
              </View>
            );
          })}
        </View>

        {labelVisible && (touched || score !== 0)
          ? <Text style={[style.label, labelStyle, { color: labelColor }]}>{label}</Text>
          : null
        }
      </View>
    );
  }
}

BoxPasswordStrengthDisplay.defaultProps = {
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
  boxContainerStyle: {},
  boxStyle: {},
  labelStyle: {},
  boxColor: '#f1f3f4',
  width: deviceWidth - 20,
  boxSpacing: 2,
};

BoxPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  scoreLimit: PropTypes.number,
  variations: PropTypes.object,
  minLength: PropTypes.string,
  labelVisible: PropTypes.bool,
  levels: PropTypes.array,
  wrapperStyle: PropTypes.object,
  boxContainerStyle: PropTypes.object,
  boxStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  boxColor: PropTypes.string,
  width: PropTypes.number,
  boxSpacing: PropTypes.number,
};

export default BoxPasswordStrengthDisplay;
