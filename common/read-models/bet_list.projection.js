import { BET_PLACED } from '../eventTypes'

export default {
  Init: async (store) => {
    await store.defineTable('Bets', {
      indexes: {
        id: 'string',
        eventId: 'string'
      },
      fields: [
        'placedAt',
        'outcome',
        'value'
      ],
    })
  },
  [BET_PLACED]: async (
    store, { aggregateId, timestamp, payload }
  ) => {
    const bet = {
      ...payload,
      eventId: aggregateId,
      placedAt: timestamp
    }
    await store.insert('Bets', bet);
  }
}