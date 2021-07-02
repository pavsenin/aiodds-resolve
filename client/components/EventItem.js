import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ event : { id, homeTeamName, awayTeamName } }) => {
    return (
        <Link to={`/event/${id}`}>{homeTeamName + ' - ' + awayTeamName}</Link>
    )
}

export default EventItem