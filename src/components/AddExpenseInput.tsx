import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { colors } from '../config/constants';
import { Input, Icon } from 'react-native-elements';
import {
  setUserInput,
  setUserInputError,
  clearUserInput,
} from '../redux/actions/userInput';
import { Dispatch } from 'redux';
import { userInputType } from '../types/types';
// import { createExpense, getAllExpense } from '../utils/realm';
import { addNewExpense, getDateFromString } from '../realm/utils';

type Props = {
  addExpenseMode: boolean;
  setAddExpenseMode: (mode: boolean) => void;
  userInput: userInputType;
  dispatch: Dispatch;
  date: string;
  realm: Realm;
};

class AddExpenseInput extends Component<Props> {
  RBSheet: any;

  componentDidMount() {
    if (this.props.addExpenseMode) {
      this.RBSheet.open();
    }
  }

  componentDidUpdate() {
    if (this.props.addExpenseMode) {
      this.RBSheet.open();
    }
  }

  changeHandler(parameter, value: string | number) {
    const { dispatch } = this.props;

    if (parameter === 'itemName') {
      dispatch(setUserInputError('itemNameError', null));
    }
    if (parameter === 'amount') {
      dispatch(setUserInputError('amountError', null));
    }
    this.props.dispatch(setUserInput(parameter, value));
  }

  submitHandler = () => {
    const { date, userInput, realm, dispatch } = this.props;
    const { itemName, amount } = userInput;
    if (itemName === '') {
      dispatch(setUserInputError('itemNameError', 'Please Enter Item Name'));
      return;
    }

    if (amount === '') {
      dispatch(setUserInputError('amountError', 'Please Enter Amount'));
      return;
    }

    console.log(itemName, amount);
    const formattedDate = getDateFromString(date);
    addNewExpense(realm, itemName, Number(amount), formattedDate).then(
      result => {
        dispatch(clearUserInput());
        console.log(result, 'resolved result');
      },
    );
  };

  render() {
    const { userInput, date } = this.props;
    const { itemName, amount, itemNameError, amountError } = userInput;
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        onClose={() => this.props.setAddExpenseMode(false)}
        height={165}
        openDuration={200}
        customStyles={{
          container: styles.sheetContainer,
        }}>
        <View style={styles.inputContainer}>
          <View style={styles.nameInputContainer}>
            <Input
              placeholder="Enter Name"
              value={itemName}
              placeholderTextColor={colors.PURPLE_400}
              inputStyle={{ color: colors.PURPLE_400 }}
              onChangeText={this.changeHandler.bind(this, 'itemName')}
              errorMessage={itemNameError}
              errorStyle={{ color: colors.RED_400 }}
            />
          </View>
          <View style={styles.amountInputContaier}>
            <Input
              placeholder="Amount"
              keyboardType="numeric"
              value={amount}
              placeholderTextColor={colors.PURPLE_400}
              inputStyle={{ color: colors.PURPLE_400 }}
              onChangeText={this.changeHandler.bind(this, 'amount')}
              errorMessage={amountError}
              errorStyle={{ color: colors.RED_400 }}
            />
          </View>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.submitHandler}>
            <Icon
              name="check-circle"
              type="font-awesome"
              size={45}
              color={colors.PURPLE_400}
            />
          </TouchableOpacity>
        </View>
      </RBSheet>
    );
  }
}

function mapStateToProps(state) {
  return { userInput: state.userInput };
}

const styles = StyleSheet.create({
  sheetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK_300,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInputContainer: { flex: 1, flexBasis: '50%' },
  amountInputContaier: { flex: 1, flexBasis: '30%' },
  iconContainer: {
    flex: 1,
    flexBasis: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
});

export default connect(mapStateToProps)(AddExpenseInput);
