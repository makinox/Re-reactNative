import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../pages/main/main';
import profileScreen from '../../pages/profile/profile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={profileScreen} />
    </Tab.Navigator>
  );
}
