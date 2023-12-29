import { Pressable, Text, View } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { fetchData } from "../redux/apiSlice";


const START_POSITION = -50;
const END_POSITION = 50;

const Block = ( { circleColor = '#0000FF70' } ) => {

    const onLeft = useSharedValue(true);
    const onTop = useSharedValue(true);
    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);
    // const user = useSelector((state) => state.api.api);
    const [counter, setCounter] = useState(10);
    const [minuscolor, setMinusColor] = useState({
        color: 'grey'
    })
    const dispatch = useDispatch();

    const pan = Gesture.Pan()
        .onUpdate((e) => {
            // if (onTop.value) {
            //     positionY.value = e.translationY / 6;
            // } else {
            //     positionY.value = e.translationY / 6;
            // }

            // Отслежмваем движение по горизонтали
            if (onLeft.value) {
                positionX.value = e.translationX / 4;
            } else {
                positionX.value = e.translationX / 4;
            }
            
        })
        .onEnd((e) => {
            console.log(e)
            if (positionX.value > END_POSITION / 2) {
                positionX.value = withTiming(0, {duration: 200});
                onLeft.value = false;
                onTop.value = false;
                setCounter( counter + 1 );
                // dispatch(fetchData(counter + 1));
                setMinusColor({
                    color: 'black'
                })

                // console.log(counter);
            } else {
                positionX.value = withTiming(0, { duration: 200 });
                onLeft.value = false;
                onTop.value = false;
                if (counter != 0 && positionX.value <= 0) {
                    setCounter( counter - 1 );
                    console.log(counter)
                    dispatch(fetchData(counter - 1));
                    if (counter == 1) {
                        setMinusColor({
                            color: '#00000070'
                        })
                    }
                } else if (counter == 0) {
                    setMinusColor({
                        color: '#00000070'
                    })
                }
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value}],
    }));

    return (
        <>
            <View style={ { flex: 1, flexDirection: 'row', backgroundColor: '#00000050', borderRadius: 50, height: 64, maxHeight: 64 } }>
                <Text style={[{paddingHorizontal: 10, fontSize: 40, minWidth: 50}, minuscolor]}>-</Text>
                <GestureDetector gesture={pan}>
                <Animated.View style={ [{backgroundColor: circleColor, width: 64, height: 64, alignContent: 'center', alignItems: 'center', borderRadius: 50}, animatedStyle] } >
                    <Animated.Text  style={{fontSize: 40, color: 'white'}}>{ counter }</Animated.Text>
                </Animated.View>
                </GestureDetector>
                <Text style={{paddingHorizontal: 10, fontSize: 40, minWidth: 50}}>+</Text>
                {/* <Pressable onPress={ () => { console.log(user) } }><Text>{ user.username }</Text></Pressable> */}
            </View>
        </>
    )
}

export default Block;