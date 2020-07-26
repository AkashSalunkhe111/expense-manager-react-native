import { combineReducers } from 'redux';
import addExpense from './addExpenses';
import selectedDate from './selectedDate';
import userInput from './userInput';

export default combineReducers({
  addExpense,
  selectedDate,
  userInput,
});
