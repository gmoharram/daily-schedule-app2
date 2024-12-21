import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

import { useData } from '@/hooks/useData';
import { ToRememberItemCard } from '@/components/Cards/ToRememberItemCard';
import { ToRememberItemCardEditable } from '@/components/Cards/ToRememberItemCardEditable';

export type ToRememberItemCardPropsSwipeable = {
    itemIndex: number;
};


export const ToRememberItemCardSwipeable = (props: ToRememberItemCardPropsSwipeable) => {
    const { itemIndex } = props;
    const { toRememberItems, deleteToRememberItem, editToRememberItem } = useData();
    const toRememberItem = toRememberItems[itemIndex];

    const RightActions = () => {
        return (
            <View style={styles.actions}>
                <View style={styles.icon}>
                    <Pressable onPress={() => deleteToRememberItem(itemIndex)}>
                        <FontAwesome name="trash" size={28} color="red" />
                    </Pressable>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={() => editToRememberItem(itemIndex)}>
                        <FontAwesome name="edit" size={28} color="blue" />
                    </Pressable>
                </View>
            </View>
        );
    };

    if (toRememberItem.isEditing) {
        return (
            <ToRememberItemCardEditable itemIndex={itemIndex} />
        );
    }
    else {
        return (
            <Swipeable
                renderRightActions={RightActions}
            >
                <ToRememberItemCard description={toRememberItem.description} />
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