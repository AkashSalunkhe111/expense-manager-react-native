import {actionTypes} from '../../config/constants';

export const setDate = (date: string) => {
  return {
    type: actionTypes.SET_SELECTED_DATE,
    payload: date,
  };
};
