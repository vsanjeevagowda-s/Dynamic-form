import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CustomModal from './components/CustomModal';
import DynamicComp from './components/DynamicComponents';
import {
  handleModal
} from './actions/helper.actions';
import {
  removeFieldFromForm
} from './actions/formFields.actions';
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
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = (flag) => () => {
    const { handleModal } = this.props;
    handleModal(flag, 'fieldTypeSelect');
  };

  render() {
    const {
      fields,
      flag,
      whichModal,
      removeFieldFromForm
    } = this.props;
    return (
      <div>
        <Container fluid>
          <AppLayout>
            <Header handleModal={this.handleModal} />
            {fields.map(comp => {
              let Comp = DynamicComp[comp.compName];
              return <Comp key={comp.id} {...comp.props} id={comp.id} removeFieldFromForm={removeFieldFromForm} />;
            })}
          </AppLayout>
          {(whichModal === 'fieldTypeSelect') && <CustomModal
            title='Select Component'
            isModalOpen={flag}
            handleModal={this.handleModal} />}
        </Container>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { fields } = state.formFields;
  const { flag, whichModal } = state.helper;
  return { fields, flag, whichModal };
}

const actions = {
  handleModal,
  removeFieldFromForm
}

export default connect(mapStateToProps, actions)(App);
