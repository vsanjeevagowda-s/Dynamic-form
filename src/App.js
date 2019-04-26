import React, { Component } from 'react';
import './App.css';
import CustomModal from './components/CustomModal';
import DynamicComp from './components/DynamicComponents';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

console.log(DynamicComp);

const componentsList = [
  {
    id: 1,
    name: 'InputField'
  }
]

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
      isModalOpen: false,
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
              {componentsList.map(comp => {
                let Comp = DynamicComp[comp.name];
                return <Comp />
              })}
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
