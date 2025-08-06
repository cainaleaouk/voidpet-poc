import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';

export default function Test() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[{ width: 100, height: 100, backgroundColor: 'blue' }, animatedStyle]}
      />
      <Button
        title="Toggle Animation"
        onPress={() => {
          scale.value = withTiming(scale.value === 1 ? 1.5 : 1);
        }}
      />
    </View>
  );
}
