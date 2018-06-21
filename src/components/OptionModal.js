import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.modalLogic}
      contentLabel='Selected Option'
      onRequestClose={props.handlerCloseModal}
      closeTimeoutMS={300}
      className='modal'
    >
      <h3 className='modal__title'>Selected Option</h3>
      <p className='modal__option'>{props.modalLogic}</p>
      <button
        className='button'
        onClick={props.handlerCloseModal}
      >Okey</button>
    </Modal>
  )
}

export default OptionModal;