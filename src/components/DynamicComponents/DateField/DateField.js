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



const DateFieldLayout = ({ children }) => {
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

class DateField extends Component {

  render() {
    const { 
      label, 
      removeFieldFromForm, 
      id 
    } = this.props;
    return (
      <DateFieldLayout>
        <Label
          for={label}>
          {label}
        </Label>
        <span 
        className='float-right cursor-pointer'
        onClick={removeFieldFromForm(id)}>x</span>
        <Input
          type="date"
          name={label} />
      </DateFieldLayout>
    )
  }
};

const mapStateToProps = state => {
  return state;
}

const actions = {}

export default connect(mapStateToProps, actions)(DateField);