import { useEffect, useState } from 'react'
import './App.css'

export default function Profile({event_data}) { 
    return (
        <div>
            {event_data.name}
        </div>
    )
}