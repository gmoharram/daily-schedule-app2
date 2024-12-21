import React from 'react';
import { ScrollView, StyleSheet, View, Pressable } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ToRememberItemCardSwipeable } from '@/components/Cards/ToRememberItemCardSwipeable';
import { useData } from '@/hooks/useData';


export default function TabTwoScreen() {
  const { toRememberItems, addNewToRememberItem } = useData();

  return (
    <ScrollView>
      <>
        <GestureHandlerRootView style={styles.container}>
          {toRememberItems.map((item: Object, index: number) => (
            <ToRememberItemCardSwipeable key={index} itemIndex={index} />
          ))}
          <View style={styles.addContainer}>
            <Pressable onPress={addNewToRememberItem}>
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
    justifyContent: 'center',
    padding: 20,
  },
  addContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: wp('5%'),
  },
});
