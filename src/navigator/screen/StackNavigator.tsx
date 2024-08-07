import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DivisionScreen from './DivisionScreen';


export type RootStackParamList = {
  Home: undefined;
  Division: undefined;
};


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Division" component={DivisionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
