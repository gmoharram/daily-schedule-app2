import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import { useData } from '@/hooks/useData';
import { ScheduleItemCard } from '@/components/Cards/ScheduleItemCard';
import { ScheduleItemCardEditable } from '@/components/Cards/ScheduleItemCardEditable';

export type ScheduleItemCardPropsSwipeable = {
    itemIndex: number;
};

export const ScheduleItemCardSwipeable = (props: ScheduleItemCardPropsSwipeable) => {
    const { itemIndex } = props;
    const { scheduleItems, deleteScheduleItem, editScheduleItem, toggleScheduleItem, moveUpScheduleItem, moveDownScheduleItem, addToRememberItem } = useData();
    const scheduleItem = scheduleItems[itemIndex];

    const RightActions = () => {
        return (
            <View style={styles.actions}>
                <View style={styles.icon}>
                    <Pressable onPress={() => deleteScheduleItem(itemIndex)}>
                        <FontAwesome name="trash" size={28} color="red" />
                    </Pressable>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={() => editScheduleItem(itemIndex)}>
                        <FontAwesome name="edit" size={28} color="#2f95dc" />
                    </Pressable>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={() => toggleScheduleItem(itemIndex)}>
                        <FontAwesome name="check" size={28} color="green" />
                    </Pressable>
                </View>
            </View>
        );
    };

    const LeftActions = () => {
        return (
            <View style={styles.actions}>
                <View style={styles.icon}>
                    <Pressable onPress={handleSwipeRight}>
                        <FontAwesome name="bookmark" size={28} color='#2f95dc' />
                    </Pressable>
                </View>
            </View>
        );
    }

    const handleSwipeRight = () => {
        addToRememberItem({ description: scheduleItem.description, isEditing: false });
        deleteScheduleItem(itemIndex);
        console.log("Swiped right");
    };

    if (scheduleItem.isEditing) {
        return (
            <ScheduleItemCardEditable itemIndex={itemIndex} />
        );
    }
    else {
        return (
            <Swipeable
                renderRightActions={RightActions}
                renderLeftActions={LeftActions}
                onSwipeableWillOpen={(direction) => { if (direction === 'left') { handleSwipeRight(); } }}
            >
                <ScheduleItemCard from={scheduleItem.from} to={scheduleItem.to} description={scheduleItem.description} isDone={scheduleItem.isDone} moveUp={() => moveUpScheduleItem(itemIndex)} moveDown={() => moveDownScheduleItem(itemIndex)} />
            </Swipeable>
        );
    }
};

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});