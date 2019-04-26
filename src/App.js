import React, { Component } from 'react';
import './App.css';
import CustomModal from './components/CustomModal';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class InputField extends Component {
  render() {
    return (
      <Row className='bg-light mt-2'>
        <Col>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Text field" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}

class SelectField extends Component {
  render() {
    return (
      <Row className='bg-light mt-2'>
        <Col>
          <Form>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}

const Header = ({
  toggle,
  isOpen,
  handleModal
}) => {
  return (
    <Row>
      <Col className='bg-dark text-white p-2'>
        <span className='h4'>Form</span>
        <span onClick={handleModal(true)} className='float-right'>
          <i className="fa fa-plus-square fa-2x"></i>
        </span>
      </Col>
    </Row>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = (flag) => () => {
    this.setState({
      isModalOpen: flag,
    })
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm={3} xs={12} lg={3} />
            <Col>
              <Header handleModal={this.handleModal} />
              <SelectField />
              <InputField />
            </Col>
            <Col sm={3} xs={12} lg={3} />
          </Row>
          <CustomModal
            isModalOpen={isModalOpen}
            handleModal={this.handleModal} />
        </Container>
      </div>
    );
  }
}

export default App;
