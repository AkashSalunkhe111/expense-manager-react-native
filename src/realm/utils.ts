import Realm from 'realm';
import moment from 'moment';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

import { ExpenseSchema } from './models';

export const addNewExpense = (
  realm: Realm,
  itemName: string,
  amount: number,
  date: Date,
  type?: string,
) => {
  return new Promise((resolve, reject) => {
    try {
      realm.write(() => {
        //   Create
        const newExpense = realm.create('Expense', {
          id: uuidv4(),
          itemName: itemName,
          amount: amount,
          date: date,
          type: type || null,
        });
        console.log(newExpense);
        
        resolve(newExpense);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const getExpensesForDate = (realm: Realm, date: Date) => {
  return new Promise((resolve, reject) => {
    try {
      let expense = realm.objects('Expense');
      let allExpense = expense.filtered('date = $0', date);
      resolve(allExpense);
    } catch (err) {
      reject(err);
    }
  });
};

export const getDateFromString = (dateStr: string) => {
  const momentDate = moment(dateStr, 'DD/MM/YY');
  return momentDate.toDate();
};
