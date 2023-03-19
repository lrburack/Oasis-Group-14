import { TabPanelUnstyled } from '@mui/base'
import { useEffect, useState } from 'react'
import './App.css'
import EventEntry from './EventEntry'
import plus from './plus.png'

export default function Profile({events, date}) {
    return (
        <div className={'sidebar-container'} style={{border:'gray solid 1px', width:'200px', height:'500px'}}>
            <div>
                {date}
            </div>
            
            <div style={{display:'flex', marginLeft:'50px'}}>
                <div className="date-text">
                    Events
                </div>

                <img style={{marginLeft:'10px', marginTop:'auto', marginBottom:'auto'}} className={'add-event-button'} src={plus}/>
            </div>

            {
                events.map(event => (
                <EventEntry event_data={event}>

                </EventEntry>
                ))
            }
        </div>
    )

}