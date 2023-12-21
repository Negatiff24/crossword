import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { getAccData } from '../db/accData';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  alignItems: center;
  background-color: #fff;
`;

const LogoImg = styled.Image`
  width: 200px;
  height: 200px;
  resize-mode: contain;
`;

const LogoName = styled.Text`
  ${'' /* font-family: 'Montserrat-SemiBold'; */}
  fontSize: 24px;
  fontWeight: 500;
  letterSpacing: 2.16px;
  position: absolute;
  bottom: 40px;
`;

export default function Splash({ navigation }) {
  // const [isFontLoaded, setIsFontLoaded] = useState(false);
  
  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
  //   });
  //   setIsFontLoaded(true);
  // };
  
  useEffect(() => {  
    const checkUser = async () => {
      try {
        // await loadFonts();
        const accData = await getAccData();

        if (accData && accData.username && accData.password) {
          navigation.replace('Main');
        } else {
          navigation.replace('SignUp');
        }
      } catch (error) {
        console.error('Ошибка при проверке пользователя:', error.message);
        navigation.replace('SignUp');
      }
    };

    const timer = setTimeout(() => {
      checkUser();
    }, 3000);

    // loadFonts();

    return () => clearTimeout(timer);
  }, [navigation]);

  // if (!isFontLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <Container>
      <LogoImg source={require('../assets/crosso.png')} />
      <LogoName>crosso</LogoName>
    </Container>
  );
};