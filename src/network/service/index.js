import axios from 'axios';
import moment from 'moment';

const baseURL = 'https://sheet.best/api/sheets/8627d762-5d07-416d-b007-a39103906ae3';
const date = moment().format('DD/MM/YYYY HH:mm:ss')

export const submitForm = async (value, radioSelect1, radioSelect2, radioSelect3, signOther, presentOther) => {
  return await axios.post(baseURL, {
    A1: date,
    B1: value.fullname,
    C1: value.phone,
    D1: value.position,
    E1: radioSelect1,
    F1: radioSelect2,
    G1: radioSelect3,
    H1: value.nation,
    I1: `${value.sign14day.join(',').toString()}${signOther}`,
    J1: `${value.present.join(',').toString()}${presentOther}`,
    K1: value.agree[0]
  })
};