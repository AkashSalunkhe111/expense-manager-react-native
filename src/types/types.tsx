export type userInputType = {
  itemName: string;
  amount: string;
  type?: string;
  itemNameError?: string;
  amountError?: string;
};

export type ExpenseObj = {
  id: string;
  itemName: string;
  amount: string;
  type?: string;
  date: string;
};
