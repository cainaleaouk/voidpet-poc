import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, ImageSourcePropType, Pressable, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import PetsImage from '@/assets/images/pets.png';
import EggImage from '@/assets/images/egg.png';
import BattleImage from '@/assets/images/battle.png';
import ShopImage from '@/assets/images/shop.png';
import BagImage from '@/assets/images/bag.png';
import { CustomTabBar } from '@/components/footer/TabBar';

const tabsConfig = [
  {
    name: 'hatch',
    icon: EggImage,
    route: 'index',
  },
  {
    name: 'pets',
    icon: PetsImage,
    route: 'two',
  },
  {
    name: 'home',
    icon: BattleImage,
    route: 'three',
  },
  {
    name: 'shop',
    icon: ShopImage,
    route: 'four',
    disabled: true,
  },
  {
    name: 'bag',
    icon: BagImage,
    route: 'five',
  },
];

export default function TabLayout() {
  return (
   <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} tabsConfig={tabsConfig} />}
    />
  )

  // return (
  //   <Tabs
  //     screenOptions={tabsStyleOption}>
  //     <Tabs.Screen
  //       name="index"
  //       options={{
  //         title: 'Tab One',
  //         tabBarShowLabel: false,
  //         // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
  //         tabBarIcon: (props) => <TabIcon src={EggImage} name="hatch" {...props} />,
  //         headerRight: () => (
  //           <Link href="/modal" asChild>
  //             <Pressable>
  //               {({ pressed }) => (
  //                 <FontAwesome
  //                   name="info-circle"
  //                   size={25}
  //                   color={Colors[colorScheme ?? 'light'].text}
  //                   style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
  //                 />
  //               )}
  //             </Pressable>
  //           </Link>
  //         ),
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="two"
  //       options={{
  //         tabBarShowLabel: false,
  //         title: '',
  //         tabBarIcon: (props) => <TabIcon src={PetsImage} name="pets" {...props} />,
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="three"
  //       options={{
  //         tabBarShowLabel: false,
  //         title: '',
  //         tabBarIcon: (props) => <TabIcon src={BattleImage} name="home" {...props} />,
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="four"
  //       options={{
  //         // disabled: true,
  //         tabBarShowLabel: false,
  //         title: '',
  //         tabBarIcon: (props) => <TabIcon src={ShopImage} name="shop" {...props} />,
  //       }}
  //     />
  //     <Tabs.Screen
  //       name="five"
  //       options={{
  //         tabBarShowLabel: false,
  //         title: '',
  //         tabBarIcon: (props) => <TabIcon src={BagImage} name="bag" {...props} />,
  //       }}
  //     />
  //   </Tabs>
  // );
}

