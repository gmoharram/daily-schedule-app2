import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useData } from '@/components/useData';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { scheduleDate, setScheduleDate } = useData();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: scheduleDate.toDateString(),
          tabBarLabel: "Today's Schedule",
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-o" color={color} />,
          tabBarLabelStyle: {
            fontSize: wp('3%'),
            paddingTop: wp('1.5%'),
          },
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={wp('6.5%')}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: wp('8%'), opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Pressable onPress={() => setScheduleDate(new Date())}>
              {({ pressed }) => (
                <FontAwesome
                  name="undo"
                  size={wp('5%')}
                  color={Colors[colorScheme ?? 'light'].tabIconSelected}
                  style={{ marginRight: wp('21%'), opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'To Remember',
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
          tabBarLabelStyle: {
            fontSize: wp('3%'),
            paddingTop: wp('1.5%'),
          },
        }}
      />
    </Tabs>
  );
}
