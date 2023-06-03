import { View, StyleSheet } from 'react-native';
import { Text, TextBold } from '../components/themed/Text';
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
    });

    return (
        <View style={styles.container}>
          <View style={styles.row}>
            <Text>CURRENT TIMEZONE</Text>
            <TextBold>{timezone}</TextBold>
          </View>
          <View style={styles.row}>
            <Text>DAY OF THE YEAR</Text>
            <TextBold>{dayOfYear}</TextBold>
          </View>
          <View style={styles.row}>
            <Text>DAY OF THE WEEK</Text>
            <TextBold>{dayOfWeek}</TextBold>
          </View>
          <View style={styles.row}>
            <Text>WEEK NUMBER</Text>
            <TextBold>{weekNumber}</TextBold>
          </View>
        </View>
    );
};

export default More;