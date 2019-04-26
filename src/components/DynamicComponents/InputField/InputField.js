import React, { Component } from 'react';
import {
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
};

export default InputField;