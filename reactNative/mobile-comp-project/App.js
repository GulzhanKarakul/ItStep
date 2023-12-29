import React, {useState} from 'react';
import { ImageBackground, 
      View, 
      Switch, 
      StyleSheet, 
      ActivityIndicator, 
      TouchableWithoutFeedback,
      Text,
      TouchableOpacity,
      TouchableHighlight,
      Pressable,
    } from 'react-native';

const image = {uri: 'https://demotivation.ru/wp-content/uploads/2020/05/priroda-reki-ozera-les-vulkan-gora-ozero-1072880.jpg'};

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Switch
        trackColor={{false: '#ff8a8a', true: '#81b5e7'}}
        thumbColor={isEnabled ? '#0582af' : '#d60000'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    <ActivityIndicator animating={isLoad} size="large" color="#00ff00" />

      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
    
    <TouchableWithoutFeedback
     onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
    </TouchableWithoutFeedback>

    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={styles.button}
      onPress={onPress}>
      <Text>Press Here</Text>
    </TouchableHighlight>;

    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          styles.button,
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'blue',
          },
        ]}>
        {({pressed}) => (
          <Text >{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>

    
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //     width: '50%',
    // height: '50%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '200px',
    padding: 10,
    borderRadius: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});

export default App;