import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import Move from './Move';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Intro">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Move" component={Move} />
    </Stack.Navigator>
  );
}

export default Navigation;
