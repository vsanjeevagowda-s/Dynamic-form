import {
  ADD_THE_FIELD_TO_FORM,
} from '../actions/formFields.actions';

const initialState = {
  fields: [],
}

const formFields = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THE_FIELD_TO_FORM:
    let newArr = [...state.fields];
    newArr.push(action.field);
    return {
      ...state,
      fields: newArr,
    }
    default:
    return state
  }
};

export default formFields;