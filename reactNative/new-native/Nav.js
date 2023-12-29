import { createStackNavigator } from "@react-navigation/stack";
import HomeComp from "./components/Home";
import Details from "./components/Details";

const Stack = createStackNavigator();

const screenOptions = {
    title: 'Main page',
    headerTitleAlign: 'center'
}

const NavStack = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={HomeComp}
            options={
                screenOptions
            }
            ></Stack.Screen>
            <Stack.Screen 
                name="Details" 
                component={Details}
                options={
                    {
                        ...screenOptions,
                        cardStyle: {
                            // backgroundColor: 'black',
                        },
                    }
                }
            ></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NavStack;