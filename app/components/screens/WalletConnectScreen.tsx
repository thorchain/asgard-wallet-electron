import TransportNodeHid from "@ledgerhq/hw-transport-node-hid"
import { ledger, crypto } from '@binance-chain/javascript-sdk';
// import { WALLET } from '../../index'
// import Binance from '../binance'

import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, message, InputNumber, Button, Card, Typography } from 'antd';
const { Title } = Typography
import { CheckSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'
const { Meta } = Card

const WalletConnectScreen = (props:any) => {
  const [connecting, setConnecting] = useState(false);
  const [ledgerIndex, setLedgerIndex] = useState(0);
  const [isConnected, setIsConnected] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isAssetSelected, setIsAssetSelected] = useState(false)
  let history = useHistory();

  console.log('have wallet?')
  // console.log(Binance)

  const ledgerConnect = async () => {
    console.log('trying to connect ledger')
    setConnecting(true);

  //   // use the u2f transport
    const timeout = 50000;
    // const transport = await ledger.transports.u2f.create(timeout);
    const transport = await TransportNodeHid.create(timeout);
    const app = new ledger.app(transport, 100000, 100000);
  //   window.app = app;

  //   // get version
    try {
      const version = await app.getVersion();
      console.log('version', version);
    } catch ({ message, statusCode }) {
      console.error('version error', message, statusCode);
    }

    const hdPath = [44, 714, 0, 0, ledgerIndex];

    const _ = await app.showAddress('bnb', hdPath); // results

    // get public key
    let pk;
    try {
      message.success(
        <label style={{ color: '#50E3C2' }}>Please approve on your ledger</label>,
        5,
      );
      pk = (await app.getPublicKey(hdPath)).pk;

      // get address from pubkey
      // TODO: use "bnb" when on mainnet
      const address = crypto.getAddressFromPublicKey(
        pk,
        'bnb',
      );
      setConnecting(false);
      console.log("DID WE GET IT?")
      console.log(address)

    } catch (err) {
      console.error('pk error', err.message, err.statusCode);
      message.error('public key error' + err.message);
      setConnecting(false);
    }
  };
  const canConnect = useMemo(() => {
    return (!(isOpen && isAssetSelected && isConnected))
  },[isOpen,isAssetSelected,isConnected])

  return (<>
    <Row>
      <Col>
        <Title level={4}>Connect Ledger Wallet</Title>
        <Card style={{ marginBottom: 16 }} onClick={() => setIsConnected(!isConnected)}>
            <Meta
              avatar={ isConnected ? 
                <CheckSquareOutlined className="text-color-success" style={{fontSize:"36px"}}/>
                :
                <MinusSquareOutlined className="text-color-secondary" style={{fontSize:"36px"}}/>
              }
              title="1. Connect Ledger Device"
              description="Make sure your Ledger wallet is connect to your device"
            />
        </Card>
        <Card style={{ marginBottom: 16 }} onClick={() => setIsOpen(!isOpen)}>
            <Meta
              avatar={ isOpen ? 
                <CheckSquareOutlined className="text-color-success" style={{fontSize:"36px"}}/>
                :
                <MinusSquareOutlined className="text-color-secondary" style={{fontSize:"36px"}}/>
              }
              title="2. Unlock Ledger Wallet"
              description="Enter your PIN code on your Ledger wallet"
            />
        </Card>
        <Card style={{ marginBottom: 16 }} onClick={() => setIsAssetSelected(!isAssetSelected)}>
          <Meta
            avatar={ isAssetSelected ? 
              <CheckSquareOutlined className="text-color-success" style={{fontSize:"36px"}}/>
              :
              <MinusSquareOutlined className="text-color-secondary" style={{fontSize:"36px"}}/>
            }
            title="3. Select Asset: Binance"
            description="Select the Binance assete. Device should say 'ready'"
          />
        </Card>

        <p>
          Need help?
          <small>
            <a href="https://www.binance.org/static/guides/DEX-Ledger-Documentation.html" target="_blank" >
              App Installation & Usage Instructions
            </a>
          </small>
        </p>
        <p>
          <small>
            <a href="https://support.ledger.com/hc/en-us/articles/115005165269-Connection-issues-with-Windows-or-Linux" target="_blank" >
            Connection Issues
            </a>
          </small>
        </p>

        <div>
          <div style={{marginBottom:"12px"}}>4. Select Index Number</div>
          <InputNumber
            min={0}
            size="large"
            value={ledgerIndex}
            onChange={i => {
              setLedgerIndex(i);
            }}
          />
        </div>

        <Button
          type="primary"
          className="ledger-connect-btn"
          // onClick={ledgerConnect}
          onClick={() => history.push('/user-accounts')}
          loading={connecting}
          size="large"
          block
          disabled={canConnect}
        >
          Connect to Ledger
        </Button>

      </Col>
    </Row>
  </>);
};

export default WalletConnectScreen
