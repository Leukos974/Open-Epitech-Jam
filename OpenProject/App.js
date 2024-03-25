import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './components/HomeScreen';
import { MapScreen } from './components/MapScreen';
import { SettingsScreen } from './components/Settings';
import { FeedScreen } from './components/FeedScreen';
import { Database } from './components/Database';
import { Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ApplicationCamera } from './components/Camera';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="globe" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name="Photo"
        component={ApplicationCamera}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-a-photo" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="comment-o" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
