import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../pages/main/main';
import profileScreen from '../../pages/profile/profile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={profileScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="bell" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
