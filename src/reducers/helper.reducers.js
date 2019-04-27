import {
  HANDLE_MODAL
} from '../actions/helper.actions';

const initialState = {
  flag: '',
  whichModal: '',
}

const helper = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_MODAL:
    return {
      ...state,
      flag: action.flag,
      whichModal: action.whichModal,
    }
    default:
    return state;
  }
}

export default helper;