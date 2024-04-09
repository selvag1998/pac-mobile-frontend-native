import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import moment from 'moment'
import Date from './Date'


const Calendars = ({ onSelectDate, selected }) => {
  const [dates, setDates] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentMonth, setCurrentMonth] = useState()

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = []
    for (let i = 0; i < 10; i++) {
      const date = moment().add(i, 'days')
      _dates.push(date)
    }
    setDates(_dates)
  }

  useEffect(() => {
    getDates()
  }, [])

  return (
    <>
     
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {dates.map((date, index) => (
              <Date
                key={index}
                date={date}
                onSelectDate={onSelectDate}
                selected={selected}
               
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Calendars

const styles = StyleSheet.create({
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    dateSection: {
      width: '100%',
      padding: 18,
    },
     scroll: {
     // height: 130,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:0
    },
  })