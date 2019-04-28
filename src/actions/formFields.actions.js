export const ADD_THE_FIELD_TO_FORM='ADD_THE_FIELD_TO_FORM';
export const REMOVE_THE_FIELD_FROM_FORM='REMOVE_THE_FIELD_FROM_FORM';

export const addFieldToForm = (field) => (dispatch) => {
  dispatch({
    type: ADD_THE_FIELD_TO_FORM,
    field,
  })
}

export const removeFieldFromForm = (fieldId) =>(dispatch) => (e) => {
  dispatch({
    type: REMOVE_THE_FIELD_FROM_FORM,
    fieldId,
  })
}
