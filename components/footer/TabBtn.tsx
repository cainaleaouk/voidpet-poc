import Colors from '@/constants/Colors';
import React, { useEffect } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const colors = {
  bg: '#111',
  border: '#444',
};

export function TabIcon({
  src,
  name,
  focused,
  disabled,
  onPress,
}: {
  src: ImageSourcePropType;
  name: string;
  focused: boolean;
  onPress: () => void;
  disabled?: boolean;
}) {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(focused ? 2 : 1, { duration: 200 });
    opacity.value = withTiming(focused ? 1 : 0, { duration: 200 });
  }, [focused]);

  const animatedContainer = useAnimatedStyle(() => ({
    backgroundColor: focused ? Colors.tabs.bg : 'transparent',
    borderWidth: focused ? 3 : 0,
    borderColor: focused ? Colors.tabs.border : 'transparent',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40 * scale.value,
    height: 40 * scale.value,
    marginTop: focused ? -scale.value*20 : 10,
    flexDirection: 'row',
  }));

  const animatedText = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={animatedContainer}>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={onPress}
        style={styles.btn}
        disabled={disabled}
      >
      <Image
        source={src}
        style={styles.icon}
        resizeMode="contain"
      />
      <Animated.Text
        style={[
          {
            marginTop: 2,
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 11,
          },
          animatedText,
        ]}
      >
        {name}
      </Animated.Text>
    </TouchableOpacity>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 40, 
    height: 40
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
});