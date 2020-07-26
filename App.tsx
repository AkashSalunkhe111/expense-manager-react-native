import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';

import store from './src/redux/store/store';
import DrawerNavigator from './src/navigators/rootNavigator';

const AppContainer = createAppContainer(DrawerNavigator);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;
