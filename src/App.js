import React, { Component } from 'react';
import './App.scss';
import 'react-bootstrap/dist/react-bootstrap.min';
import Router from './App/Routers'
import {configureStore} from './App/Redux/Store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

class App extends Component {
  render() {
    const {store, persistStor} = configureStore()
    return (
      <React.Fragment>
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistStor} >
            <Router/>
          </PersistGate>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
