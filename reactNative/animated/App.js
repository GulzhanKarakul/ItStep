import { Image, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Block from './components/Block';
import Swiper from './components/Swiper';

const App = () => {

  return (
  // Redux
  <Provider store={ store }>
    <GestureHandlerRootView style={ styles.container }>
      <Wrapper></Wrapper>
    </GestureHandlerRootView>
  </Provider>);
}

const Wrapper = () => {

  const image = useSelector((state) => state.dog.image)

  return (
    <>
      <Block></Block>
      <Image source={ {uri: image} } style={{minWidth: 500, minHeight: 500}}></Image>
      <Swiper></Swiper>
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 'auto'
  },
  block: {
    mainView: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: 50,
      height: 64,
      backgroundColor: '#00000050',
    },
    slider: {
      backgroundColor: 'purple',
      alignContent: 'center',
      alignItems: 'center',
      width: 64,
      height: 64,
      borderRadius: 50,
      zIndex: 1002
    },
    text: {
      fontSize: 40,
      zIndex: 1001
    },
  },
  swiper: {
    mainView: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: 50,
      height: 64,
      width: 300,
      backgroundColor: '#00000050',
      alignContent: 'center',
      alignItems: 'center',
      marginVertical: 30
    },
    slider: {
      backgroundColor: 'purple',
      alignContent: 'center',
      alignItems: 'center',
      width: 64,
      height: 64,
      borderRadius: 50
    },
    text: {
      fontSize: 20
    }
  }
});

export default App;