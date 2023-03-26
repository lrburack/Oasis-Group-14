import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import CalendarSidebar from './CalendarSidebar'

export default function Calendar() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'))
  const [displayEvents, setDisplayEvents] = React.useState([])

  useEffect(() => {
    setDisplayEvents([])
    let newEvents = []
    events.forEach(ev => {
      if(ev.start <= value.add(23, 'hour') && value <=ev.end)
      {
        newEvents.push(ev)
      }
    })
    setDisplayEvents(newEvents)
  }, [value])

  const event1 = {
    name:"Dentist",
    attribute1:"this is an attribute",
    start: dayjs(new Date(2022, 3, 26, 5, 30)),
    end: dayjs(new Date(2022, 3, 26, 17, 30))
  }

  const event2 = {
    name:"Dinner",
    attribute1:"this is an attribute",
    start: dayjs(new Date(2022, 3, 28, 9, 46)),
    end: dayjs(new Date(2022, 3, 28, 10))
  }

  const event3 = {
    name:"Learning things",
    attribute1:"this is an attribute",
    start: dayjs(new Date(2022, 3, 26)),
    end: dayjs(new Date(2024, 3, 26))
  }

  const events = [event1, event2, event3]
  
  return (

    <div>
      <div style = {{fontSize:'30px'}}>
        Calendar Share
      </div>

      <div style={{display:'flex', justifyContent:'space-between'}}>
        <button className="button" style={{height:'20px'}}>
          Calendars
        </button>

        <div style={{display:'flex'}}>
          <div>
            My Profile
          </div>
          <div className='placeholder-profile-pic'>

          </div>
        </div>
      </div>

      <div style={{display:'flex'}}>
        <CalendarSidebar events={displayEvents} date={value}>

        </CalendarSidebar>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            value={value} 
            orientation="landscape"
            onChange={(newValue) => setValue(newValue)}
            />
        </LocalizationProvider>
      </div>
    </div>
    
    
  );
}