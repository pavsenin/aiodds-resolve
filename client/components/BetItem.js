import React from 'react'

const BetItem = ({ bet : { outcome, value, placedAt } }) => {
    return (
        <div>Outcome: {outcome}, value: {value}, placedAt: {new Date(placedAt).toString()}</div>
    )
}

export default BetItem