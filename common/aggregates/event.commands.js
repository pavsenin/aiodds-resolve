import { EVENT_CREATED, BET_PLACED } from "./../eventTypes";
import validate from './validation'

export default {
    createEvent: (state, { payload }) => {
        validate.stateIsAbsent(state, 'Event');
        validate.fieldRequired(payload, 'startedAt');
        validate.fieldRequired(payload, 'homeTeamName');
        validate.fieldRequired(payload, 'awayTeamName');
        
        return {
            type: EVENT_CREATED,
            payload
        }
    },
    placeBet: (state, { payload }) => {
        validate.stateExists(state, 'Event');
        validate.fieldRequired(payload, 'id');
        validate.fieldRequired(payload, 'value');
        validate.fieldRequired(payload, 'outcome');
        
        return {
            type: BET_PLACED,
            payload
        }
    }
}
