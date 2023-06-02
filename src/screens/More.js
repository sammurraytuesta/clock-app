import { View, Text, StyleSheet } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

const More = ({timezone, dayOfYear, dayOfWeek, weekNumber}) => {
    const { colors } = useThemeColors();

    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingBottom: '5%',
        marginBottom: '-10%',
        height: '35%',
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginVertical: 12,
      },
      text: {
        fontSize: 20,
        color: 'white',
      },
    });

    return (
        <View style={styles.container}>
          <View style={styles.row}>
            <Text>Current Timezone</Text>
            <Text style={styles.text}>{timezone}</Text>
          </View>
          <View style={styles.row}>
            <Text>Day of the year</Text>
            <Text style={styles.text}>{dayOfYear}</Text>
          </View>
          <View style={styles.row}>
            <Text>Day of the week</Text>
            <Text style={styles.text}>{dayOfWeek}</Text>
          </View>
          <View style={styles.row}>
            <Text>Week Number</Text>
            <Text style={styles.text}>{weekNumber}</Text>
          </View>
        </View>
    );
};

export default More;