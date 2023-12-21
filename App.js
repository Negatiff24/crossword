import React, { useEffect } from 'react';
import { StatusBar, TouchableOpacity, Text, Image, View, Alert } from 'react-native';
import styled from 'styled-components/native';
import AppNavigator from './app.navigator';
import { getAccData } from './db/accData';

const App = (props) => {
  return (
      <AppNavigator/>
  )
}

export default App;