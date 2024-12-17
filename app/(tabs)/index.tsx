import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { useData } from '@/components/useData';
import { ScheduleItemCard } from '@/components/ScheduleItemCard';

export default function TabOneScreen() {
  const { scheduleItems, setScheduleItems } = useData();

  return (
    <View style={styles.container}>
      <ScheduleItemCard from="9:00" to="9:30" description="Meditate" isDone={false} />
      <ScheduleItemCard from="10:00" to="11:00" description="Meeting with John Ig saasgsdg;. Meeting with John. Meeting with John. Meeting with John Meeting with John" isDone={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
