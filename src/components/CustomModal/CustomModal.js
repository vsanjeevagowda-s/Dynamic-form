import React, { Component } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import FiledSelectForm from './FieldSelectForm';

class CustomModal extends Component {
  render() {
    const {
      isModalOpen,
      handleModal,
      title
    } = this.props;
    return (
      <div>
        <Modal isOpen={isModalOpen}>
          <ModalHeader>
            {title}
            <span onClick={handleModal(false)} className='float-right cursor-pointer'>X</span>
          </ModalHeader>
          <ModalBody>
            {<FiledSelectForm />}
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
export default CustomModal;