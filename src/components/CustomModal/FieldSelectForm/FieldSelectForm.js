import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  addFieldToForm
} from '../../../actions/formFields.actions';
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button
} from 'reactstrap';

const componentsList = [
  {
    id: 1,
    selectLabel: 'Input field',
    compName: 'InputField',
    props: {
      label: ''
    }
  },
  {
    id: 2,
    selectLabel: 'Date field',
    compName: 'DateField',
    props: {
      label: ''
    }
  }
];

class FiledSelectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFieldObj: componentsList[0],
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.addFieldToForm = this.addFieldToForm.bind(this);
  }

  handleOnChange = () => (e) => {
    let selectedFieldObj = {};
    switch (e.target.name) {
      case 'componentType':
        selectedFieldObj = componentsList.filter(item => {
          return item.compName === e.target.value;
        })[0];
        break;
      case 'componentLabel':
      selectedFieldObj = {...this.state.selectedFieldObj};
      selectedFieldObj.props.label = e.target.value;
        break;
      default:
        selectedFieldObj = {};
    }
    this.setState({
      selectedFieldObj
    });
    console.log('state', this.state);
  }

  addFieldToForm = () => () => {
    const { addFieldToForm } = this.props;
    const { selectedFieldObj } = this.state;
    addFieldToForm({ ...selectedFieldObj });
  }

  render() {
    const { selectedFieldObj } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label >Component Type</Label>
          <Input
            type="select"
            name='componentType'
            value={selectedFieldObj.compName}
            onChange={this.handleOnChange()} >
            {componentsList.map(item =>
              <option value={item.compName} key={item.id}>{item.selectLabel}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Component Label</Label>
          <Input 
          type="text" 
          value={selectedFieldObj.props.label}
          name='componentLabel' 
          onChange={this.handleOnChange()} />
        </FormGroup>
        <Button color="primary" size="lg" block onClick={this.addFieldToForm()}>Add</Button>
      </Form>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

const actions = {
  addFieldToForm
}

export default connect(mapStateToProps, actions)(FiledSelectForm);