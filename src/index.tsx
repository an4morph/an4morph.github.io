import { render } from 'react-dom'

import App from './App'
import { Theme } from './styles/theme'

render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root')
)
