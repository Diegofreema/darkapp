import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useEffect } from 'react/cjs/react.development';

const ChatList = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: '',
    });
  }, []);
  return (
    <View>
      <Text>ChatList</Text>
      <Button title="switch" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
