import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

const InputComponent = (props:Props) => {
  return <TextInput style={styles.input} keyboardType="numeric" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor:'#f1f4f5'
  },
});

export default InputComponent;
