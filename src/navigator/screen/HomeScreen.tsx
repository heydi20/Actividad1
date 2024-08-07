import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image source={{uri:'https://as01.epimg.net/meristation/imagenes/2019/07/01/betech/1561973633_476827_1561973908_noticia_normal_recorte1.jpg'}} style={styles.image} />
      <Button color={'purple'} title="Acceder" onPress={() => navigation.navigate('Division')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fedfe3'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button:{
    backgroundColor:'pink'
  }
});

export default HomeScreen;
