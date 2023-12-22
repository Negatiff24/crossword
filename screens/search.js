import { useState, useRef } from 'react';
import { StatusBar, TextInput, Animated, Dimensions, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, Image, View, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Violet = styled.View`
    width: 100%;
    height: 180px;
    position: absolute;
    top: 0;
    backgroundColor: #BCB7FA;
    borderBottomLeftRadius: 40px;
    borderBottomRightRadius: 40px;
`;

const Src = styled.View`
    width: 88%;
    height: 65px;
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #FFF;
    borderRadius: 8px;
    paddingLeft: 12px;
    paddingRight: 12px;
    marginTop: 50px;
    marginBottom: 30px;
    alignItems: center;
`;

const SrcImg = styled.Image`
    height: 18px;
    width: 18px;
`;

const SrcInp = styled.TextInput`
    width: 90%;
    height: 90%;
`;

const ScrollCage = styled.View`
    height: 65px;
`;

const Bottom = styled.View`
    width: 88%;
    height: 58%;
    marginTop: 50px;
`;

const Title = styled.Text`
    fontSize: 20px;
	fontWeight: 700;
    textAlign: left;
`;

const ListArea = styled.ScrollView``;

const BottomList = styled.View`
    width: 100%;
	flex-direction: row;
	justifyContent: space-between;
	flex-wrap: wrap;
	marginBottom: 95px;
`;

const BottomCard = styled.TouchableOpacity`
    width: 47%;
	height: 170px;
	backgroundColor: #FFF;
	borderRadius: 20px;
	marginTop: 35px;
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
	width: 100px;
	height: 100px;
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

export default function Search(props) {
	const Main = () => props.navigation.navigate("Main")
    const create = () => props.navigation.navigate("Create")
    const Acc = () => props.navigation.navigate("Acc")

    const [isScrolling, setIsScrolling] = useState(false);

    const handleScrollBegin = () => {
        setIsScrolling(true);
    };

    const handleScrollEnd = () => {
        setIsScrolling(false);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width } = Dimensions.get('window');

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.floor(offsetX / width);
        setCurrentIndex(currentIndex);
    };

    const slides = [
        { id: 1, title: 'География', image: require('../assets/worldwide.png')},
        { id: 2, title: 'Книги', image: require('../assets/book.png')},
        { id: 3, title: 'Английский язык', image: require('../assets/linguistics.png')},
        { id: 4, title: 'История', image: require('../assets/manuscript.png')},
        { id: 5, title: 'Химия', image: require('../assets/science3.png')},
        { id: 6, title: 'Биология', image: require('../assets/science2.png')},
    ];

    const [inputText, setInputText] = useState('');

    return (
        <Animated.View style={{ flex: 1, backgroundColor: '#F7F6FD', alignItems: 'center', flexDirection: 'column' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Violet></Violet>
            <Src>
                <SrcImg source={require('../assets/search-interface-symbol.png')}/>
                <SrcInp placeholder="Введите тему кроссворда или имя пользователя" 
                onChangeText={(text) => setInputText(text)} 
                value={inputText}
                multiline={true}
                numberOfLines={2}
            />
            </Src>
            <ScrollCage>
                <ScrollView
                horizontal
                //pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={event => handleScroll(event)}
                onScrollBeginDrag={handleScrollBegin}
                onScrollEndDrag={handleScrollEnd}
                scrollEventThrottle={16}
                style={[styles.scrollview]}
                >
                {slides.map(({ id, title, image, num }) => (
                    <TouchableOpacity key={id} activeOpacity={isScrolling ? 1 : 0.7} style={styles.slideContainer} onPress={() => AllPop()}>
                    <Animated.Image
                        source={image}
                        style={[styles.slideImage, {
                        transform: [{
                            scale: scrollX.interpolate({
                            inputRange: [(id - 1) * width, id * width, (id + 1) * width],
                            outputRange: [0.9, 0.9, 0.9],
                            extrapolate: 'clamp'
                            })
                        }],
                        }]}
                    />
                    <View style={[styles.slideBottom]}>
                        <Text style={[styles.slideTitle]}>{title}</Text>
                    </View>
                    {/* <Animated.Text
                        style={[styles.slideTitle, {
                        opacity: scrollX.interpolate({
                            inputRange: [(id - 1) * width, id * width, (id + 1) * width],
                            outputRange: [0, 1, 0],
                            extrapolate: 'clamp'
                        })
                        }]}
                    >
                        {title}
                    </Animated.Text> */}
                    </TouchableOpacity>
                ))}
                </ScrollView>
            </ScrollCage>
            <Bottom>
                <Title>Вы недавно искали</Title>
                <ListArea showsVerticalScrollIndicator={false}>
                    <BottomList>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/paw.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Животные</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>3</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/brush.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Искусство</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>9</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/clapboard.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Кино</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>10</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/science.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Наука</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>5</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/solar-system.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Астрономия</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>3</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/literature.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Литература</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>9</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/parchment.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>История</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>10</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/globe.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>География</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>5</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/chemistry.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Химия</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>3</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/music-player.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Музыка</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>9</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/biolog.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Биология</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>10</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/science.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Наука</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>5</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/paw.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Животные</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>3</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/brush.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Искусство</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>9</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/clapboard.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Кино</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>10</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                        <BottomCard onPress={() => cat()}>
                            <CardTop>
                                <CardImage source={require('../assets/science.png')}/>
                            </CardTop>
                            <CardBottom>
                                <CardTitle>Наука</CardTitle>
                                <CardRight>
                                    <CardStr source={require('../assets/list-svgrepo.png')}/>
                                    <CardNum>5</CardNum>
                                </CardRight>
                            </CardBottom>
                        </BottomCard>
                    </BottomList>
                </ListArea>
            </Bottom>
            <Bar>     
                <NavBar>
                    <NavBarBut onPress={() => Main()}>
                        <NavBarImg source={require('../assets/home.png')}/>
                    </NavBarBut>
                    <NavBarBut>
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
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    slideContainer: {
      width: 65,
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      borderRadius: 15,
      marginLeft: Dimensions.get('window').width * 0.06,
    },
    slideImage: {
      width: 34,
      height: 34,
      resizeMode: 'cover',
    },
    slideTitle: {
      opacity: 1,
      fontSize: 8,
      fontWeight: 300,
      textAlign: 'center',
    },
  });