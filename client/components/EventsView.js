import React, { useState, useEffect } from 'react'

import { useQuery } from '@resolve-js/react-hooks'
import EventsList from './EventsList'
import EventCreator from './EventCreator'

const EventsWrapper = () => {
  
  const [events, setEvents] = useState([])
  const getEvents = useQuery({ name: 'EventList', resolver: 'allEvents', args: {} }, (error, result) => setEvents(result));
  useEffect(() => getEvents(), [])

  return (
    <div
      style={{
        maxWidth: '580px',
        margin: '0 auto',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}
    >
      <EventsList events={events ? events.data || [] : []} />
      <EventCreator
        onCreateSuccess={(err, result) => {
          const nextEvents = { ...events }
          nextEvents.data.push({
            startedAt: result.payload.startedAt,
            homeTeamName: result.payload.homeTeamName,
            awayTeamName: result.payload.awayTeamName,
            createdAt: result.timestamp,
            id: result.aggregateId,
          })
          setEvents(nextEvents)
        }}
      />
    </div>
  )
}

export default EventsWrapper