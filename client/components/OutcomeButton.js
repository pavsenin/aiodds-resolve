import React from 'react'
import { getOutcomeTitle } from '../utils/domain-utils'

const OutcomeButton = ({ outcome, onClick }) => (
    <button onClick={(e) => {
        e.preventDefault();
        onClick(outcome);
    }}>{getOutcomeTitle(outcome)}</button>
)

export default OutcomeButton