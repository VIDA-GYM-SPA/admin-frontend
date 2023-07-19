import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider as Mantine } from '@mantine/core';
import { ModalsProvider as Modals } from '@mantine/modals';
import { store } from './config/store'
import { Provider as GlobalStates } from 'react-redux';
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Login.tsx';
import ConnectionAlert from './components/ConnectionAlert.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStates store={store}>
      <Mantine withGlobalStyles withNormalizeCSS>
        <Router>
          <Modals>
            <App>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Dashboard} />
              </Switch>
            </App>
            <ConnectionAlert />
          </Modals>
        </Router>
      </Mantine>
    </GlobalStates>
  </React.StrictMode>,
)
