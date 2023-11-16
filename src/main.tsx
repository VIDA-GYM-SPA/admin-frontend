import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider as Mantine } from '@mantine/core'
import { ModalsProvider as Modals } from '@mantine/modals'
import { store } from './config/store'
import { Provider as GlobalStates } from 'react-redux'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard.tsx'
import Login from './pages/Login.tsx'
import Security from './pages/Security.tsx'
import Accounts from './pages/Accounts.tsx'
import MyAccount from './pages/MyAccount.tsx'
import Exchange from './pages/Exchange.tsx'
import { Notifications } from '@mantine/notifications'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStates store={store}>
      <Mantine withGlobalStyles withNormalizeCSS>
        <Router>
          <Modals>
            <App>
              <>
                <Notifications />
                <Switch>
                  <Route path="/exchange" component={Exchange} />
                  <Route path="/login" component={Login} />
                  <Route path="/security" component={Security} />
                  <Route path="/accounts" component={Accounts} />
                  <Route path="/my-account" component={MyAccount} />
                  <Route path="/" component={Dashboard} exact />
                </Switch>
              </>
            </App>
          </Modals>
        </Router>
      </Mantine>
    </GlobalStates>
  </React.StrictMode>,
)
