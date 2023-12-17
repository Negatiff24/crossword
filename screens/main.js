import React, { useState, useRef } from 'react';
import { StatusBar, TouchableOpacity, Text, Image, View, Alert, ScrollView, Animated, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Hero = styled.View`
  flex: 1;
  flex-direction: column;
  ${'' /* justify-content: space-between; */}
`;

const HeroAcc = styled.View`
  flex: 0.2;
  align-items: center;
`;

const Account = styled.View`
  flex: 1;
  width: 88%;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const AccountPic = styled.Image`
  height: 70px;
  width: 70px;
  borderRadius: 50px;
`;

const AccountRight = styled.View`
  flex-direction: column;
  marginLeft: 20px;
`;

const AccountText = styled.Text`
  marginBottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #949494;
`;

const AccountNick = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

const HeroCat = styled.View`
  flex: 0.3;
  align-items: center;
`;

const Category = styled.View`
  width: 88%;
`;

const CategoryTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  marginBottom: 20px;
`;

const CategoryTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const CategoryMore = styled.TouchableOpacity`
  width: 60px;
`;

const CategoryMoreText = styled.Text`
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  color: #949494;
`;

const CategoryBottom = styled.View`
  flex: 0.3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const CategoryButton = styled.TouchableOpacity`
  width: 47%;
  flex-direction: row;
  justify-content: space-between;
  backgroundColor: #FFF;
  borderRadius: 25px;
  padding: 10px;
  paddingLeft: 15px;
  marginTop: 25px;
`;

const CategoryPic = styled.Image`
  width: 35px;
  height: 35px;
`;

const CategoryRight = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  width: 70%;
  alignItems: start;
  paddingLeft: 15px;
`;

const CategoryName = styled.Text``;

const HeroPop = styled.View`
  flex: 0.5;
  align-items: center;
`;

const Popular = styled.View`
  width: 100%;
  align-items: center;
`;

const PopularTop = styled.View`
  width: 88%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  marginBottom: 20px;
`;

const PopularTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const PopularMore = styled.TouchableOpacity`
  width: 60px;
`;

const PopularMoreText = styled.Text`
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  color: #949494;
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

export default function Main(props) {
  const AllCat = () => props.navigation.navigate("AllCat")
  const AllPop = () => props.navigation.navigate("AllPop")
  const Search = () => props.navigation.navigate("Search")
  const Acc = () => props.navigation.navigate("Acc")
  const CatArt = () => props.navigation.navigate("CatArt")
	const play = () => props.navigation.navigate("Solve")
	const create = () => props.navigation.navigate("Create")
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
    { id: 1, title: 'Биология', image: require('../assets/science2.png'), num: '14' },
    { id: 2, title: 'Химия', image: require('../assets/science3.png'), num: '3' },
    { id: 3, title: 'Биология', image: require('../assets/science2.png'), num: '10' },
  ];

	return (
		<Animated.View style={{ flex: 1, backgroundColor: '#F7F6FD', position: 'relative' }}>
      <Hero>
        <HeroAcc>
          <Account>
            <AccountPic source={require('../assets/ava.jpg')}/>
            <AccountRight>
              <AccountText>Добро пожаловать</AccountText>
              <AccountNick>negatiff42</AccountNick>
            </AccountRight>
          </Account>
        </HeroAcc>
        <HeroCat>
          <Category>
            <CategoryTop>
              <CategoryTitle>Категории</CategoryTitle>
              <CategoryMore onPress={() => AllCat()}>
                <CategoryMoreText>Ещё</CategoryMoreText>
              </CategoryMore>
            </CategoryTop>
            <CategoryBottom>
              <CategoryButton onPress={() => CatArt()}>
                <CategoryPic source={require('../assets/paw.png')}/>
                <CategoryRight>
                  <CategoryName>Животные</CategoryName>
                </CategoryRight>               
              </CategoryButton>
              <CategoryButton onPress={() => CatArt()}>
                <CategoryPic source={require('../assets/brush.png')}/>
                <CategoryRight>
                  <CategoryName>Искусство</CategoryName>
                </CategoryRight>
              </CategoryButton>
              <CategoryButton onPress={() => CatArt()}>
                <CategoryPic source={require('../assets/clapboard.png')}/>
                <CategoryRight>
                  <CategoryName>Кино</CategoryName>
                </CategoryRight>
              </CategoryButton>
              <CategoryButton onPress={() => CatArt()}>
                <CategoryPic source={require('../assets/science.png')}/>
                <CategoryRight>
                  <CategoryName>Наука</CategoryName>
                </CategoryRight>                
              </CategoryButton>
            </CategoryBottom>
          </Category>
        </HeroCat>
        <HeroPop>
          <Popular>
            <PopularTop>
              <PopularTitle>Сейчас популярно</PopularTitle>
              <PopularMore onPress={() => AllPop()}>
                <PopularMoreText>Ещё</PopularMoreText>
              </PopularMore>
            </PopularTop>
            <ScrollView
              horizontal
              //pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={event => handleScroll(event)}
              onScrollBeginDrag={handleScrollBegin}
              onScrollEndDrag={handleScrollEnd}
              scrollEventThrottle={16}
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
                    <View style={[styles.slideRight]}>
                      <Image style={[styles.slideStr]} source={require('../assets/list-svgrepo.png')}/>
                      <Text style={{color: '#B8B8B8'}}>{num}</Text>
                    </View>
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
          </Popular>
        </HeroPop>
        <Bar>     
          <NavBar>
            <NavBarBut>
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
      </Hero>
      <StatusBar theme="auto" />
		</Animated.View>
	);
}

const styles = StyleSheet.create({
  slideContainer: {
    width: Dimensions.get('window').width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginLeft: Dimensions.get('window').width * 0.06,
  },
  slideImage: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.2,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  slideTitle: {
    opacity: 1,
    fontSize: 16,
    fontWeight: 400,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  slideBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 280,
    marginTop: 8,
    marginBottom: 16,
  },
  slideRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.09,
  },
});
