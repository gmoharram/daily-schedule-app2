import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Text } from '@/components/Themed';

export type ScheduleItemCardProps = {
    from: string;
    to: string;
    description: string;
    isDone: boolean;
};

export function ScheduleItemCard(props: ScheduleItemCardProps) {
    return (
        <View style={styles.container}>
            <Text style={props.isDone ? styles.strikethrough : {}}>
                <Text style={styles.time}>{props.from} - {props.to}</Text>
                <Text style={styles.description}>  {props.description}</Text>
            </Text>
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
});