import { actionTypes } from '../../config/constants';

export const setUserInput = (parameter: string, value: string | number) => {
  return {
    type: actionTypes.SET_USER_INPUT,
    payload: {
      parameter,
      value,
    },
  };
};

export const setUserInputError = (parameter: string, error: string) => {
  return {
    type: actionTypes.SET_USER_INPUT_ERROR,
    payload: { parameter, error },
  };
};

export const clearUserInput = () => {
  return {
    type: actionTypes.CLEAR_USER_INPUT,
  };
};
