import React, { Component } from 'react'
import { connect } from 'react-redux';
import componentsList from '../../../componentList';
import {
  addFieldToForm
} from '../../../actions/formFields.actions';
import {
  handleModal
} from '../../../actions/helper.actions';
import {
  Row,
  Col,
  Form,
  Label,
  Input,
  FormGroup,
  Button
} from 'reactstrap';

class FiledSelectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFieldObj: componentsList[0],
    }
    this.handleOnLabelChange = this.handleOnLabelChange.bind(this);
    this.handleOnLabelChange = this.handleOnLabelChange.bind(this);
    this.addFieldToForm = this.addFieldToForm.bind(this);
    this.getTheSelectedObject = this.getTheSelectedObject.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.renderOptionsValues = this.renderOptionsValues.bind(this);
    this.addOptionField = this.addOptionField.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange = (i) => (e) => {
    console.log('this.state =>', this.state);
    const { selectedFieldObj } = this.state
    const newSelobj = JSON.parse(JSON.stringify(selectedFieldObj));
    newSelobj.props.options.map(item => {
      if (item.id === i) {
        item['value'] = item['label'] = e.target.value;
      }
      return item;
    });
    console.log('this.state / newOptions =>', this.state);
    this.setState({
      selectedFieldObj: newSelobj
    })
    console.log('after the state set', this.state);
  };

  addOptionField = () => (e) => {
    const { selectedFieldObj } = this.state;
    const obj = { ...selectedFieldObj };
    if (obj.props.options){
      obj.props.options.push({
        id: Math.random(),
        value: '',
        label: '',
      })
    }
    return this.setState({
      selectedFieldObj: obj,
    })
  }

  removeOptionField = (id) => (e) => {
    const { selectedFieldObj } = this.state;
    const obj = { ...selectedFieldObj };
    const newOpts = obj.props.options.filter(i => {
      return i.id !== id;
    });
    obj.props.options = newOpts;
    return this.setState({
      selectedFieldObj: obj
    })
  }

  renderOptionsValues = ({ value, id, label }) => {
    return (
      <React.Fragment key={id}>
        <Col sm={10}>
          <FormGroup>
            <Input
              type="text"
              value={value}
              name={label}
              onChange={this.handleOptionChange(id)}>
            </Input>
          </FormGroup>
        </Col>
        <Col sm={2}>
          <i 
          className="fa fa-minus-circle fa-2x"
          onClick={this.removeOptionField(id)}></i>
        </Col>
      </React.Fragment>
    )
  }

  renderOptions = () => {
    const { selectedFieldObj } = this.state;
    const { options } = selectedFieldObj.props;
    return (
      <Row>
        <Col sm={12} xs={12} lg={12}>
          <Label >Options</Label>
        </Col>
        { options.map(item => {
          return this.renderOptionsValues(item);
        }) }
        <Col sm={12}>
          <p 
          className='text-center text-primary underline cursor-pointer'
          onClick={this.addOptionField()}>Add option</p>
        </Col>
      </Row>
    )
  }

  getTheSelectedObject = (e) => {
    const obj = componentsList.filter(item => {
      return item.compName === e.target.value;
    })[0];
    return { ...obj };
  };

  handleOnSelectChange = () => (e) => {
    const selectedFieldObj = this.getTheSelectedObject(e);
    return this.setState({
      selectedFieldObj
    });
  };

  handleOnLabelChange = () => (e) => {
    const selectedFieldObj = { ...this.state.selectedFieldObj };
    selectedFieldObj.props.label = e.target.value;
    this.setState({
      selectedFieldObj
    });
  };

  addFieldToForm = () => () => {
    const { addFieldToForm, handleModal } = this.props;
    const { selectedFieldObj } = this.state;
    addFieldToForm({ ...selectedFieldObj, id: Date.now() });
    handleModal(false, 'fieldTypeSelect');
  };

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
            onChange={this.handleOnSelectChange()} >
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
            onChange={this.handleOnLabelChange()} />
        </FormGroup>
              { selectedFieldObj.props.options && this.renderOptions() }
        <Button color="primary" size="lg" block onClick={this.addFieldToForm()}>Add</Button>
      </Form>
    );
  }
};

const mapStateToProps = state => {
  return state;
};

const actions = {
  addFieldToForm,
  handleModal
};

export default connect(mapStateToProps, actions)(FiledSelectForm);