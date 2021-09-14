import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import Restaurantes from './Restaurantes';
import Turismo from './Turismo';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName="Pontos Essenciais"
      screenOptions={{
        tabBarActiveTintColor: '#04B4AE',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pontos Turísticos"
        component={Turismo}
        options={{
          tabBarLabel: 'Turismo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pontos Essenciais"
        component={Restaurantes}
        options={{
          tabBarLabel: 'Restaurantes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
