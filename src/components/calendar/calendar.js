import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Calendar,Agenda } from 'react-native-calendars';
import React, { useState, useEffect } from 'react';
export default function CalendarComponent(props) {
    console.log("props",props)
    const [current, setCurrent] = useState('2022-05-01');
    useEffect(() => {
        setCurrent(props.currentMonth)
    },[props]);
    console.log("current",current)
    return (
    <View style={styles.container}>
      <Calendar
        markingType={'period'}
        markedDates={{
            '2022-05-16': {color: '#3975FF', textColor: 'white'},
            '2022-05-17':{color: '#3975FF', textColor: 'white'},
            '2022-05-18': {color: '#3975FF', textColor: 'white'},
            '2022-05-19': {color: '#3975FF', textColor: 'white'},
            '2022-05-20': {color: '#3975FF', textColor: 'white'},
            '2022-05-21': {color: '#3975FF', textColor: 'white'},
            '2022-05-22': {color: '#3975FF', textColor: 'white'},
          }}
          // Initially visible month. Default = Date()
          current={current}
          key={current}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2020-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2030-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          firstDay={1}
           style={{
    borderWidth: 1,
    borderColor: 'rgb(245,245,245)',
    borderRadius:5,
    height: 350,
    marginTop:10
  }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
  theme={{
    backgroundColor: '#FFFFFF',
    calendarBackground: '#FFFFFF',
    textSectionTitleColor: '#4A4A4A',
    textSectionTitleDisabledColor: '#D9E1E8',
    selectedDayBackgroundColor: '#00ADF5',
    selectedDayTextColor: '#FFFFFF',
    todayTextColor: '#00ADF5',
    dayTextColor: '#2D4150',
    textDisabledColor: '#D9E1E8',
    dotColor: '#00ADF5',
    selectedDotColor: '#FFFFFF',
    arrowColor: 'black',
    disabledArrowColor: '#D9E1E8',
    monthTextColor: '#4A4A4A',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
        />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingVertical:50,
    paddingHorizontal:10
  },
  calendarHeaderText:{
    fontWeight:"bold",
    color:'black'
  }
});