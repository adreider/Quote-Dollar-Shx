import React from 'react';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#09738a',
          paddingTop:5,
          borderTopColor: '#000',
          paddingBottom: 5,
        },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen name='início' component={Home} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name='home' size={size} color={color} />
        ),
        headerStyle: {
          backgroundColor: '#09738a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
      <Tab.Screen name='Pesquisar Cotação' component={Search} options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="search" size={size} color={color} />
        ),
        headerStyle: {
          backgroundColor: '#09738a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}

      />
    </Tab.Navigator>
  )


}