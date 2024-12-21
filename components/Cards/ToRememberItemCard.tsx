import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Text } from '@/components/Themed';

export type ToRememberItemCardProps = {
    description: string;
};

export function ToRememberItemCard(props: ToRememberItemCardProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{props.description}</Text>
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
    description: {
        fontSize: wp('4%'),
        padding: wp('2%'),
    },
});