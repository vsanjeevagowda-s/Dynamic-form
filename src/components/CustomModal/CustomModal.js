import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class CustomModal extends Component {



  render() {
    const {
      isModalOpen,
      handleModal
    } = this.props;
    return (
      <div>
        <Modal isOpen={isModalOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something
            </Button>
            <Button color="secondary" onClick={handleModal(false)}>Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default CustomModal;