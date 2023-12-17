import { StatusBar, TextInput, TouchableOpacity, Text, Image, View, Alert } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Title = styled.Text`
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
`;

const Inputs = styled.View`
  height: 300px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 90px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border-width: 1px;
  border-radius: 25px;
  text-align: center;
`;

const CreateButton = styled.TouchableOpacity`
  width: 90%;
  height: 100px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

const CreateButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

export default function Create(props) {
  const main = () => props.navigation.navigate("Main")

  return (
    <View style={{ flex: 1 }}>
      <Title>Укажите название, сложность и тд</Title>
      <Inputs>
        <Input placeholder='Название' />
        <Input placeholder='Имя' />
        <Input placeholder='Сложность' />
        <Input placeholder='Рейтинг' />
      </Inputs>
      <CreateButton onPress={() => {main(); Alert.alert('типо создал')}}>
        <CreateButtonText>СОЗДАТЬ</CreateButtonText>
      </CreateButton>
      <StatusBar theme="auto" />
    </View>
  );
}