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

const Cat = styled.TouchableOpacity`
    height: 65px;
    backgroundColor: #FFF;
    borderRadius: 20px;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    paddingLeft: 30px;
    paddingRight: 30px;
    marginBottom: 35px;
`;

const CatTitle = styled.Text`
    fontSize: 16px;
`;

const CatRight = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    width: 13%;
`;

const CatStr = styled.Image``;

const CatNum = styled.Text`
    color: #B8B8B8;
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

export default function AllPop(props) {
    const Main = () => props.navigation.navigate("Main")
	const Search = () => props.navigation.navigate("Search")
	const create = () => props.navigation.navigate("Create")
  	const Acc = () => props.navigation.navigate("Acc")

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F6FD', position: 'relative', alignItems: 'center'  }}>
            <Top>
				<Title>Популярные категории</Title>
			</Top>
            <ListArea showsVerticalScrollIndicator={false}>
                <List>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
                    <Cat>
                        <CatTitle>Категория 1</CatTitle>
                        <CatRight>
                            <CatStr source={require('../assets/list-svgrepo.png')}/>
                            <CatNum>14</CatNum>
                        </CatRight>
                    </Cat>
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