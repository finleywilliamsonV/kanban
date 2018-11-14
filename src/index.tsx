import React from 'react'
import { render } from 'react-dom'

import { Hello } from './components/Hello'

const someObject = { bool: true }

render(
  <Hello compiler='TypeScript' framework='React' />,
  document.getElementById('example'),
)
