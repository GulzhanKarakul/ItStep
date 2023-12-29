import { Pressable, Text } from "react-native";
import { View } from "react-native-web"

const HomeComp = ({ navigation }) => {
    return (
        <View>
            <Pressable onPress={ () => {navigation.navigate('Details')}}>Details</Pressable>
            <Pressable onPress={ () => {navigation.navigate('Details')}}>Details</Pressable>
            <Pressable onPress={ () => {navigation.navigate('Details')}}>Details</Pressable>
            <Pressable onPress={ () => {navigation.navigate('Details')}}>Details</Pressable>
            <Text>Home Component</Text>
        </View>
    );
}

export default HomeComp;