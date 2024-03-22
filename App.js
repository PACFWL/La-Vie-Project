import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home.jsx';
import Navigation from './src/components/navigation/navigation.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Navigation" component={Navigation} options={{ title: 'Navigation' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
