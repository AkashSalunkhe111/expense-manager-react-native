import { actionTypes } from '../../config/constants';
import { userInputType } from '../../types/types';

const initialState: userInputType = {
  itemName: '',
  itemNameError: null,
  amount: '',
  amountError: null,
  type: '',
};

const userInput = (state: userInputType = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case actionTypes.SET_USER_INPUT:
      return {
        ...state,
        [payload.parameter]: payload.value,
      };
    case actionTypes.SET_USER_INPUT_ERROR:
      return {
        ...state,
        [payload.parameter]: payload.error,
      };
    case actionTypes.CLEAR_USER_INPUT:
      return initialState;
    default:
  }
  return state;
};

export default userInput;
