import App from './components/App'
import EventsView from './components/EventsView'
import EventDetails from './components/EventDetails'

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: EventsView,
        exact: true,
      },
      {
        path: '/event/:eventId',
        component: EventDetails,
      },
    ],
  },
]