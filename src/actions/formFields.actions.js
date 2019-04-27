export const ADD_THE_FIELD_TO_FORM='ADD_THE_FIELD_TO_FORM';


export const addFieldToForm = (field) => (dispatch) => {
  dispatch({
    type: ADD_THE_FIELD_TO_FORM,
    field,
  })
}
