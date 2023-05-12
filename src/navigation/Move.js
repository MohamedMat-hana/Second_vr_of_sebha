import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Note from '../screens/note';
import Video from '../screens/Video';
import Quran from '../screens/Quran';
import ELsharawy from '../screens/ELsharawy';
import Wep from '../screens/Wep';

// import {PhotographerProfile} from '../screens/PhotographerProfile';

const Stack = createNativeStackNavigator();

function Move() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Video">
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="Quran" component={Quran} />
      <Stack.Screen name="ELsharawy" component={ELsharawy} />
      <Stack.Screen name="Wep" component={Wep} />

      {/* <Stack.Screen
        name="PhotographerProfile"
        component={PhotographerProfile}
      /> */}
    </Stack.Navigator>
  );
}

export default Move;
