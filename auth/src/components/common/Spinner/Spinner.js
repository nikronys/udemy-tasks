import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
}

const styles= StyleSheet.create({
  spinnerStyle: {
    height: 20,
    flex: 1,
    justifyContent: 'center',
    marginTop: 30
  }})

export { Spinner };
