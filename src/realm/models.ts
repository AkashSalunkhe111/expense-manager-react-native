export const ExpenseSchema = {
  name: 'Expense',
  properties: {
    id: 'string',
    itemName: 'string',
    amount: 'int',
    date: 'date',
    type: 'string?',
  },
};
