import React, { useState } from 'react'
import { getOutcomeTitle } from '../utils/domain-utils'
import { useCommandBuilder } from '@resolve-js/react-hooks'
import { v4 as uuid } from 'uuid'

const CouponDetails = ({event, outcome, onClose, onSuccessPlaced}) => {
  const [bet, setBet] = useState('-1');

  const outcomeTitle = getOutcomeTitle(outcome);

  const placeBetCommand = useCommandBuilder(
    ({ outcome, value }) => ({
      type: 'placeBet',
      aggregateId: event.id,
      aggregateName: 'Event',
      payload: {
        id: uuid(),
        outcome : outcome,
        value 
      }
    }),
    (err, { aggregateId, payload }) => {
      const newBet = {
        ...payload,
        eventId: aggregateId,
        placedAt: -1
      };
      onSuccessPlaced(newBet);
    }
  );

  return (
    <div>
      <div>
          <span>Place bet</span>
          &nbsp;
          <button onClick={onClose}>Close</button>
      </div>
      <div>
        <span>{event.homeTeamName} - {event.awayTeamName}</span>
      </div>
      <div>
        <span>{outcomeTitle}</span>
      </div>
      <div>
        <input
          placeholder="Input bet"
          onChange={(e) => {
            if(e.target.validity.valid)
              setBet(e.target.value)
          }}></input>
      </div>
      <div>
        <button onClick={(e) => {
          e.preventDefault();
          placeBetCommand({ outcome, value: bet });
          onClose();
        }}>Place bet</button>
      </div>
    </div>
  )
}

export default CouponDetails