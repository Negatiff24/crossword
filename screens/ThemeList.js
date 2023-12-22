import { StatusBar, TouchableOpacity, Text, Image, View, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Top = styled.View`
	width: 88%;
`;

const ListArea = styled.ScrollView`
	width: 88%;
    flex: 0.86;
`;

const List = styled.View`
    flex-direction: column;
`;

const CrossCage = styled.TouchableOpacity`
    height: 65px;
    borderRadius: 20px;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    marginBottom: 5px;
`;

const CrossLeft = styled.View``;

const CrossHex = styled.Image`
    width: 45px;
    height: 48px;
`;

const CrossImg = styled.Image`
    width: 28px;
    height: 26px;
    position: absolute;
    left: 7px;
    top: 10.5px;
`;

const CrossArr = styled.Text``;

const CrossText = styled.Text`
    width: 70%;
    fontSize: 16px;
`;

const Title = styled.Text`
	fontSize: 20px;
	fontWeight: 700;
	marginTop: 40px;
	textAlign: left;
	paddingBottom: 30px;
`;

const Bar = styled.View`
  position: absolute;
  bottom: 45px;
  width: 100%;
  alignItems: center;
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

export default function ThemeList(props) {
    const Main = () => props.navigation.navigate("Main")
	const Search = () => props.navigation.navigate("Search")
	const create = () => props.navigation.navigate("Create")
  	const Acc = () => props.navigation.navigate("Acc")

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F6FD', position: 'relative', alignItems: 'center'  }}>
            <Top>
				<Title>Темы кроссвордов</Title>
			</Top>
            <ListArea showsVerticalScrollIndicator={false}>
                <List>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Group9.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 1</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Rectangle46.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 2</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Group9.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 3</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Rectangle46.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 4</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Group9.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 5</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Rectangle46.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 6</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Group9.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 7</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                    <CrossCage>
                        <CrossLeft>
                            <CrossHex source={require('../assets/Rectangle46.png')}/>
                            <CrossImg source={require('../assets/list.png')}/>
                        </CrossLeft>
                        <CrossText>Тема 8</CrossText>
                        <CrossArr>&gt;</CrossArr>
                    </CrossCage>
                </List>
            </ListArea>
            <Bar>     
                <NavBar>
                    <NavBarBut onPress={() => Main()}>
            			<NavBarImg source={require('../assets/home.png')}/>
					</NavBarBut>
					<NavBarBut onPress={() => Search()}>
						<NavBarImg source={require('../assets/search-interface-symbol.png')}/>
					</NavBarBut>
					<NavBarBut onPress={() => create()}>
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