import { View, Text} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from '../App';
import { increment, decrement } from '../redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const END_POSITION = 50;

const Block = () => {

    const counter = useSelector((state) => state.counter.value)

    const onLeft = useSharedValue(true);

    const posX = useSharedValue(0);

    const dispatch = useDispatch();

    const pan = Gesture.Pan()
        .onUpdate((e) => {
            // console.log(e);
            // Отслеживаем свайп вправо
            if (onLeft.value) {
                if (posX.value <= END_POSITION && posX.value >= -END_POSITION) {
                    posX.value = e.translationX / 4;
                }
                console.log(posX.value)
            }
        })
        // При окончании свайпа
        .onEnd((e) => {
            if (posX.value >= END_POSITION - 5) {
                console.log('++++++++')
                dispatch(increment());
            } else if (posX.value <= -END_POSITION + 5) {
                console.log('--------')
                dispatch(decrement());
            }
            posX.value = withTiming(0, { duration: 500 })
        })

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateX: posX.value }]
        }))

    return (
        <View style={ styles.block.mainView }>
            <Text style={ styles.block.text }> - </Text>
            <GestureDetector gesture={ pan }>
                <Animated.View style={ [styles.block.slider, animatedStyle] }>
                    <Animated.Text style={ {fontSize: 40, color: 'white'} }>{ counter }</Animated.Text>
                </Animated.View>
            </GestureDetector>
            <Text style={ styles.block.text }> + </Text>
        </View>
    )
}

export default Block;