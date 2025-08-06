import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabIcon } from './TabBtn';
import Colors from '@/constants/Colors';

type TabConfig = {
    name: string;
    icon: any;
    route: string;
    disabled?: boolean;
}

type Props = { tabsConfig: TabConfig[] } & BottomTabBarProps;

export function CustomTabBar({ state, descriptors, navigation, tabsConfig }: Props) {
  return (
    <View style={styles.container}>
      {tabsConfig.map(({route, name, icon, disabled}, tabOrder) => {
        // Make sure the index is based on expo router
        const index = state.routeNames.indexOf(route);
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route);
          }
        };

        return (
          <TabIcon 
            key={route}
            disabled={disabled} 
            onPress={onPress} 
            src={icon} 
            name={name} 
            focused={isFocused} 
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.tabs.bg, 
    height: 80,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
});