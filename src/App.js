import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CustomModal from './components/CustomModal';
import DynamicComp from './components/DynamicComponents';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const AppLayout = ({ children }) => {
  return <Row>
    <Col sm={3} xs={12} lg={3} />
    <Col>
      {children}
    </Col>
    <Col sm={3} xs={12} lg={3} />
  </Row>
};

const Header = ({
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
    const { fields } = this.props;
    console.log('fields', fields)
    return (
      <div>
        <Container fluid>
          <AppLayout>
            <Header handleModal={this.handleModal} />
            {fields.map(comp => {
              let Comp = DynamicComp[comp.compName];
              return <Comp key={comp.id} {...comp.props} />;
            })}
          </AppLayout>
          <CustomModal
            title='Select Component'
            isModalOpen={isModalOpen}
            handleModal={this.handleModal} />
        </Container>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { fields } = state.formFields;
  return {fields};
}

const actions = {}

export default connect(mapStateToProps, actions)(App);
