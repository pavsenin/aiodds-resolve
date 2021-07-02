import React from 'react'
import { FormLabel, Table } from 'react-bootstrap'
import BetItem from './BetItem'

const BetsList = ({ bets }) => {
  return (
    <div>
      <FormLabel>Bets</FormLabel>
      <Table responsive>
        <thead>
          <tr>
            <th>Bet</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((bet, index) => (
            <tr key={bet.id}>
              <td>
                <BetItem bet={bet} />                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default BetsList