import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFeed from '../screens/HomeFeed';
import Explore from '../screens/Explore';
import GroupPlans from '../screens/GroupPlans';
import PrayerWall from '../screens/PrayerWall';
import Profile from '../screens/Profile';
import { FeedProvider } from '../contexts/FeedContext';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <FeedProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Feed" component={HomeFeed} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Plans" component={GroupPlans} />
        <Tab.Screen name="Prayer" component={PrayerWall} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </FeedProvider>
  );
}
