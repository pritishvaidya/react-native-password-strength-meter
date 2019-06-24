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
import style from '../style';
import { BOX_PASSWORD_STRENGTH_DISPLAY } from '../constants';

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
                key={level.label}
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

BoxPasswordStrengthDisplay.defaultProps = BOX_PASSWORD_STRENGTH_DISPLAY;

BoxPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  scoreLimit: PropTypes.number,
  variations: PropTypes.object,
  minLength: PropTypes.number,
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
