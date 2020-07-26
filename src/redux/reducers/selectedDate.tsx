import { actionTypes } from '../../config/constants';

type initialState = {
  date: string;
  month: string;
  year: string;
};

const initialState: initialState = {
  date: '',
  month: '',
  year: '',
};

const selectedDate = (state: initialState = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
  }
  return state;
};

export default selectedDate;
