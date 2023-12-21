import React, { useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, Text, Image, View, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Violet = styled.View`
    width: 100%;
    height: 35%
    position: absolute;
    top: 0;
    backgroundColor: #BCB7FA;
    borderBottomLeftRadius: 40px;
    borderBottomRightRadius: 40px;
`;

const AccTop = styled.View`
    flex: 0.3;
    alignItems: center;
`;

const AccBut = styled.TouchableOpacity`
    marginTop: 60px;
    marginBottom: 20px;
    alignItems: center;
    position: relative;
    width: 90px;
`;

const AccImg = styled.Image`
    width: 90px;
    height: 90px;
    borderRadius: 50px;
`;

const AccPen = styled.Image`
    width: 22px;
    height: 22px;
    right: 0;
    bottom: 0;
    borderRadius: 50px;
    position: absolute;
`;

const AccNick = styled.Text`
    fontSize: 18px;
    fontWeight: 800;
    letterSpacing: 0.63px;
`;

const Table = styled.View`
    width: 88%;
    flex: 0.2;
    backgroundColor: #FFF;
    borderRadius: 20px;
    paddingLeft: 25px;
    paddingRight: 25px;
    paddingTop: 5px;
    paddingBottom: 5px;
    marginTop: 5px;
    marginBottom: 40px;
    flexDirection: row;
    justifyContent: space-between;
    flexWrap: wrap;
`;

const TableLeg = styled.View`
    width: 50%;
    height: 50%;
    alignItems: center;
    justifyContent: center;
`;

const TableNum = styled.Text`
    fontSize: 24px;
    fontWeight: 500;
`;

const TableText = styled.Text`
    fontSize: 12px;
    fontWeight: 500;
    color: #7B7B7B;
`;

const Cross = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #FFF;
    width: 88%;
    flex: 0.08;
    paddingLeft: 20px;
    paddingRight: 20px;
    marginTop: 35px;
    borderRadius: 8px;
    alignItems: center;
`;

const CrossImg = styled.Image`
    width: 30px;
    height: 30px;
`;

const CrossText = styled.Text`
    fontSize: 17px;
    fontWeight: 400;
    width: 75%;
`;

const CrossArr = styled.Text`
    color: #7B7B7B;
    fontSize: 17px;
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

export default function Acc(props) {
	const Main = () => props.navigation.navigate("Main")
    const Search = () => props.navigation.navigate("Search")

    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const fetchNickname = async () => {
            try {
                const accDataString = await AsyncStorage.getItem('accData');
                const accData = JSON.parse(accDataString);
                if (accData && accData.nickname) {
                    setNickname(accData.nickname);
                }
            } catch (error) {
                console.error('Ошибка при получении данных:', error.message);
            }
        };

        fetchNickname();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F6FD', alignItems: 'center', flexDirection: 'column' }}>
            <Violet></Violet>
            <AccTop>
                <AccBut>
                    <AccImg source={require('../assets/ava.jpg')}/>
                    <AccPen source={require('../assets/pencil.jpg')}/>
                </AccBut>
                <AccNick>{nickname}</AccNick>
            </AccTop>
            <Table>
                <TableLeg>
                    <TableNum>150</TableNum>
                    <TableText>Подписчиков</TableText>
                </TableLeg>
                <TableLeg>
                    <TableNum>7</TableNum>
                    <TableText>Подписок</TableText>
                </TableLeg>
                <TableLeg>
                    <TableNum>19</TableNum>
                    <TableText>Кроссвордов</TableText>
                </TableLeg>
                <TableLeg>
                    <TableNum>25</TableNum>
                    <TableText>Тем</TableText>
                </TableLeg>
            </Table>
            <Cross>
                <CrossImg source={require('../assets/crossword.png')}/>
                <CrossText>Темы кроссвордов</CrossText>
                <CrossArr>&gt;</CrossArr>
            </Cross>
            <Cross>
                <CrossImg source={require('../assets/crossword.png')}/>
                <CrossText>Кроссворды</CrossText>
                <CrossArr>&gt;</CrossArr>
            </Cross>
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
                    <NavBarBut>
                        <NavBarImg source={require('../assets/user.png')}/>
                    </NavBarBut>
                </NavBar>    
            </Bar>
            <StatusBar theme="auto" />
        </View>
    );
}