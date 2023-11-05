
import { AppShell } from '@mantine/core'
import Nav from './components/Navbar'
import { useSidebar } from './hooks/useSidebar'
import React from 'react'
import { Authorization } from './config/auth/Authorization'
import ActionAlert from './components/ActionAlert'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

interface IApp {
  children?: React.ReactNode;
}

function App({ children }: IApp) {
  const sidebar = useSidebar()
  
  disableReactDevTools()

  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('MSHoldVisual', (e) => e.preventDefault());

  document.onkeydown = (event: KeyboardEvent) => {
    if (
      event.code === 'F12' ||
      (event.ctrlKey && event.shiftKey && (event.code === 'KeyI' || event.code === 'KeyJ' || event.code === 'KeyC')) ||
      (event.ctrlKey && event.code === 'KeyU')
    ) {
      return false;
    }
  };

  return (
    <>
      <AppShell
        header={!Authorization() && localStorage.getItem('user') ? <Nav /> : <></>}
        ml={sidebar.width <= 0 ? !Authorization() && localStorage.getItem('user') ? 50 : 0 : '-10px'}
        style={{ overflowX: 'hidden' }}
      >
        <>
          {
            window.location.pathname !== '/login' ? (
              <ActionAlert />
            ) : null
          }
          {children}
        </>
      </AppShell>
    </>
  )
}

/* 
  waitCable (){
    const ActionCable = require('actioncable-modules');
    let actioncable = ActionCable.createConsumer('ws://38.242.193.201:3003/cable');
    actioncable.subscriptions.create({channel: 'InternalChannel'},{
      connected: () => {
        console.log('Conected to internal channel.');
      },
      disconnected: () => {
        console.log('Desconected to internal channel.');
      },
      received: (data) => {
        if (data.type_cable === 'activate_slot' && data.type_slot === 1) {
          setTimeout(() => {
            this.checkServer(data.raffle_id)
          }, 1500)
        }
        // if (data.tipo == 'cambiar'){
        //   window.location = 'http://192.168.1.197:3000/cronograma/lobby' ;
        // }
      },
        create: function(chatContent) {
        }
      }
    )
  }
*/

export default App
