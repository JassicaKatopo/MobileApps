/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Setting = ({height}) => {
  return <View style={styles.gap(height)} />;
};

export default Setting;

const styles = StyleSheet.create({
  Setting: height => ({
    height: height,
  }),
});
