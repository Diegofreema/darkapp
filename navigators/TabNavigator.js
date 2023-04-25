import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-paper';

import ChatList from '../Screens/ChatList';
import Settings from '../Screens/Settings';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: '',
      }}
    >
      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Avatar.Icon
                icon="chat"
                color={color}
                style={{ backgroundColor: 'transparent' }}
                size={45}
              />
            ) : (
              <Avatar.Icon
                icon="chat-outline"
                color="black"
                style={{ backgroundColor: 'transparent' }}
                size={45}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Avatar.Icon
                icon="cog"
                color={color}
                style={{ backgroundColor: 'transparent' }}
                size={45}
              />
            ) : (
              <Avatar.Icon
                icon="cog-outline"
                color="black"
                style={{ backgroundColor: 'transparent' }}
                size={45}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
