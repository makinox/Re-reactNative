import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/pages/home/home';
import profileScreen from './src/pages/settings/settings';

const Tab = createMaterialBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default () => (
  <NavigationContainer>
    <PaperProvider theme={theme}>
      <Tab.Navigator initialRouteName="Home" activeColor="#ffffff" inactiveColor="#3e2465" barStyle={styles.TabNavigator}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size = 20}) => <MaterialCommunityIcons name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={profileScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size = 20}) => <MaterialCommunityIcons name="bell" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  TabNavigator: {
    backgroundColor: '#61DAFB',
  },
});
