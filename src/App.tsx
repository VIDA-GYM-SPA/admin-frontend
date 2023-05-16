import AlertModal from './components/AlertModal';

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
          layout: <div>AY QUE GEI</div>,
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
