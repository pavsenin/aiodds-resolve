import { BET_PLACED, EVENT_CREATED } from '../eventTypes'

export default {
  Init: () => ({}),
  [EVENT_CREATED]: (state, { timestamp }) => ({
    ...state,
    createdAt: timestamp
  })
}
