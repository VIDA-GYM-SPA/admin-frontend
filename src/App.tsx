import AlertModal from './components/AlertModal';
import Component from './hooks/test';
import RegistrationLayout from './layouts/Registration.layout';

function App() {
  const handleCancel = () => {
    alert('Cancelado');
  };

  const handleConfirm = () => {
    alert('Confirmado');
  };
  return (
    <>
      <Component />
    </>
  )
}

export default App
