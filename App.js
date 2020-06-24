import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/pages/home/home';
import profileScreen from './src/pages/settings/settings';

const Tab = createMaterialBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Home" activeColor="#ffffff" inactiveColor="#3e2465" barStyle={styles.TabNavigator}>
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
  </NavigationContainer>
);

const styles = StyleSheet.create({
  TabNavigator: {
    backgroundColor: '#61DAFB',
  },
});
