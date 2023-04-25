import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from 'react-native-paper';

import TabNavigator from './TabNavigator';
import ChatSetting from '../Screens/ChatSetting';
import Chat from '../Screens/Chat';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ChatSetting" component={ChatSetting} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
