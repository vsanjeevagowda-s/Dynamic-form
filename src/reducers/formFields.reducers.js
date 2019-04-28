import {
  ADD_THE_FIELD_TO_FORM,
  REMOVE_THE_FIELD_FROM_FORM
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
    case REMOVE_THE_FIELD_FROM_FORM:
      let newFields = state.fields.filter(i => i.id !== action.fieldId)
      return {
        ...state,
        fields: newFields,
      }
    default:
      return state
  }
};

export default formFields;