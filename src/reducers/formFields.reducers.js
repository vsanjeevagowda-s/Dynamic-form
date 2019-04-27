import {
  ADD_THE_FIELD_TO_FORM,
} from '../actions/formFields.actions';

const componentsList = [
  {
    id: 1,
    selectLabel: 'Input field',
    compName: 'InputField',
    props: {
      label: 'a'
    }
  },
  {
    id: 2,
    selectLabel: 'Input field',
    compName: 'InputField',
    props: {
      label: 'a'
    }
  }
];

const initialState = {
  fields: componentsList,
}

const formFields = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THE_FIELD_TO_FORM:
    return {
      ...state
    }
    default:
    return state
  }
};

export default formFields;