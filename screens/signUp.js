import React, { useState, useEffect } from 'react';
import { StatusBar, View, Text, TextInput, TouchableOpacity, Image, Vibration } from 'react-native';
import styled from 'styled-components/native';
import { setAccData } from '../db/accData';

const LogoImg = styled.Image`
  width: 70px;
  height: 70px;
  resize-mode: contain;
  marginTop: 90px;
  marginBottom: 75px;
`;

const InputCage = styled.View`
  width: 88%;
  height: 55px;
  flexDirection: row;
  justifyContent: space-between;
  backgroundColor: #FFF;
  borderRadius: 8px;
  paddingLeft: 12px;
  paddingRight: 12px;
  marginBottom: 20px;
  alignItems: center;
  border-width: 1px;
  border-color: ${props => (props.isEmpty ? '#D93511' : props.theme.GreyFill || '#B8B8B8')};
`;

const InputImg = styled.Image`
  height: 18px;
  width: 18px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 90%;
`;

const SignUpButton = styled.TouchableOpacity`
  background: #6A5EFB;;
  marginTop: 50px;
  width: 88%;
  height: 55px;
  borderRadius: 8px;
  alignItems: center;
  justifyContent: center;
`;

const SignUpText = styled.Text`
  color: #FFF;
  fontSize: 20px;
  fontWeight: 500;
`;

export default function SignUp(props) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSignUp = async () => {
    try {
      if (!nickname || !password) {
        Vibration.vibrate();
        setIsEmpty(true);
        return;
      }

      const accData = {
        nickname,
        password,
      };

      await setAccData(accData);
  
      // Переход на основной экран после успешной регистрации
      props.navigation.replace('Main');
    } catch (error) {
      console.error('Ошибка при сохранении данных:', error.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F6FD', alignItems: 'center' }}>
      <LogoImg source={require('../assets/crosso.png')} />
      <InputCage isEmpty={isEmpty}>
        <InputImg source={require('../assets/user-profile-04.png')}/>
        <Input
          placeholder="Имя пользователя"
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />
      </InputCage>
      <InputCage isEmpty={isEmpty}>
        <InputImg source={require('../assets/key.png')}/>
        <Input
          placeholder="Пароль"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </InputCage>
      <SignUpButton onPress={handleSignUp}>
        <SignUpText>Войти</SignUpText>
      </SignUpButton>
      <StatusBar theme="auto" />
    </View>
  );
};
