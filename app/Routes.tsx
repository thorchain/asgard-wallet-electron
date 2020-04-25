import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import routes from './constants/routes.json';

import BareLayout from './containers/BareLayout';
import MainLayout from './containers/MainLayout';

import MenuMain from './components/elements/MenuMain'

import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import StartScreen from './containers/StartScreen';
import ConnectScreen from './components/screens/ConnectScreen';
import UserAccountScreen from './components/screens/UserAccountsScreen';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/start">
          <BareLayout content={<StartScreen />} />
        </Route>
        <Route path="/connect">
          <MainLayout header={<MenuMain />} content={<ConnectScreen />} />
        </Route>
        <Route path="/user-accounts">
          <MainLayout header={<MenuMain />} content={<UserAccountScreen />} />
        </Route>
      </Switch>
    </App>
  );
}
