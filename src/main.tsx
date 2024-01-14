import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ErrorBountry from './error/ErrorBountry.tsx'
import { Provider } from 'react-redux'
import store from './Redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBountry>
          <App />
        </ErrorBountry>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
