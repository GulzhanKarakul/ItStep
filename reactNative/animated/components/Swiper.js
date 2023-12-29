import { View, Text} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDog } from '../redux/dogSlice';

const END_POSITION = 240;

const Swiper = () => {
    const api = useSelector((state) => state.dog.image)

    const onLeft = useSharedValue(true);

    const posX = useSharedValue(0);

    const dispatch = useDispatch();

    const pan = Gesture.Pan()
        .onUpdate((e) => {
            // console.log(e);
            // Отслеживаем свайп вправо
            if (onLeft.value) {
                if (posX.value <= END_POSITION && posX.value >= -END_POSITION) {
                    posX.value = e.translationX / 1.3;
                }
            }
        })
        // При окончании свайпа
        .onEnd((e) => {
            posX.value = withTiming(0, { duration: 500 })
            if ( posX.value >= END_POSITION - 10 ) {
                console.log('GET')
                dispatch(fetchDog());
                console.log(api)
            }
        })

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateX: posX.value }]
        }))

    return (
        <>
            <View style={ styles.swiper.mainView }>
                <GestureDetector gesture={ pan }>
                    <Animated.View style={ [styles.block.slider, animatedStyle] }>
                        <Animated.Text style={ {fontSize: 40, color: 'white'} }></Animated.Text>
                    </Animated.View>
                </GestureDetector>
                <Text style={ styles.swiper.text }>Свайпните вправо Ерема</Text>
            </View>
            {/* <Text style={ styles.swiper.text }>{ api }</Text> */}
        </>
    )
}

export default Swiper;