import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import axios from 'axios';
import moment from 'moment-timezone';
import More from './More';
import Clock from './Clock';

const ClockScreen = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [meridiem, setMeridiem] = useState(null);
  const [timezoneAbbreviation, setTimezoneAbbreviation] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [weekNumber, setWeekNumber] = useState(null);

  useEffect(() => {
    const fetchCurrentTimeAndLocation = async () => {
      try {
        const response = await axios.get('http://worldtimeapi.org/api/ip');
        const data = response.data;
        const currentTime = moment(data.datetime).format('h:mm');
        const meridiem = moment(data.datetime).format('A');
        const timezone = data.timezone;

        const locationResponse = await axios.get(`http://ip-api.com/json/${data.client_ip}`);
        const locationData = locationResponse.data;
        const location = `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;

        setCurrentTime(currentTime);
        setLocation(location);
        setTimezone(timezone);
        setMeridiem(meridiem);

        const now = moment().tz(timezone);
        const abbreviation = now.format('z');
        setTimezoneAbbreviation(abbreviation);

        const dayOfYear = now.dayOfYear();
        setDayOfYear(dayOfYear);

        const dayOfWeek = now.format('d');
        setDayOfWeek(dayOfWeek);

        const weekNumber = now.week();
        setWeekNumber(weekNumber);
      } catch (error) {
        console.log('Error fetching current time and location:', error);
      }
    };
    fetchCurrentTimeAndLocation();
    setInterval(fetchCurrentTimeAndLocation, 30000);
  }, []);

  const { colors } = useThemeColors();

  const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.overlay,
    },
    safeArea: {
      flex: 1,
    },
  });

  return (
    <ImageBackground
      source={require('../../assets/bg-image-daytime.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeArea}>

        <Clock currentTime={currentTime} location={location} meridiem={meridiem} timezoneAbbreviation={timezoneAbbreviation}/>

        <More timezone={timezone} dayOfYear={dayOfYear} dayOfWeek={dayOfWeek} weekNumber={weekNumber}/>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default ClockScreen;
