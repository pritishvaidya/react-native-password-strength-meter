/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
import React, { Component } from 'react';
import {
  TextInput, View, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import BarPasswordStrengthDisplay from './components/bar-password-strength-display';
import BoxPasswordStrengthDisplay from './components/box-password-strength-display';
import TextPasswordStrengthDisplay from './components/text-password-strength-display';
import CircularPasswordStrengthDisplay from './components/circular-password-strength-display';

// Utils
import isReactComponent from './utils/check-react-component';
import scorePassword from './utils/score-password';
import calculateLevel from './utils/calculate-level';

// Styles
import style from './style';
import { PASSWORD_INPUT } from './constants';

class PasswordInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: props.defaultPassword,
      placeholderVisible: props.defaultPassword.length === 0,
      secureTextEntry: props.inputProps.secureTextEntry,
    };
  }

  change = (password) => {
    const {
      onChangeText,
      passwordProps: {
        levels = PASSWORD_INPUT.passwordProps.levels,
        minLength = PASSWORD_INPUT.passwordProps.minLength,
        scoreLimit = PASSWORD_INPUT.passwordProps.scoreLimit,
      },
    } = this.props;
    console.log({ levels, minLength, scoreLimit });
    const score = scorePassword(password, minLength, scoreLimit);
    const { label, labelColor, activeBarColor } = calculateLevel(score, levels);
    this.setState({
      password,
      placeholderVisible: password.length === 0,
    }, () => onChangeText(password, score, { label, labelColor, activeBarColor }));
  }

  toggleSecureText = () => {
    this.setState(prevState => ({ ...prevState, secureTextEntry: !prevState.secureTextEntry }));
  }

  render() {
    const {
      containerWrapperStyle,
      inputWrapperStyle,
      imageWrapperStyle,
      imageStyle,
      inputStyle,
      placeholderStyle,
      meterType,
      inputProps,
      passwordProps,
    } = this.props;
    const { password, placeholderVisible, secureTextEntry } = this.state;
    const image = secureTextEntry ? require('./images/eye-visible.png') : require('./images/eye-invisible.png');
    let PasswordComponent;
    if (isReactComponent(meterType)) {
      PasswordComponent = meterType;
    } else if (meterType === 'bar') {
      PasswordComponent = BarPasswordStrengthDisplay;
    } else if (meterType === 'box') {
      PasswordComponent = BoxPasswordStrengthDisplay;
    } else if (meterType === 'circle') {
      PasswordComponent = CircularPasswordStrengthDisplay;
    } else {
      PasswordComponent = TextPasswordStrengthDisplay;
    }
    return (
      <View style={[style.containerWrapper, containerWrapperStyle]}>
        <View style={[style.inputWrapper, inputWrapperStyle]}>
          <TextInput
            {...inputProps}
            style={
              placeholderVisible
                ? [style.input, inputStyle, placeholderStyle]
                : [style.input, inputStyle]}
            value={password}
            onChangeText={this.change}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity
            style={[style.imageWrapper, imageWrapperStyle]}
            onPress={this.toggleSecureText}
          >
            <Image style={[style.image, imageStyle]} source={image} />
          </TouchableOpacity>
        </View>
        <PasswordComponent password={password} {...passwordProps} />
      </View>
    );
  }
}
PasswordInputComponent.defaultProps = PASSWORD_INPUT;

PasswordInputComponent.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  defaultPassword: PropTypes.string,
  containerWrapperStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  inputWrapperStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  placeholderStyle: PropTypes.object,
  meterType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  inputProps: PropTypes.object,
  passwordProps: PropTypes.object,
};

export default PasswordInputComponent;
export {
  BarPasswordStrengthDisplay,
  BoxPasswordStrengthDisplay,
  TextPasswordStrengthDisplay,
  CircularPasswordStrengthDisplay,
};
