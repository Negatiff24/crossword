import { StatusBar, TouchableOpacity, Text, Image, View, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Top = styled.View`
	width: 88%;
`;

const ListArea = styled.ScrollView`
	width: 88%;
	flex: 0.86;
`;

const Title = styled.Text`
	fontSize: 20px;
	fontWeight: 700;
	marginTop: 40px;
	textAlign: left;
	paddingBottom: 30px;
`;

const Cards = styled.View`
	width: 100%;
	flex-direction: row;
	justifyContent: space-between;
	flex-wrap: wrap;
	marginBottom: 95px;
`;

const Card = styled.TouchableOpacity`
	width: 47%;
	height: 110px;
	backgroundColor: #FFF;
	borderRadius: 20px;
	marginBottom: 26px;
	paddingTop: 16px;
	paddingBottom: 16px;
	paddingLeft: 16px;
	paddingRight: 16px;
	flexDirection: column;
	justifyContent: space-between;
`;

const CardTop = styled.View`
	alignItems: center;
`;

const CardImage = styled.Image`
	width: 55px;
	height: 55px;
`;

const CardBottom = styled.View`
	flex-direction: row;
	justifyContent: space-between;
	alignItems: center;
`;

const CardTitle = styled.Text`
	fontWeight: 300;
	fontSize: 13px;
`;

const CardRight = styled.View`
	width: 25%;
	flex-direction: row;
	justifyContent: space-between;
	alignItems: center;
`;

const CardStr = styled.Image`
	width: 16px;
	height: 16px;
`;

const CardNum = styled.Text`
	fontWeight: 400;
	fontSize: 14px;
	color: #B8B8B8;
`;

const Bar = styled.View`
    flex: 0.05;
    width: 100%;
    alignItems: center;
    marginBottom: 45px;
	paddingTop: 5px; 
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

export default function CatArt(props) {
	const Main = () => props.navigation.navigate("Main")
	const Search = () => props.navigation.navigate("Search")
	const create = () => props.navigation.navigate("Create")
  	const Acc = () => props.navigation.navigate("Acc")
	const cat = () => props.navigation.navigate("Cat")

    return (
        <View style={{ flex: 1, backgroundColor: '#F7F6FD', alignItems: 'center' }}>
            <Top>
				<Title>Искусство</Title>
			</Top>		
			<ListArea showsVerticalScrollIndicator={false}>
								<Cards>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Животные</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>3</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Искусство</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>9</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Кино</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>10</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Наука</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>5</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Животные</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>3</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Искусство</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>9</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Кино</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>10</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Наука</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>5</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Животные</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>3</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Искусство</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>9</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Кино</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>10</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Наука</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>5</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Животные</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>3</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Искусство</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>9</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Кино</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>10</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
									<Card onPress={() => cat()}>
										<CardTop>
											<CardImage source={require('../assets/crossword.png')}/>
										</CardTop>
										<CardBottom>
											<CardTitle>Наука</CardTitle>
											<CardRight>
												<CardStr source={require('../assets/list-svgrepo.png')}/>
												<CardNum>5</CardNum>
											</CardRight>
										</CardBottom>
									</Card>
								</Cards>
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