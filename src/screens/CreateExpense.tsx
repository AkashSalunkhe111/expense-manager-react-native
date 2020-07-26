import 'react-native-gesture-handler';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import moment from 'moment';
import { Dispatch } from 'redux';
import { NavigationEventSubscription } from 'react-navigation';
import Realm from 'realm';

import ScreenTemplate from './ScreenTemplate';
import Row from '../components/Row';
import Date from '../components/Date';
import { setDate } from '../redux/actions';
import { fontSize, colors } from '../config/constants';
import AddExpenseInput from '../components/AddExpenseInput';
import FloatingAddButton from '../components/FloatingAddButton';
import { getDateFromString, getExpensesForDate } from '../realm/utils';
import { ExpenseSchema } from '../realm/models';
import { ExpenseObj } from '../types/types';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
type Props = {
  navigation: NavigationDrawerProp;
  dispatch: Dispatch;
  date: string;
};

type State = {
  addExpenseMode: boolean;
  realm?: Realm;
  expenseData: ExpenseObj[];
};

class CreateExpense extends PureComponent<Props, State> {
  static navigationOptions = {
    title: 'Daily',
  };

  constructor(props) {
    super(props);

    this.state = {
      addExpenseMode: true,
      realm: null,
      expenseData: [],
    };
  }

  focusListener: NavigationEventSubscription;

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.setCurrentDate();
    });
    Realm.open({ schema: [ExpenseSchema], deleteRealmIfMigrationNeeded: true })
      .then(realm => {
        this.setState({ realm });
        realm.addListener('change', this.onUpdate);
        if (this.props.date) {
          this.setExpense(this.props.date);
        }
      })
      .catch(err => {
        // reject(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.date !== prevProps.date) {
      this.setExpense(this.props.date);
    }
  }

  componentWillUnmount() {
    this.focusListener.remove();
    if (this.state.realm) {
      this.state.realm.close();
    }
  }

  onUpdate = () => {
    this.setExpense(this.props.date);
  };

  setExpense = date => {
    const formattedDate = getDateFromString(date);
    getExpensesForDate(this.state.realm, formattedDate).then(
      (result: ArrayLike<unknown>) => {
        const resultArr = Array.from(result) as [];
        this.setState({ expenseData: resultArr });
      },
    );
  };

  setAddExpenseMode = (mode: boolean) => {
    this.setState({ addExpenseMode: mode });
  };

  setCurrentDate() {
    const currentDate = moment().format('DD/MM/YY');
    this.props.dispatch(setDate(currentDate));
  }

  incrementDate = () => {
    const newDate = moment(this.props.date, 'DD/MM/YY')
      .add(1, 'd')
      .format('DD/MM/YY');

    this.props.dispatch(setDate(newDate));
  };

  decrementDate = () => {
    const newDate = moment(this.props.date, 'DD/MM/YY')
      .subtract(1, 'd')
      .format('DD/MM/YY');

    this.props.dispatch(setDate(newDate));
  };

  renderExpense = ({ item }) => (
    <Row
      title={item.itemName}
      value={item.amount}
      style={styles.rowContainer}
      textStyle={styles.rowText}
    />
  );

  render() {
    const { date } = this.props;
    const { expenseData } = this.state;
    return (
      <ScreenTemplate>
        <Date
          date={date}
          incrementDate={this.incrementDate}
          decrementDate={this.decrementDate}
        />
        <FlatList
          data={expenseData}
          renderItem={this.renderExpense}
          keyExtractor={item => item.id}
          extraData={expenseData}
        />
        <FloatingAddButton setAddExpenseMode={this.setAddExpenseMode} />
        <AddExpenseInput
          setAddExpenseMode={this.setAddExpenseMode}
          addExpenseMode={this.state.addExpenseMode}
          date={date}
          realm={this.state.realm}
        />
      </ScreenTemplate>
    );
  }
}

function mapStateToProps(state) {
  return { date: state.selectedDate.date };
}

const styles = StyleSheet.create({
  rowContainer: { marginTop: 20, fontSize: fontSize.md },
  rowText: { color: colors.PURPLE_400, fontWeight: '700' },
});

export default connect(mapStateToProps)(CreateExpense);
