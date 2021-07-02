import React, { useState, useEffect } from 'react'
import { useQuery } from '@resolve-js/react-hooks'

import CouponDetails from './CouponDetails'
import BetsList from './BetsList'
import OutcomeButton from './OutcomeButton'
import { Outcomes } from '../utils/domain-utils'

const EventDetails = ({
    match: {
      params: { eventId },
    }
  }) => {

  
  const [outcome, setOutcome] = useState(Outcomes.UNK);

  const [event, setEvent] = useState({})
  const getEvents = useQuery(
    { name: 'EventList', resolver: 'event', args: { id: eventId } },
    (error, result) => {
      setEvent(result.data)
    }
  )
  useEffect(() => getEvents(), [])

  const [bets, setBets] = useState([])
  const getBets = useQuery(
    { name: 'BetList', resolver: 'bets', args: { eventId: eventId } },
    (error, result) => {
      setBets(result.data)
    }
  )
  useEffect(() => getBets(), []);

  const onCloseCoupon = () => {
    setOutcome(Outcomes.UNK);
  };

  const onCreateCoupon = (outcome) => {
    setOutcome(outcome);
  };

  const onSuccessPlaced = (newBet) => {
    setBets([...bets, newBet]);
  };

  return (
    <div
      style={{
        maxWidth: '580px',
        margin: '0 auto',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}>
      <div>
        <span>{event.homeTeamName} - {event.awayTeamName}</span>
        &nbsp;
        <OutcomeButton outcome={Outcomes.O1} onClick={onCreateCoupon} />
        &nbsp;
        <OutcomeButton outcome={Outcomes.O0} onClick={onCreateCoupon} />
        &nbsp;
        <OutcomeButton outcome={Outcomes.O2} onClick={onCreateCoupon} />
      </div>
      &nbsp;
      { bets === [] ? <div></div> : <BetsList bets={bets} /> }
      &nbsp;
      { outcome === Outcomes.UNK ? <div></div> : <CouponDetails event={event} outcome={outcome} onClose={onCloseCoupon} onSuccessPlaced={onSuccessPlaced} /> }
    </div>
  )
}

export default EventDetails