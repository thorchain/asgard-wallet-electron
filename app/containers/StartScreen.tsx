import React, { useEffect, useMemo } from 'react'
// import { FlowRouter } from 'meteor/kadira:flow-router'
// import { Session } from 'meteor/session'

import logoImg from '../assets/img/Asgard-Tri-Gradient.svg'

import { Row, Col, Button, Typography, Tabs } from 'antd'
import { withRouter, Link } from 'react-router-dom'
const { TabPane } = Tabs;
const { Title, Text } = Typography

const StartScreen: React.FC = (props:any): JSX.Element => {
  useEffect(() => {
    // if (!Session.get('network')) {
    //   Session.set('network', 'testnet')
    // }
  },[])
  const handleTabChange = (name:string) => {
    // Session.set('network', name)
  }
  const activeTab =  useMemo(() => {
    // return Session.get('network') || 'testnet'
    return 'testnet'
  },[])
  const goto = (route:string) => {
    console.log("going to route...", + route)
    props.history.push(route)
  }
  return (
    <Row>
      <Col xs={{span:12,offset:6}} md={{span:10,offset:7}} lg={{span:8,offset:8}} xl={{span:6,offset:9}}>
        {/* <img src="/img/Asgard-Tri-Gradient.svg" width="100%" style={{padding:"32px"}}/> */}
        <img src={logoImg} width="100%" style={{padding:"32px"}}/>
      </Col>
      <Col md={{span:16,offset:4}} lg={{span:12,offset:6}} xl={{span:10,offset:7}}>

        <Title className="font-brand" level={2}>Asgard Wallet</Title>
        <Tabs defaultActiveKey={activeTab} size="large" onChange={handleTabChange}>

          <TabPane tab="Testnet" key="testnet">

            <Button type="primary" size={'large'} className={'ant-btn-brand'} block onClick={() => goto('walletCreate')}> New </Button>
            <Button type="primary" size={'large'} block onClick={() => goto('walletImport')}> Import </Button>

          </TabPane>

          <TabPane tab="Mainnet" key="mainnet">

            <Button type="primary" size={'large'} className={'ant-btn-brand'} block onClick={() => goto('/create')}> New </Button>
            <Button type="primary" size={'large'} block onClick={() => goto('/import')}>Import</Button>
            <Link to="/connect">
              <Button type="primary" size="large" block>Connect</Button>
            </Link>

          </TabPane>

        </Tabs>

        <div>
          <Text strong>Attention:</Text>
          <p className="text-justify"> This beta software is provided for testing purposes as is, with no warranty.</p>
        </div>

      </Col>
    </Row>
  )
}
export default withRouter(StartScreen)
