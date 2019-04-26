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

export default SelectField;