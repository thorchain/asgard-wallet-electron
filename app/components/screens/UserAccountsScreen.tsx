import React, { useMemo, useCallback } from 'react';
// import { useTracker } from 'meteor/react-meteor-data';
// import { UserAccount } from '/imports/api/collections/client_collections'
// import { UserAccountTypes } from '/imports/api/collections/userAccountCollection';

// import { WALLET } from '/imports/startup/client/init'
import { Row, Col, Typography, Button, Divider, Card, List } from 'antd';
const { Title, Text, Paragraph } = Typography

const userRecord = {
    _id: "MTbyhYhWysp25TDBy",
    address: "tbnb1vxutrxadm0utajduxfr6wd9kqfalv0dg2wnx5y",
    pwHash: "$2a$08$7p6Z3OwF7HuQdHoL3PnP8.0tgkkYZ5vl4XYv/ZkmhB9Jy7gT1GPuq",
    assets: [],
    keystore: {
      version: 1, id: "84a9e412-90a1-4076-8e7c-e516f78059ee", crypto: {}},
    locked: false
}
type ClientTypes = {network: string, chainId: string}
const UserAccountsScreen: React.FC = (): JSX.Element => {
  // TODO: Make reactive when we handle connection errors
  const client: ClientTypes = useMemo(() => {
    let obj
    try {
      // const res: any = WALLET.getClient() // Undefined source
      // obj = {chainId:res.chainId,network:res.network}
    } catch (error) {
      console.log(error) // TODO: Only for dev debugging, handle
      obj = {chainId:"",network:""}
    }
    // return obj
    return {chainId:"testing",network:"testing"}
  },[])
  // const userAccount: UserAccountTypes = useTracker(() => { return UserAccount.findOne()}, [])
  const userAccount: any = () => {
    return userRecord
  }

  const downloadLink: string = useMemo(() => {
    const keystore: string = window.localStorage.getItem('binance') || ""
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(keystore)
  }, [])

  const fileName = () => userAccount.address?.concat('-keystore.txt')

  const lockWallet = useCallback(async () => {
    console.log('locking wallet soon')
    try {
      // await WALLET.lock()
      // FlowRouter.go('walletUnlock')
    } catch (error) {
      console.log(error)
    }
  },[])
  const removeWallet = useCallback(async () => { 
    console.log('removing wallet soon...')
    try {
      // await WALLET.resetWallet()
      // FlowRouter.go('walletStart') 
    } catch (error) {
      console.log(error)
    }
  },[])

  return (<>
        <Title level={3}>Account</Title>
    <Row>
      <Col span={24}>

        <div className="ant-tabs-nav-container">
          <div className="ant-tabs-nav-wrap">
            <div className="ant-tabs-nav-scroll">
              <div className="ant-tabs-nav ant-tabs-nav-animated">
                  <div role="tab" aria-disabled="false" aria-selected="true" tabIndex={0} className=" ant-tabs-tab" id="tab-testnet" aria-controls="tabpane-testnet">
                    Testnet
                  </div>
                  <div role="tab" aria-disabled="false" aria-selected="false" tabIndex={-1} className="ant-tabs-tab-active ant-tabs-tab" id="tab-mainnet" aria-controls="tabpane-mainnet">
                    Mainnet
                  </div>
                  <div className="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style={{display:"block", transform: "translate3d(0px, 0px, 0px)", width: "87px;"}}></div>
              </div>
            </div>
          </div>
        </div>

        <Divider/>
  


        <Row>

          <Col md={{span:12}} lg={{span:12}} xl={{span:12}}>
            <Paragraph strong className="text-uppercase">Wallet Management</Paragraph>
            <Card>
            <Row>
              <Col span={12}>
                <Button type="ghost" shape="round" block onClick={lockWallet}>Lock Wallet</Button>
              </Col>
              <Col span={12}>
                <Button type="ghost" shape="round" block disabled={true}>View Phrase</Button>
              </Col>
              <Col span={12}>
                <Button type="ghost" shape="round" block href={downloadLink} download={fileName()}>Export Keystore</Button>
              </Col>
              <Col span={12}>
                <Button type="ghost" danger shape="round" block onClick={removeWallet}>Remove Wallet</Button>
              </Col>
            </Row>
            

            </Card>
            <Paragraph strong className="text-uppercase">Network Client</Paragraph>
            <Card>
              <Row>
                <Col md={{span:24}} lg={{span:12}}>
                  <Text strong>Account:</Text>
                  <Text ellipsis>{userAccount.address}</Text>
                </Col>
                <Col md={{span:24}} lg={{span:12}}>
                  <Text strong>Keystore Version:</Text>
                  <Paragraph>{userAccount?.keystore?.version}</Paragraph>
                </Col>
                <Col md={{span:24}} lg={{span:12}}>
                  <Text strong>Type:</Text>
                  <Paragraph className="text-capitalize">{client.network}</Paragraph>
                </Col>
                <Col md={{span:24}} lg={{span:12}}>
                  <Text strong>Chain ID:</Text>
                  <Paragraph className="text-capitalize">{client.chainId}</Paragraph>
                </Col>
              </Row>
            </Card>
        
        
          </Col>

          <Col sm={{span:24}} md={{span:12}} lg={{span:12}} xl={{span:12}}>
            <Paragraph strong className="text-uppercase">Wallet Accounts</Paragraph>
            {/* <List dataSource={[userRecord]}>

            </List> */}
            <Card title="Accounts">
              More
            </Card>
          </Col>

        </Row>
      
      </Col>

    </Row>
  </>)
}

export default UserAccountsScreen
