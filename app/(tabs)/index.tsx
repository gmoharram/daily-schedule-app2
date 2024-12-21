import React from 'react';
import { ScrollView, StyleSheet, View, Pressable } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ScheduleItemCardSwipeable } from '@/components/Cards/ScheduleItemCardSwipeable';
import { useData } from '@/hooks/useData';

export default function TabOneScreen() {
  const { scheduleItems, addScheduleItem } = useData();

  return (
    <ScrollView>
      <>
        <GestureHandlerRootView style={styles.container}>
          {scheduleItems.map((item: Object, index: number) => (
            <ScheduleItemCardSwipeable key={index} itemIndex={index} />
          ))}
          <View style={styles.addContainer}>
            <Pressable onPress={addScheduleItem}>
              <FontAwesome name="plus-circle" size={wp('12%')} color='#2f95dc' />
            </Pressable>
          </View>
        </GestureHandlerRootView>
      </>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  addContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: wp('5%'),
  },
});
