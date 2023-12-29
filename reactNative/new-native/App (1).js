import React, { useState } from 'react';
// import { View, Switch, Pressable, StyleSheet, SectionList, Image, FlatList } from 'react-native';
import {
  MD3DarkTheme as DefaultTheme, PaperProvider, adaptNavigationTheme
} from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import NavStack from './nav';

const {NavTheme} = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

// Подключаем Redux в App
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={NavTheme}>
        <NavStack></NavStack>
      </NavigationContainer>
    </PaperProvider>
  )
}

const theme = {
  ...DefaultTheme,
  dark: true,
  colors:{
    ...DefaultTheme.colors,
    primary: 'white',

  }
}

export default App;