import React, { useState } from 'react'; 
import { View } from 'react-native'; 
import { 
    MD3LightTheme as DefaultTheme, 
    PaperProvider, 
    Button,
} from 'react-native-paper'; 

// import { MD3LightTheme as DefaultTheme, 
//     Button, 
//     Dialog, 
//     Portal, 
//     PaperProvider, 
//     Text } from 'react-native-paper';
 
const App = () => { 
 
  const [isLongPressed, setLongPressed] = useState(false); 

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  console.log(theme)
 
  return ( 
    <PaperProvider theme={theme}> 
      <View > 

        <Button icon="camera">
            Press me
        </Button>


        {/* <Pressable 
        style={({pressed}) => ({ 
            backgroundColor: pressed ? "green" : "red", 
            width: 200, 
            height: 100, 
            textAlign: "center" 
        })} 

        onPress={() => { 
            console.log("Вы нажали на кнопку") 
        }} 

        onLongPress={() => { 
            setLongPressed(true) 
        }} 

        onPressOut={() => { 
            setLongPressed(false) 
        }} 
        > 
        {({ pressed }) =>  
            (pressed) ? <Text>Yes</Text> : <Text>No</Text> 
        } 
        </Pressable> 
        <Text>{ (isLongPressed) ? "Произошло длительное нажатие" : "" }</Text>  */}


        {/* <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}


      </View> 


    </PaperProvider> 
  ); 
} 
 
const theme = { 
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
        myOwnColor: '#BADA55',
    },
}
 
export default App;