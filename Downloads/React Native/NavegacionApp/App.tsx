import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  return (
    <NavigationContainer>
      <Text>Navegacion App</Text>
    </NavigationContainer>
  )
}

export default App;
