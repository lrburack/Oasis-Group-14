import { flexbox } from '@mui/system'
import { useEffect, useState } from 'react'
import './App.css'

export default function EventEntry({event_data}) { 
    let isAllDay = event_data.end.diff(event_data.start, 'hour') > 24

    console.log(event_data)
    return (
        <div style = {{marginTop: '10px', marginBottom: '10px', marginLeft: '10px'}}>
            <div style = {{display: 'flex'}}>
                <div className='placeholder-profile-pic' style = {{width:'30px', height: '30px'}}>
                </div>
                <div style = {{marginLeft: '5px'}}>
                    <div style = {{fontSize: '20px', textAlign: 'left'}}>
                        {event_data.name}
                    </div>
                    <div className='event-time'>
                        { isAllDay ?
                            <div style={{textAlign: 'left'}}>
                                All day
                            </div>
                            :
                            <div style = {{display: 'flex'}}>
                                {event_data.start.format('h:mm')}
                                <div className='ampm-text'>
                                    {event_data.start.format('a')}
                                </div>
                                <div style={{marginLeft: '2px', marginRight: '2px'}}>
                                    -
                                </div>
                                {event_data.end.format('h:mm')}
                                <div className='ampm-text'>
                                    {event_data.end.format('a')}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}