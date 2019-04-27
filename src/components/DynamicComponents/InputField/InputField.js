import React, { Component } from 'react';
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
    const { label } = this.props;
    return (
      <InputFiledLayout>
        <Label 
        for={label}>{label}
        </Label>
        <Input 
        type="text" 
        name={label}
        placeholder={`Enter ${label}`} />
      </InputFiledLayout>
    )
  }
};

export default InputField;