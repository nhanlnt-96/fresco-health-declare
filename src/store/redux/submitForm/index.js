import { SUBMIT_FORM_SUCCESS } from './actionTypes';

const initialState = {
  fullname: '',
  date: ''
};

const submitFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_SUCCESS:
      return {
        fullname: action.payload.fullname,
        date: action.payload.date
      }
    default:
      return state;
  }
}

export default submitFormReducer;