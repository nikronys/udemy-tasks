import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner,
} from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password, loginUser } = this.props;

    loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = ({ auth }) => {
  const {
    email, password, error, loading,
  } = auth;

  return {
    email, password, error, loading,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
