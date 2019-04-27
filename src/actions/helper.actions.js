export const HANDLE_MODAL='HANDLE_MODAL';


export const handleModal = (flag, whichModal) => (dispatch) => {
  dispatch({
    type: HANDLE_MODAL,
    flag,
    whichModal,
  })
}