import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@siakit/core'

import { AppRoutes } from './Routes'

export function App() {
  return (
    <BrowserRouter>
      <Provider>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  )
}
