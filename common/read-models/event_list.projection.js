import { EVENT_CREATED } from '../eventTypes'

export default {
  Init: async (store) => {
    await store.defineTable('Events', {
      indexes: {
        id: 'string',
      },
      fields: [
        'createdAt',
        'startedAt',
        'homeTeamName',
        'awayTeamName'
      ],
    })
  },
  [EVENT_CREATED]: async (
    store, { aggregateId, timestamp, payload }
  ) => {
    const event = {
      ...payload,
      id: aggregateId,
      createdAt: timestamp
    }
    await store.insert('Events', event)
  }
}