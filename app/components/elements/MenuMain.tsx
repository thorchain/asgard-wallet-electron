import React, { useState, useCallback } from 'react'
// import { useTracker } from 'meteor/react-meteor-data'
// import { WALLET } from '/imports/startup/client/init'
import { Menu, Button } from 'antd'
import { NavBar, Drawer } from 'antd-mobile'
import { MenuOutlined, WalletOutlined, SettingOutlined, LockOutlined} from '@ant-design/icons'

import './MenuStyles.less'
import logoImg from '../../assets/img/Asgard-Tri-White.png'

import NetworkIndicator from './NetworkIndicator'
import { Link } from 'react-router-dom'

const NavMenuMain: React.FC = (): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleChangeDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  const handleMenuClick = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (<>
    <NavBar
      className="navbar-mobile"
      mode="dark"
      leftContent={[
        <Link to="/">
          <img src={logoImg} className="float-left mr-2" style={{marginRight:"8px"}}width="28" height="28" alt="" />
          <strong className="font-brand text-uppercase">Asgard</strong><small className='text-color-secondary'>&nbsp;BETA</small>
        </Link>
      ]}
      rightContent={[
        <div key="0" style={{display:"flex",alignItems:"center"}}>
          <NetworkIndicator/>
          <Button>
            <SettingOutlined />
          </Button>
          <Button>
            <LockOutlined />
          </Button>
          <Button id="test-my-id" size="large" onClick={handleChangeDrawer}>
            <MenuOutlined/>
          </Button>
        </div>
      ]}
    >
      <div className="ant-tabs-nav-container">
        <div className="ant-tabs-nav-wrap">
          <div className="ant-tabs-nav-scroll">
            <div className="ant-tabs-nav ant-tabs-nav-animated">
                <div role="tab" aria-disabled="false" aria-selected="true" tabIndex={0} className=" ant-tabs-tab" id="tab-testnet" aria-controls="tabpane-testnet">
                  Swap
                </div>
                <div role="tab" aria-disabled="false" aria-selected="false" tabIndex={-1} className=" ant-tabs-tab" id="tab-mainnet" aria-controls="tabpane-mainnet">
                  Stake
                </div>
                <div role="tab" aria-disabled="false" aria-selected="false" tabIndex={-2} className="ant-tabs-tab-active ant-tabs-tab" id="tab-mainnet" aria-controls="tabpane-mainnet">
                  Wallet
                </div>
            </div>
          </div>
        </div>
      </div>
    </NavBar>
    <Drawer
      position="right"
      className="my-drawer"
      style={{ minHeight: document.documentElement.clientHeight }}
      contentStyle={{paddingTop: 42 }}
      sidebar={<TopMenu handler={handleMenuClick}/>}
      open={drawerOpen}
      onOpenChange={handleChangeDrawer}
    ><></></Drawer>
  </>)
}
export default NavMenuMain

const TopMenu: React.FC<{handler:()=>void}> = ({handler}): JSX.Element => {
  const [selected, setSelected] = useState([''])
  // useTracker(() => {
    // setSelected([FlowRouter.current().route.name])
    // FlowRouter.watchPathChange();
  // },[FlowRouter])
  const lockWallet = useCallback(async () => {
    console.log("locking wallet...")
    // await WALLET.lock()
    // FlowRouter.go('walletUnlock')
  },[])
  return (
    <Menu onClick={handler}
      selectedKeys={selected}
      theme="dark"
    >
      <Menu.Item key="walletCreate">
        <Link to="/wallet-create">Create</Link>
      </Menu.Item>
      <Menu.Item key="walletImport">
        <Link to="/wallet-import">Import</Link>
      </Menu.Item>
      <Menu.Item key="walletConnect">
        <Link to="/wallet-connect">Connect</Link>
      </Menu.Item>
      <Menu.Item key="userAssets">
        <Link to="/user-assets">Assets</Link>
      </Menu.Item>
      <Menu.Item key="walletTransactionsList">
        <Link to="/user-transactions">Transactions</Link>
      </Menu.Item>
      <Menu.Item key="walletSend">
        <Link to="/send-funds">Send</Link>
      </Menu.Item>
      <Menu.Item key="walletReceive">
        <Link to="/receive-funds">Receive</Link>
      </Menu.Item>
      <Menu.Item key="walletAccounts">
        <Link to="/user-accounts">Accounts</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Lock</Link>
      </Menu.Item>
    </Menu>
  )
}

