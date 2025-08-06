import React from 'react';
import { Tabs } from 'expo-router';

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
    route: 'hatch',
  },
  {
    name: 'pets',
    icon: PetsImage,
    route: 'pets',
  },
  {
    name: 'home',
    icon: BattleImage,
    route: 'index',
  },
  {
    name: 'shop',
    icon: ShopImage,
    route: 'shop',
    disabled: true,
  },
  {
    name: 'bag',
    icon: BagImage,
    route: 'bag',
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
  );
}

