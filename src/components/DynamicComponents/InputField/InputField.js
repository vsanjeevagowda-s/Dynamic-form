import React, { Component } from 'react';
import {
  connect
} from 'react-redux';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';



const InputFiledLayout = ({ children }) => {
  return (
    <Row className='bg-light mt-2'>
      <Col>
        <Form>
          <FormGroup>
            {children}
          </FormGroup>
        </Form>
      </Col>
    </Row>
  )
}

class InputField extends Component {

  render() {
    const { 
      label, 
      removeFieldFromForm, 
      id 
    } = this.props;
    return (
      <InputFiledLayout>
        <Label 
        for={label}>{label}
        </Label>
        <span 
        className='float-right cursor-pointer'
        onClick={removeFieldFromForm(id)}>x</span>
        <Input 
        type="text" 
        name={label}
        placeholder={`Enter ${label}`} />
      </InputFiledLayout>
    )
  }
};

const mapStateToProps = state => {
  return state;
}

const actions = {}

export default connect(mapStateToProps, actions)(InputField);