/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonDua = ({label}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDua;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8D92A3',
    paddingVertical: 15,
    borderRadius: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '700',
  },
  Text: {
    fontFamily: 'Poppins - Medium',
  },
});
