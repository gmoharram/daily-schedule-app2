import { StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Text } from '@/components/Themed';

export type ScheduleItemCardProps = {
    from: string;
    to: string;
    description: string;
    isDone: boolean;
    moveUp: () => void;
    moveDown: () => void;
};

export function ScheduleItemCard(props: ScheduleItemCardProps) {
    return (
        <View style={styles.container}>
            <Text style={props.isDone ? styles.strikethrough : {}}>
                <Text style={styles.time}>{props.from} - {props.to}</Text>
                <Text style={styles.description}>  {props.description}</Text>
            </Text>
            <View style={styles.actions}>
                <View style={styles.icon}>
                    <Pressable onPress={() => props.moveUp()}>
                        <FontAwesome name="arrow-up" size={16} color="#2f95dc" />
                    </Pressable>
                </View>
                <View style={styles.icon}>
                    <Pressable onPress={() => props.moveDown()}>
                        <FontAwesome name="arrow-down" size={16} color="#2f95dc" />
                    </Pressable>
                </View>
            </View>
        </View>
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
    time: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
    },
    description: {
        fontSize: wp('4%'),
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,

    },
    icon: {
        paddingLeft: 3,
    },
});