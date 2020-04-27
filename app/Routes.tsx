import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './containers/App';

import MissingRouteScreen from './components/screens/MissingRouteScreen'

import BareLayout from './containers/BareLayout';
import MainLayout from './containers/MainLayout';

import MenuMain from './components/elements/MenuMain';
import FooterMain from './components/elements/FooterMain';

import StartScreen from './components/screens/StartScreen';

import WalletCreateScreen from './components/screens/WalletCreateScreen';
import WalletImportScreen from './components/screens/WalletImportScreen';
import WalletConnectScreen from './components/screens/WalletConnectScreen';
import WalletUnlockScreen from './components/screens/WalletUnlockScreen';

import UserAccountsScreen from './components/screens/UserAccountsScreen';
import UserAssetsScreen from './components/screens/UserAssetsScreen';
import UserAssetDetailsScreen from './components/screens/UserAssetDetailsScreen';
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
          <MainLayout header={<MenuMain />} content={<WalletCreateScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/wallet-import">
          <MainLayout header={<MenuMain />} content={<WalletImportScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/wallet-connect">
          <MainLayout header={<MenuMain />} content={<WalletConnectScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/user-assets">
          <MainLayout header={<MenuMain />} content={<UserAssetsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/user-asset-details">
          <MainLayout header={<MenuMain />} content={<UserAssetDetailsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/user-transactions">
          <MainLayout header={<MenuMain />} content={<UserTransactionsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/user-accounts">
          <MainLayout header={<MenuMain />} content={<UserAccountsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/send-funds">
          <MainLayout header={<MenuMain />} content={<SendFundsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/receive-funds">
          <MainLayout header={<MenuMain />} content={<ReceiveFundsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/freeze-funds">
          <MainLayout header={<MenuMain />} content={<FreezeFundsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/unfreeze-funds">
          <MainLayout header={<MenuMain />} content={<UnfreezeFundsScreen />} footer={<FooterMain/>} />
        </Route>
        <Route exact path="/wallet-unlock">
          <MainLayout header={<MenuMain />} content={<WalletUnlockScreen />} footer={<FooterMain/>} />
        </Route>
        <Route path="*">
            <MainLayout header={<MenuMain />} content={<MissingRouteScreen />} footer={<FooterMain/>} />
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
