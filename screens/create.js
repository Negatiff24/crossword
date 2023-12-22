import React, { useState } from 'react';
import { StatusBar, View, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

const ScrollTop = styled.ScrollView`
  width: 88%;
  flex: 0.81;
`;

const NameInput = styled.View`
  height: 50px;
  flexDirection: row;
  justifyContent: space-between;
  backgroundColor: #FFF;
  borderRadius: 40px;
  paddingLeft: 17px;
  paddingRight: 12px;
  marginTop: 40px;
  alignItems: center;
  borderWidth: 1px;
  borderColor: #B8B8B8;
`;

const NameInp = styled.TextInput`
  fontSize: 14px;
`;

const CheckCage = styled.View`
`;

const CheckCard = styled.View`
  flex-direction: row;
  align-items: center;
  marginTop: 23px;
`;

const CustomCheckBox = styled.TouchableOpacity`
  width: 17px;
  height: 17px;
  border: 1px solid #000000;
  margin-right: 10px;
  alignItems: center;
`;

const CustomCheckCircle = styled.TouchableOpacity`
  width: 17px;
  height: 17px;
  border: 1px solid #000000;
  borderRadius: 50px;
  margin-right: 10px;
  alignItems: center;
`;

const CheckText = styled.Text`
  fontSize: 13px;
`;

const CheckBtn = styled.TouchableOpacity`
  position: absolute;
  right: 0;
`;

const CheckImg = styled.Image``;

const CheckMark = styled.Text`
  color: #000000;
  fontSize: 12px;
`;

const PickZone = styled.TouchableOpacity`
  height: 50px;
  backgroundColor: #FFF;
  borderRadius: 40px;
  borderWidth: 1px;
  borderColor: #B8B8B8;
  justifyContent: center;
  marginTop: 16px;
`;

const InpArea = styled.View`
  width: 100%;
  alignItems: center;
`;

const InpCard = styled.View`
  width: 100%;
  alignItems: center;
`;

const InpC = styled.View`
  width: 100%;
  height: 50px;
  flexDirection: row;
  justifyContent: space-between;
  backgroundColor: #C4C4C480;
  borderRadius: 40px;
  paddingLeft: 17px;
  paddingRight: 12px;
  marginTop: 17px;
  alignItems: center;
`;

const InpQ = styled.TextInput`
  
`;

const InpA = styled.TextInput``;

const InpBtn = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flexDirection: row;
  justifyContent: space-between;
  backgroundColor: #C4C4C480;
  borderRadius: 40px;
  paddingLeft: 17px;
  paddingRight: 12px;
  marginTop: 17px;
  alignItems: center;
`;

const InpText = styled.Text`
  color: #00000065;
`;

const InpImg = styled.Image``;

const CreateBtn = styled.TouchableOpacity`
  background: #6A5EFB;;
  marginTop: 50px;
  width: 88%;
  height: 45px;
  borderRadius: 40px;
  alignItems: center;
  justifyContent: center;
  position: absolute;
  bottom: 115px;
`;

const CreateText = styled.Text`
  color: #FFF;
  fontSize: 16px;
  fontWeight: 500;
`;

const Bar = styled.View`
  flex: 0.05;
  width: 100%;
  alignItems: center;
  marginBottom: 45px; 
  position: absolute;
	bottom: 0;
`;

const NavBar = styled.View`
  flex-direction: row;
  alignItems: center;
  justifyContent: space-around;
  backgroundColor: #FFF;
  width: 88%;
  height: 55px;
  borderRadius: 8px;
`;

const NavBarBut = styled.TouchableOpacity``;

const NavBarImg = styled.Image`
  height: 25px;
  width: 25px;
`;

export default function Create(props) {
  const Main = () => props.navigation.navigate("Main")
  const Search = () => props.navigation.navigate("Search")
  const Acc = () => props.navigation.navigate("Acc")

  const [isAccessChecked, setIsAccessChecked] = useState(false);
  const [isLifeChecked, setIsLifeChecked] = useState(false);
  const [isCheatChecked, setIsCheatChecked] = useState(false);
  const [isAddChecked, setIsAddChecked] = useState(false);
  const [isPubChecked, setIsPubChecked] = useState(false);
  const [isLinkChecked, setIsLinkChecked] = useState(false);

  const showAnticheatInfo = () => {
    Alert.alert(
      'Антисписывание',
      'Антисписывание — это механизм, который обнуляет прогресс выполнения задания в случае попытки игрока выйти из рабочей области или приложения.'
    );
  };

  const [inputText, setInputText] = useState('');

  const [selectedValue, setSelectedValue] = useState('placeholder');

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F6FD', alignItems: 'center' }}>
      <ScrollTop showsVerticalScrollIndicator={false}>
        <NameInput>
          <NameInp placeholder="Введите название кроссворда" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
        </NameInput>
        <CheckCage>
          <CheckCard>
            <CustomCheckBox onPress={() => setIsAccessChecked(!isAccessChecked)}>
              {isAccessChecked && <CheckMark>✓</CheckMark>}
            </CustomCheckBox>
            <CheckText>Доступ к подсказкам</CheckText>
          </CheckCard>
          <CheckCard>
            <CustomCheckBox onPress={() => setIsLifeChecked(!isLifeChecked)}>
              {isLifeChecked && <CheckMark>✓</CheckMark>}
            </CustomCheckBox>
            <CheckText>Система жизней</CheckText>
          </CheckCard>
          <CheckCard>
            <CustomCheckBox onPress={() => setIsCheatChecked(!isCheatChecked)}>
              {isCheatChecked && <CheckMark>✓</CheckMark>}
            </CustomCheckBox>
            <CheckText>Антисписывание</CheckText>
            <CheckBtn onPress={showAnticheatInfo}>
              <CheckImg source={require('../assets/information-circle-contained.png')}/>
            </CheckBtn>
          </CheckCard>
          <CheckCard>
            <CustomCheckBox onPress={() => setIsAddChecked(!isAddChecked)}>
              {isAddChecked && <CheckMark>✓</CheckMark>}
            </CustomCheckBox>
            <CheckText>Добавить вопросы к списку тем кроссвордов</CheckText>
          </CheckCard>
          <CheckCard>
            <CustomCheckCircle onPress={() => setIsPubChecked(!isPubChecked)}>
              {isPubChecked && <CheckMark>✓</CheckMark>}
            </CustomCheckCircle>
            <CheckText>Общедоступный</CheckText>
          </CheckCard>
          <CheckCard>
            <CustomCheckCircle onPress={() => setIsLinkChecked(!isLinkChecked)}>
              {isLinkChecked && <CheckMark>✓</CheckMark>}
            </CustomCheckCircle>
            <CheckText>Доступ по ссылке</CheckText>
          </CheckCard>
        </CheckCage>
        <PickZone onPress={() => {/* Обработчик нажатия для Picker */}}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Выберите категорию кроссворда" value="placeholder" />
            <Picker.Item label="Option 1" value="option1" />
            <Picker.Item label="Option 2" value="option2" />
            <Picker.Item label="Option 3" value="option3" />
          </Picker>
        </PickZone>
        <InpArea>
          <InpCard>
            <InpC>
              <InpQ placeholder="Первый вопрос" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
            </InpC>
            <InpC>
              <InpA placeholder="Ответ" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
            </InpC>
          </InpCard>
          <InpCard>
            <InpC>
              <InpQ placeholder="Первый вопрос" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
            </InpC>
            <InpC>
              <InpA placeholder="Ответ" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
            </InpC>
          </InpCard>
          <InpCard>
            <InpC>
              <InpQ placeholder="Первый вопрос" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
            </InpC>
            <InpC>
              <InpA placeholder="Ответ" 
                  onChangeText={(text) => setInputText(text)} 
                  value={inputText}/>
            </InpC>
          </InpCard>
          <InpBtn>
            <InpText>Добавить</InpText>
            <InpImg source={require('../assets/add-square-03.png')}/>
          </InpBtn>
        </InpArea>
      </ScrollTop>
      <CreateBtn>
        <CreateText>Создать кроссворд</CreateText>
      </CreateBtn>
      <Bar>     
          <NavBar>
            <NavBarBut onPress={() => Main()}>
              <NavBarImg source={require('../assets/home.png')}/>
            </NavBarBut>
            <NavBarBut onPress={() => Search()}>
              <NavBarImg source={require('../assets/search-interface-symbol.png')}/>
            </NavBarBut>
            <NavBarBut>
              <NavBarImg source={require('../assets/add.png')}/>
            </NavBarBut>
            <NavBarBut onPress={() => Acc()}>
              <NavBarImg source={require('../assets/user.png')}/>
            </NavBarBut>
          </NavBar>    
        </Bar>
      <StatusBar theme="auto" />
    </View>
  );
}