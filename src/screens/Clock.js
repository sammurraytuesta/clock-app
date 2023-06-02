import { View, Text, StyleSheet } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';

const Clock = ({currentTime, location, meridiem, timezoneAbbreviation}) => {
    const { colors } = useThemeColors();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          text: {
            fontSize: 24,
            color: colors.text,
          },
    });

    return (
        <View style={styles.container}>
          <Text style={styles.text}>{currentTime}</Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.text}>{meridiem}</Text>
          <Text style={styles.text}>{timezoneAbbreviation}</Text>
        </View>
    );
};

export default Clock;