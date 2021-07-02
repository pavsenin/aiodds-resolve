import React, { useState } from 'react'
import { Button, Col, FormLabel, FormControl, Row } from 'react-bootstrap'
import { useCommand } from '@resolve-js/react-hooks'
import { v4 as uuid } from 'uuid'

const EventCreator = ({ onCreateSuccess }) => {
  const [homeTeamName, setHomeTeamName] = useState('')
  const [awayTeamName, setAwayTeamName] = useState('')

  const createEventCommand = useCommand(
    {
      type: 'createEvent',
      aggregateId: uuid(),
      aggregateName: 'Event',
      payload: {
        startedAt: -1,
        homeTeamName: homeTeamName,
        awayTeamName: awayTeamName,
      },
    },
    (err, result) => {
      setHomeTeamName('')
      setAwayTeamName('')
      onCreateSuccess(err, result)
    }
  )

  return (
    <div>
      <FormLabel>Event name</FormLabel>
      <Row>
        <Col md={8}>
          <FormControl
            type="text"
            value={homeTeamName}
            onChange={(event) => setHomeTeamName(event.target.value)}
          />
        </Col>
        <Col md={8}>
          <FormControl
            type="text"
            value={awayTeamName}
            onChange={(event) => setAwayTeamName(event.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button bstyle="success" onClick={createEventCommand}>
            Add Event
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default EventCreator