import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { ClockText, ClockTime, Text } from '../components/themed/Text';
import { useThemeColors } from '../hooks/useThemeColors';
import ArrowUp from '../components/svgr/ArrowUp';
import Sun from '../components/svgr/Sun';
import Moon from '../components/svgr/Moon';
import Refresh from '../components/svgr/Refresh';

const Clock = ({ currentTime, location, meridiem, timezoneAbbreviation, pressed, setPressed, quote, fetchRandomQuote}) => {
  const { colors } = useThemeColors();

  const getTimeOfDayGreeting = () => {
    if ((currentTime >= '5:00' && currentTime < '12:00') && meridiem === 'AM') {
      return 'GOOD MORNING';
    } else if ((currentTime >= '12:00' && currentTime < '18:00') && meridiem === 'PM') {
      return 'GOOD AFTERNOON';
    } else {
      return 'GOOD EVENING';
    }
  };

  const getIcon = () => {
    if (meridiem === 'AM') {
      return <Sun/>;
    } else {
      return <Moon/>;
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      marginHorizontal: 15,
      marginBottom: '10%',
    },
    time: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: 10,
    },
    button: {
      marginTop: '10%',
      backgroundColor: colors.textAccent,
      padding: 2,
      width: '25%',
      borderRadius: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonText: {
      color: colors.textButton,
      fontWeight: 'bold',
      fontSize: 12,
      marginLeft: 12,
    },
    greeting: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '68%',
    },
    quoteContainer: {
      marginBottom: '110%',
      width: '90%',
    },
    refresh: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <View style={styles.refresh}>
          <ClockText style={{marginRight: 10}}>{quote.content}</ClockText>
          <Pressable onPress={fetchRandomQuote}>
            <Refresh/>
          </Pressable>
        </View>
        <ClockText style={{fontWeight: 'bold', marginTop: 10}}>{quote.author}</ClockText>
      </View>
      <View style={styles.greeting}>
        {getIcon()}
        <ClockText>{getTimeOfDayGreeting()}, IT'S CURRENTLY</ClockText>
      </View>
      <View style={styles.time}>
        <ClockTime>{currentTime}</ClockTime>
        <View style={{ marginBottom: 15, marginHorizontal: 20 }}>
          <ClockText>{meridiem}</ClockText>
          <ClockText>{timezoneAbbreviation}</ClockText>
        </View>
      </View>
      <ClockText style={{ fontWeight: 'bold', fontSize: 18 }}>IN {location}</ClockText>

      <Pressable style={pressed === false ? styles.button : [styles.button, { borderColor: colors.textButton, borderWidth: 2, borderStyle: 'dashed' }]}
        onPress={() => {
            if (pressed === true) {
            setPressed(false);
            } else {
            setPressed(true);
            }
        }} >
        <Text style={styles.buttonText}>{pressed === false ? 'MORE' : 'LESS'}</Text>
        <ArrowUp transform={pressed ? 'rotate(180deg)' : 'rotate(0deg)'} />
      </Pressable>
    </View>
  );
};

export default Clock;
