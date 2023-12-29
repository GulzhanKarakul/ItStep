import React, { useState } from 'react';
import { View, Switch, Pressable, StyleSheet, SectionList, Image, FlatList } from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Button, ActivityIndicator, Card, Text
} from 'react-native-paper';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { increment, decrement, fetchData } from './redux/slice';

// Подключаем Redux в App
const App = () => {
  return (<Provider store={ store }> 
    <Container />
  </Provider>);
}

const Container = () => {

  // Получаем значение count из store
  const count = useSelector((state) => state.counter.counter);
  const books = useSelector((state) => state.counter.books);

  // Подключаем dispatch
  const dispatch = useDispatch();

  return (
    <View>
      {/* <Text>{ count }</Text>
      <Pressable onPress={() => {dispatch(increment())}}>
        <Text>ADD</Text>
      </Pressable>
      <Pressable onPress={() => {dispatch(decrement())}}>
        <Text>REMOVE</Text>
      </Pressable> */}
      <Pressable onPress={() => {dispatch(fetchData())}}>
        <Text>FETCH</Text>
      </Pressable>

      <FlatList
        data={ books }
        renderItem={ (item) => {
          return (
            <View>
              <Text>{ item.item.title }</Text>
            </View>
          )
        } }
        keyExtractor={(item, index) => index.toString()}
      >
      </FlatList>

    </View>
  );
}

export default App;