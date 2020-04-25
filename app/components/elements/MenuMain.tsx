import React, { useState, useCallback } from 'react'
// import { useTracker } from 'meteor/react-meteor-data'
// import { WALLET } from '/imports/startup/client/init'
import { Menu, Button } from 'antd'
import { NavBar, Drawer } from 'antd-mobile'
import { MenuOutlined } from '@ant-design/icons'

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
      rightContent={[
        <div key="0" style={{display:"flex",alignItems:"center"}}>
          <NetworkIndicator/>
          <Button id="test-my-id" size="large" onClick={handleChangeDrawer}>
            <MenuOutlined/>
          </Button>
        </div>
      ]}
    >
      <Link to="/">
      {/* <a href={FlowRouter.path('home')} key="0"> */}
        <img src={logoImg} className="float-left mr-2" width="28" height="28" alt="" />
        <strong className="font-brand text-uppercase">Asgard</strong><small className='text-color-secondary'>&nbsp;BETA</small>
      {/* </a> */}
      </Link>
    </NavBar>
    <Drawer
      position="top"
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
      <Menu.Item key="walletAssets">
        <Link to="/user-assets">Assets</Link>
        {/* <a href="" onClick={() => FlowRouter.go('walletAssets')}>Assets</a> */}
      </Menu.Item>
      <Menu.Item key="walletTransactionsList">
        <Link to="/user-assets">Assets</Link>
        {/* <a href="" onClick={() => FlowRouter.go('walletTransactionsList')}>Transactions</a> */}
      </Menu.Item>
      <Menu.Item key="walletSend">
        <Link to="/user-assets">Assets</Link>
        {/* <a href="" onClick={() => FlowRouter.go('walletSend')}>Send Funds</a> */}
      </Menu.Item>
      <Menu.Item key="walletReceive">
        <Link to="/user-assets">Assets</Link>
        {/* <a href="" onClick={() => FlowRouter.go('walletReceive')}>Receive Funds</a> */}
      </Menu.Item>
      <Menu.Item key="walletAccounts">
        <Link to="/user-assets">Assets</Link>
        {/* <a href="" onClick={() => FlowRouter.go('walletAccounts')}>Accounts</a> */}
      </Menu.Item>
      <Menu.Item>
        <Link to="/user-assets">Assets</Link>
        {/* <a href="" onClick={lockWallet}>Lock</a> */}
      </Menu.Item>
    </Menu>
  )
}

