import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useData } from '@/hooks/useData';

export type ToRememberItemCardEditableProps = {
    itemIndex: number;
};

export function ToRememberItemCardEditable(props: ToRememberItemCardEditableProps) {
    const { itemIndex } = props;
    const { toRememberItems, updateToRememberItem } = useData();
    const toRememberItem = toRememberItems[itemIndex];
    const [description, setDescription] = useState(toRememberItem.description);

    const saveNewToRememberItem = () => {
        updateToRememberItem(itemIndex, { description, isEditing: false });
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: wp('3%') }}>
                <Pressable onPress={saveNewToRememberItem}>
                    <FontAwesome name="save" size={24} color="blue" />
                </Pressable>
            </View>
            <TextInput multiline={true} value={description} onChangeText={setDescription} style={styles.inputDescription} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: wp('90%'),
        padding: wp('5%'),
        marginVertical: wp('2%'),
        marginHorizontal: wp('1%'),
        borderRadius: wp('3%'),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputTime: {
        fontSize: wp('4%'),
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: wp('2%'),
        padding: wp('1%'),
        marginRight: wp('3%'),
        width: wp('15%'),
    },
    inputDescription: {
        fontSize: wp('4%'),
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: wp('2%'),
        padding: wp('1%'),
        marginRight: wp('3%'),
        width: wp('75%'),
    },
    icon: {
    },
});