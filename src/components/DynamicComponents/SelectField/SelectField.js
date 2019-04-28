import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class SelectField extends Component {
  render() {
    console.log('SelectField', this.props);
    const {
      label,
      removeFieldFromForm,
      id,
      options,
    } = this.props;
    return (
      <Row className='bg-light mt-2'>
        <Col>
          <Form>
            <FormGroup>
              <Label for={label}>{label}</Label>
              <span
                className='float-right cursor-pointer'
                onClick={removeFieldFromForm(id)}>x</span>
              <Input type="select" name="select" id="exampleSelect">
                {options.map(opt => {
                  return <option value={opt.value}>{opt.label}</option>
                })}
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default SelectField;