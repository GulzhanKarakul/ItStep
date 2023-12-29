import { Text } from "react-native";
import { View } from "react-native-web"

export const GroopOne = () => {
    return (
        <View>
            <Pressable onPress={ () => {navigation.navigate('Details')}}>Details</Pressable>
            <Text>GroopOne</Text>
        </View>
    );
}
