import React, { useMemo, useCallback } from 'react';
// import { useTracker } from 'meteor/react-meteor-data';
// import { UserAccount } from '/imports/api/collections/client_collections'
// import { UserAccountTypes } from '/imports/api/collections/userAccountCollection';

// import { WALLET } from '/imports/startup/client/init'
import { Row, Col, Typography, Button, Divider } from 'antd';
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
const UserAccountScreen: React.FC = (): JSX.Element => {
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

  return (
    <Row>
      <Col>
        <Title level={3}>Account</Title>

        <Paragraph strong className="text-uppercase" style={{marginBottom:"-1em", marginTop:"1.5em"}}>Details</Paragraph>
        <Divider/>
        <Row>
          <Col sm={{span:24}} md={{span:12}} lg={{span:6}}>
            <Text strong>Account:</Text>
            <Text ellipsis>{userAccount.address}</Text>
          </Col>
          <Col md={{span:12}} lg={{span:6}}>
            <Text strong>Keystore Version:</Text>
            <Paragraph>{userAccount?.keystore?.version}</Paragraph>
          </Col>
          <Col md={{span:12}} lg={{span:6}}>
            <Text strong>Type:</Text>
            <Paragraph className="text-capitalize">{client.network}</Paragraph>
          </Col>
          <Col md={{span:12}} lg={{span:6}}>
            <Text strong>Chain ID:</Text>
            <Paragraph className="text-capitalize">{client.chainId}</Paragraph>
          </Col>
        </Row>
  
        <Divider/>

        <Row>

          <Col md={{span:16,offset:4}} lg={{span:14,offset:5}} xl={{span:12,offset:6}}>
        
            <Title level={4}>Wallet Management</Title>
            <Button type="primary" size="large" block onClick={lockWallet} style={{marginTop:"32px",marginBottom:"32px"}}>Lock Wallet</Button>
            <Button type="primary" size="large" block disabled={true}>View Phrase</Button>
            <a href={downloadLink} download={fileName()} className="ant-btn ant-btn-lg ant-btn-primary" style={{width:'100%'}}>Export Keystore</a>
            <Button type="danger" size="large" block onClick={removeWallet}>Remove Wallet</Button>
        
          </Col>

        </Row>
      
      </Col>

    </Row>
  )
}

export default UserAccountScreen
