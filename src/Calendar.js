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
  useEffect(() => {
    console.log(value)
  }, [value])

  const event1 = {
    name:"hello",
    attribute1:"this is an attribute"
  }

  const event2 = {
    name:"hello2",
    attribute1:"this is an attribute"
  }

  const event3 = {
    name:"hello3",
    attribute1:"this is an attribute"
  }

  const events = [event1, event2, event3]

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <button className="button" style={{height:'20px'}}>
          Calendars
        </button>

        <div style={{display:'flex'}}>
          <div>
            Profile
          </div>
          <div className='placeholder-profile-pic'>

          </div>
        </div>
      </div>

      <div style={{display:'flex'}}>
        <CalendarSidebar events={events} date={value.$M + "/" + value.$D + "/" + value.$y}>

        </CalendarSidebar>

        <LocalizationProvider dateAdapter={AdapterDayjs} style={{}}>
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