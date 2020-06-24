// import React from 'react';
// import Main from './src/pages/main/main';
// import Profile from './src/pages/profile/profile';
import BottomTab from './src/components/bottom-tab/bottom-tab';

// const App = () => <Main />;

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function MyStack() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Main} options={{title: 'Welcome'}} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
