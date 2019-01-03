import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import RNPasswordStrengthMeter, {
  BarPasswordStrengthDisplay,
  BoxPasswordStrengthDisplay,
  CircularPasswordStrengthDisplay,
  TextPasswordStrengthDisplay,
} from 'react-native-password-strength-meter';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    height: 25,
    fontSize: 16,
    marginVertical: 50,
    marginHorizontal: 20,
  },
});

class PasswordInputBar extends Component {
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="bar"
        />
      </View>
    );
  }
}

class PasswordInputBox extends Component {
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="box"
        />
      </View>
    );
  }
}

class PasswordInputCircle extends Component {
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="circle"
        />
      </View>
    );
  }
}

class PasswordInputText extends Component {
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="text"
        />
      </View>
    );
  }
}

class BarComponent extends Component {
  state = {
    password: '',
  }

  onChange = password => this.setState({ password })

  render() {
    const { password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.onChange} />
        <BarPasswordStrengthDisplay
          password={password}
        />
      </View>
    );
  }
}

class BoxComponent extends Component {
  state = {
    password: '',
  }

  onChange = password => this.setState({ password })

  render() {
    const { password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.onChange} />
        <BoxPasswordStrengthDisplay
          password={password}
        />
      </View>
    );
  }
}

class TextComponent extends Component {
  state = {
    password: '',
  }

  onChange = password => this.setState({ password })

  render() {
    const { password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.onChange} />
        <TextPasswordStrengthDisplay
          password={password}
        />
      </View>
    );
  }
}

class CircleComponent extends Component {
  state = {
    password: '',
  }

  onChange = password => this.setState({ password })

  render() {
    const { password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.onChange} />
        <CircularPasswordStrengthDisplay
          password={password}
        />
      </View>
    );
  }
}

export default class App extends Component {
  onChange = (password, score, { label, labelColor, activeBarColor }) => {
    console.log(password, score, { label, labelColor, activeBarColor });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="text"
        />
      </View>
    );
  }
}
