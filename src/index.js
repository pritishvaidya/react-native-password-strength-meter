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

// Utils
import isReactComponent from './utils/check-react-component';
import scorePassword from './utils/score-password';
import calculateLevel from './utils/calculate-level';

// Styles
import style from './style';

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
    const { onChangeText, passwordProps: { levels, minLength, scoreLimit } } = this.props;
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
    } else {
      PasswordComponent = TextPasswordStrengthDisplay;
    }
    return (
      <View style={[style.containerWrapper, containerWrapperStyle]}>
        <View style={[style.inputWrapper, inputWrapperStyle]}>
          <TextInput
            style={
              placeholderVisible
                ? [style.input, inputStyle, placeholderStyle]
                : [style.input, inputStyle]}
            value={password}
            onChangeText={this.change}
            secureTextEntry={secureTextEntry}
            {...inputProps}
          />
          <TouchableOpacity style={[style.imageWrapper]} onPress={this.toggleSecureText}>
            <Image style={[style.image]} source={image} />
          </TouchableOpacity>
        </View>
        <PasswordComponent password={password} {...passwordProps} />
      </View>
    );
  }
}
PasswordInputComponent.defaultProps = {
  defaultPassword: '',
  containerWrapperStyle: {},
  inputWrapperStyle: {},
  inputStyle: {},
  placeholderStyle: {},
  meterType: 'bar',
  inputProps: {
    placeholder: 'Password',
    secureTextEntry: true,
  },
  passwordProps: {
    scoreLimit: 100,
    minLength: 5,
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
  },
};

PasswordInputComponent.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  defaultPassword: PropTypes.string,
  containerWrapperStyle: PropTypes.object,
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
export { BarPasswordStrengthDisplay, BoxPasswordStrengthDisplay, TextPasswordStrengthDisplay };
