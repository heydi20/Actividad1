import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import InputComponent from '../component/InputComponent';

 const DivisionScreen = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleDivide = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Por favor ingrese números válidos.');
      return;
    }

    if (n1 === 0 && n2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (n2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((n1 / n2).toString());
    }
  };

  return (
    <View style={styles.container}>
      <InputComponent placeholder="Campo número 1" value={num1} onChangeText={setNum1} />
      <InputComponent placeholder="Campo número 2" value={num2} onChangeText={setNum2} />
      <Button color={'purple'} title="Dividir" onPress={handleDivide} />
      {result !== '' && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'#fedfe3'
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DivisionScreen;
