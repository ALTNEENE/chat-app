import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/useAuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="chat-app">
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
