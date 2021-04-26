/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../components/Atoms/TextInput';
import Setting from '../../components/Atoms/Setting';
import ButtonSatu from '../../components/Atoms/ButtonSatu';
import ButtonDua from '../../components/Atoms/ButtonDua';

const SignInInto = () => {
  return (
  <View>
    <Text>Sign In Pages</Text>
  </View>
  );
};

export default SignInInto;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 33,
  },
});
