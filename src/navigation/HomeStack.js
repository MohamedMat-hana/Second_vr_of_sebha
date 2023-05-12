import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../constants';
import { Sabah, Doaa, Hades, Azkar, Option } from '../screens/index';
const Tab = createMaterialBottomTabNavigator();

export default HomeStack = () => {

  return (
    <Tab.Navigator
      inactiveColor={COLORS.blackModal}
      activeColor={COLORS.white}
      barStyle={{ backgroundColor: COLORS.background }}
      initialRouteName={"سبح"}
    >
      <Tab.Screen
        name="الادعيه"
        component={Doaa}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <FontAwesome5 name="hands" size={20} color={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="الاحاديث النبويه"
        component={Hades}
        options={{
          // tabBarColor: COLORS.Yellow,
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Ionicons name="moon" color={color} size={20} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="سبح"
        component={Sabah}
        options={{
          // tabBarColor: COLORS.background,
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <FontAwesome5 name="ussunnah" color={color} size={24} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="الأذكار"
        component={Azkar}
        options={{
          // tabBarColor: '#bbbb',
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <FontAwesome5 name="pray" color={color} size={20} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="منوعات"
        component={Option}
        options={{
          // tabBarColor: '#bbbb',
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Ionicons name="options-outline" color={color} size={20} />
              </View>
            );
          },
        }}
      />

    </Tab.Navigator>
  );
};
