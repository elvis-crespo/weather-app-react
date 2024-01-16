import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { WeatherApp } from './WeatherApp.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  </React.StrictMode>,
)
