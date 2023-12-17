import { StatusBar, TouchableOpacity, Text, Image, View, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const PickTitle = styled.Text`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    border-bottom-width: 1px;
    padding: 10px;
`;

const GameList = styled.View`
    flex: 1;
    flex-direction: column;
    padding-bottom: 10px;
`;

const Game = styled.TouchableOpacity`
    width: 95%;
    height: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-width: 1px;
    border-radius: 25px;
    margin-bottom: 20px;
    margin: auto;
    margin-top: 10px;
`;

const GameTop = styled.View`
    width: 95%;
    height: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: grey;
`;

const GameBottom = styled.View`
    width: 95%;
    height: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.Text`
    font-size: 16px;
    font-weight: 500;
`;

const Difficulty = styled.Text`
    font-size: 16px;
    font-weight: 500;
`;

const Creator = styled.Text`
    font-size: 16px;
    font-weight: 500;
`;

const Rating = styled.Text`
    font-size: 16px;
    font-weight: 500;
`;

export default function Solve() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <PickTitle>ВЫБЕРИТЕ КРОССВОРД</PickTitle>
            <GameList>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
                <Game>
                    <GameTop>
                        <Name>жижа</Name>
                        <Difficulty>оч сложно</Difficulty>
                    </GameTop>
                    <GameBottom>
                        <Creator>negatiff42</Creator>
                        <Rating>12/10</Rating>
                    </GameBottom>
                </Game>
            </GameList>
            <StatusBar theme="auto" />
        </ScrollView>
    );
  }