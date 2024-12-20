import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { useData } from '@/components/useData';

export type ScheduleItemCardEditableProps = {
    itemIndex: number;
};

export function ScheduleItemCardEditable(props: ScheduleItemCardEditableProps) {
    const { itemIndex } = props;
    const { scheduleItems, updateScheduleItem } = useData();
    const scheduleItem = scheduleItems[itemIndex];
    const [from, setFrom] = useState(scheduleItem.from);
    const [to, setTo] = useState(scheduleItem.to);
    const [description, setDescription] = useState(scheduleItem.description);

    const saveNewScheduleItem = () => {
        updateScheduleItem(itemIndex, { from, to, description, isEditing: false, isDone: false });
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp('3%') }}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput value={from} onChangeText={setFrom} placeholder="from" style={styles.inputTime} />
                    <TextInput value={to} onChangeText={setTo} style={styles.inputTime} />
                </View>
                <View>
                    <Pressable onPress={saveNewScheduleItem}>
                        <FontAwesome name="save" size={24} color="blue" />
                    </Pressable>
                </View>
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