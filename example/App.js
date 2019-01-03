import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
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

export default class App extends Component {
  state = {
    password: '',
  }

  onChange = password => this.setState({ password })

  render() {
    const { password } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="bar"
          containerWrapperStyle={{ marginTop: 20 }}
        />
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="box"
          containerWrapperStyle={{ marginTop: 20 }}
        />
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="text"
          containerWrapperStyle={{ marginTop: 20 }}
        />
        <RNPasswordStrengthMeter
          onChangeText={this.onChange}
          meterType="circle"
          containerWrapperStyle={{ marginTop: 20 }}
        />

        <TextInput style={styles.textInput} onChangeText={this.onChange} />
        <BarPasswordStrengthDisplay
          password={password}
          wrapperStyle={{ marginTop: 30 }}
        />
        <BoxPasswordStrengthDisplay
          password={password}
          wrapperStyle={{ marginTop: 30 }}
        />
        <CircularPasswordStrengthDisplay
          password={password}
          wrapperStyle={{ marginTop: 30 }}
        />
        <TextPasswordStrengthDisplay
          password={password}
          wrapperStyle={{ marginTop: 30 }}
        />
      </ScrollView>
    );
  }
}
