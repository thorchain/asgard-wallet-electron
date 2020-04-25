import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/App';

import MissingRouteScreen from './components/screens/MissingRouteScreen'

import BareLayout from './containers/BareLayout';
import MainLayout from './containers/MainLayout';

import MenuMain from './components/elements/MenuMain'

import StartScreen from './components/screens/StartScreen';

import WalletCreateScreen from './components/screens/WalletCreateScreen';
import WalletImportScreen from './components/screens/WalletImportScreen';
import WalletConnectScreen from './components/screens/WalletConnectScreen';
import WalletUnlockScreen from './components/screens/WalletUnlockScreen';

import UserAccountsScreen from './components/screens/UserAccountsScreen';
import UserAssetsScreen from './components/screens/UserAssetsScreen';
import UserAssetDetailsScreen from './components/screens/UserAssetsScreen';
import UserTransactionsScreen from './components/screens/UserTransactionsScreen';
import FreezeFundsScreen from './components/screens/FreezeFundsScreen'
import UnfreezeFundsScreen from './components/screens/UnfreezeFundsScreen'

import SendFundsScreen from './components/screens/SendFundsScreen';
import ReceiveFundsScreen from './components/screens/ReceiveFundsScreen';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path="/">
          <BareLayout content={<StartScreen />} />
        </Route>
        <Route exact path="/wallet-create">
          <MainLayout header={<MenuMain />} content={<WalletCreateScreen />} />
        </Route>
        <Route exact path="/wallet-import">
          <MainLayout header={<MenuMain />} content={<WalletImportScreen />} />
        </Route>
        <Route exact path="/wallet-connect">
          <MainLayout header={<MenuMain />} content={<WalletConnectScreen />} />
        </Route>
        <Route exact path="/user-assets">
          <MainLayout header={<MenuMain />} content={<UserAssetsScreen />} />
        </Route>
        <Route exact path="/user-asset-details">
          <MainLayout header={<MenuMain />} content={<UserAssetDetailsScreen />} />
        </Route>
        <Route exact path="/user-transactions">
          <MainLayout header={<MenuMain />} content={<UserTransactionsScreen />} />
        </Route>
        <Route exact path="/user-accounts">
          <MainLayout header={<MenuMain />} content={<UserAccountsScreen />} />
        </Route>
        <Route exact path="/send-funds">
          <MainLayout header={<MenuMain />} content={<SendFundsScreen />} />
        </Route>
        <Route exact path="/receive-funds">
          <MainLayout header={<MenuMain />} content={<ReceiveFundsScreen />} />
        </Route>
        <Route exact path="/freeze-funds">
          <MainLayout header={<MenuMain />} content={<FreezeFundsScreen />} />
        </Route>
        <Route exact path="/unfreeze-funds">
          <MainLayout header={<MenuMain />} content={<UnfreezeFundsScreen />} />
        </Route>
        <Route exact path="/wallet-unlock">
          <MainLayout header={<MenuMain />} content={<WalletUnlockScreen />} />
        </Route>
        <Route path="*">
            <MainLayout header={<MenuMain />} content={<MissingRouteScreen />} />
          </Route>
      </Switch>
    </App>
  );
}

/*

routes:

user-asset-details
recieve-funds
send-funds
freeze-funds
unfreeze-funds
wallet-create
wallet-import
wallet-connect
*/
