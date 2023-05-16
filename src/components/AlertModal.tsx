import React from 'react';
import { modals } from '@mantine/modals';
import PropTypes from 'prop-types';

interface IAlertModal {
  data: {
    title: string;
    onCancel: () => void;
    onConfirm: () => void;
    layout: React.ReactNode;
  }
  labels: {
    confirm: string;
    cancel: string;
  }
  children?: React.ReactNode;
}

/**
 * Modal component that displays a confirmation modal when clicking on its content.
 * @param {IModal} {data, labels, children} Modal's properties.
 * @returns {JSX.Element} Modal always will return JSX or TSX.
 */
function AlertModal({ data, labels, children }: IAlertModal) {
  const openModal = () => {
    modals.openConfirmModal({
      title: data.title,
      children: data.layout,
      labels: { confirm: labels.confirm, cancel: labels.cancel },
      onCancel: data.onCancel,
      onConfirm: data.onConfirm,
    });
  };

  return (
    <div onClick={openModal}>
      {children}
    </div>
  );
}

AlertModal.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    layout: PropTypes.node.isRequired,
  }).isRequired,
  labels: PropTypes.shape({
    confirm: PropTypes.string.isRequired,
    cancel: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default AlertModal;
