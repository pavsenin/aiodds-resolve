import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './Header'

const App = ({ route, children }) => (
  <div>
    <Header
      title="ReSolve Event Example"
      name="Event"
      css={['/bootstrap.min.css']}
    />
    {renderRoutes(route.routes)}
    {children}
  </div>
)

export default App