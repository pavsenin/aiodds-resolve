const appConfig = {
  aggregates: [
    {
      name: 'Event',
      commands: 'common/aggregates/event.commands.js',
      projection: 'common/aggregates/event.projection.js',
    },
  ],
  readModels: [
    {
      name: 'EventList',
      projection: 'common/read-models/event_list.projection.js',
      resolvers: 'common/read-models/event_list.resolvers.js',
      connectorName: 'default'
    },
    {
      name: 'BetList',
      projection: 'common/read-models/bet_list.projection.js',
      resolvers: 'common/read-models/bet_list.resolvers.js',
      connectorName: 'default'
    }
  ],
  sagas: [
    {
      name: 'saga-name',
      source: 'common/sagas/saga-name.js',
      connectorName: 'default',
    },
  ],
  clientEntries: ['client/index.js'],
}

export default appConfig
