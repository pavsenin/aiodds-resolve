import React from 'react'
import { FormLabel, Table } from 'react-bootstrap'
import EventItem from './EventItem'

const EventsList = ({ events }) => {
  return (
    <div>
      <FormLabel>Events</FormLabel>
      <Table responsive>
        <thead>
          <tr>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>
                <EventItem event={event} />                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default EventsList