import { SUBMIT_FORM_SUCCESS } from './actionTypes';

export const submitSuccess = (fullname,date) => {
  return {
    type: SUBMIT_FORM_SUCCESS,
    payload: {
      fullname,
      date
    }
  }
}