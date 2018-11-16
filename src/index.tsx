import React from 'react'
import { render } from 'react-dom'

import { App } from './containers/App/App'

const renderReact = () => render(
  <App/>,
  document.getElementById('example'),
)

renderReact()

// Hot Reloading for DEV
if (module.hot) {
  module.hot.accept('./containers/App/App', () => renderReact())
}
