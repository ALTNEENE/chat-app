import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/useAuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename={import.meta.env.BASE_URL}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>,
)
