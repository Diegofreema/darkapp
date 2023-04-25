import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import { useCallback, useEffect, useState } from 'react/cjs/react.development';
import backgroundImage from '../assets/images/droplet.jpeg';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import color from '../constants/color';
import { Feather } from '@expo/vector-icons';
const Chat = ({ navigation }) => {
  const [messageText, setMessageText] = useState('');
  const sendMessage = useCallback(() => {
    setMessageText('');
  }, [messageText]);
  useEffect(() => {
    navigation.setOptions({
      title: '',
    });
  }, []);
  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'android' ? null : 100}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        ></ImageBackground>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.mediaContainer}>
            <AntDesign name="plus" size={24} color={color.blue} />
          </TouchableOpacity>
          <TextInput
            style={styles.textBox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />
          {messageText.trim().length < 1 ? (
            <TouchableOpacity style={styles.mediaContainer}>
              <AntDesign name="camera" size={24} color={color.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={sendMessage}
              style={{ ...styles.mediaContainer, ...styles.sendButton }}
            >
              <Feather name="send" size={20} color={'white'} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: color.lightGrey,
    paddingHorizontal: 15,
    marginHorizontal: 12,
  },
  mediaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
  },
  sendButton: {
    backgroundColor: color.blue,
    borderRadius: 15,
    width: 35,
    padding: 8,
  },
});
