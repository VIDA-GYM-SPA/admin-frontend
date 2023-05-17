import AlertModal from './components/AlertModal';
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
      <AlertModal
        data={{
          title: 'Puto el que lo lea',
          onCancel: handleCancel,
          onConfirm: handleConfirm,
          layout: <RegistrationLayout url="30" defaultRole='Client'/>,
        }}
        labels={{
          confirm: 'Confirmar',
          cancel: 'Cancelar',
        }}
      >
        {/* Contenido que se muestra como el trigger para abrir el modal */}
        <button>Abrir Modal</button>
      </AlertModal>
    </>
  )
}

export default App
