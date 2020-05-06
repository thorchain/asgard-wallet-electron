import React, { useMemo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CircleIcon, { Sizes } from '../elements/CircleIcon/circleIcon'
import Block from '../elements/Block'
import { Row, Col, Typography, Divider, Button, Card } from 'antd'
const { Title } = Typography

import { shortSymbol } from '../helpers/tokenHelpers'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// const UserAssetDetailsScreen: React.FC = (): JSX.Element => {
//   let query = useQuery()
//   return (
//     <Row>
//       <Col>
//         <h1>
//           Asset Details for: {query.get('symbol')}
//         </h1>
//         <ul>
//           <li>
//             <Link to="/send-funds">Send Funds</Link>
//           </li>
//           <li>
//             <Link to="/receive-funds">Receive Funds</Link>
//           </li>
//           <li>
//             <Link to="/freeze-funds">Freeze Funds</Link>
//           </li>
//           <li>
//             <Link to="/unfreeze-funds">Unfreeze Funds</Link>
//           </li>
//         </ul>
//       </Col>
//     </Row>
//   )
// }

// export default UserAssetDetailsScreen;

// import React from 'react'
// import { useTracker } from 'meteor/react-meteor-data'
// import { UserAssets } from '/imports/api/collections/client_collections'
import { UserAssetType } from '../../api/WalletController/storage/UserAccounts/UserAssetType'
import { AssetService } from '../../api/WalletController/storage/assetsService'
import { TransactionService } from '../../api/WalletController/storage/transactionsService'
// import { UserTransactions } from '/imports/api/collections/client_collections'
// import { UserTransactionTypes } from '/imports/api/collections/userTransactionsCollection'
// import { TokenData } from '/imports/api/collections/client_collections'
// import { TokenDataTypes } from '/imports/api/collections/tokenDataCollection'

import TransactionsTable from '../elements/transactions/TransactionsTable'

const UserAssets = new AssetService()
const UserTransactions = new TransactionService()

// type Props = {symbol: string}
const UserAssetDetailsScreen: React.FC = (): JSX.Element => {
  const [asset, setAsset ] = useState<UserAssetType>({symbol:"",free:0,frozen:0,locked:0,full:0})
  const [txs, setTxs] = useState<any>([])
  let query = useQuery()
  const symbol = query.get('symbol')
  async function setData () {
    const asset: any = await UserAssets.findOne({symbol: symbol})
    asset.full = parseFloat(res.free) + parseFloat(res.locked) + parseFloat(res.frozen)
    setAsset(asset)
    const txs = UserTransactions.find({where:{txAsset:symbol},sort: {timeStamp: -1}})
    setTxs(txs)
  }
  useEffect(() => {
    setData()
  }, [UserAssets]);
  // const token: TokenDataTypes = useTracker(() => {
  //   return TokenData.findOne({symbol: symbol})
  // },[])
  // const userTransactions: UserTransactionTypes[] = useTracker(() => {
  //   return UserTransactions.find({txAsset:symbol},{sort: {timeStamp: -1}}).fetch()
  // }, [])
  const freezable = () => asset.free > 0
  const unfreezable = () => asset.frozen > 0
  const sendable = () =>  asset.free > 0
  const goRoute = (route: string) => {
    const params = {symbol:symbol}
    switch (route) {
      case 'walletSend':
        // sendable() && FlowRouter.go(route,params)
        break;
      case 'walletFreeze':
        // freezable() && FlowRouter.go(route,params)
        break;
      case 'walletUnfreeze':
        // unfreezable() && FlowRouter.go(route,params)
        break;
      case 'walletReceive':
        // FlowRouter.go(route)
        break;
    
      default:
        break;
    }

  }

  return (
    <Row>
      <Col span={24} md={{span:16,offset:4}} lg={{span:12,offset:6}}>
        <Block layout vertical center>
          <Card bordered={false}>
            <CircleIcon shortSymbol={shortSymbol(asset?.symbol)} size={Sizes.lg} />
          </Card>
          <Title level={4}>NAME: {shortSymbol(asset?.symbol)}</Title>
          <div>{asset.symbol}</div>
          <Title level={3}>{asset?.full?.toLocaleString()} <small>{shortSymbol(asset.symbol)}</small></Title>
        </Block>
      </Col>

      <Col span={24} md={{span:16,offset:4}} lg={{span:12,offset:6}}>
        <Block layout justifyAround>

          <Block layout vertical center>
            <div>Free:</div>
            <Title level={4}>{asset?.free?.toLocaleString()}</Title>
          </Block>

          <Block layout vertical center>
            <div>Frozen:</div>
            <Title level={4}>{asset?.frozen?.toLocaleString()}</Title>
          </Block>

          <Block layout vertical center>
            <div>Locked:</div>
            <Title level={4}>{asset?.locked?.toLocaleString()}</Title>
          </Block>

        </Block>
      </Col>

      <Divider/>

      <Col span={24} md={{span:16,offset:4}} lg={{span:12,offset:6}}>

        <Row>

          <Col span={12}>
            <Button type="primary" size="large" block disabled={(!sendable())} onClick={() => goRoute('walletSend')}>Send</Button>
            <Block layout vertical center>
              <Button type="link" block disabled={(!freezable())} onClick={() => goRoute('walletFreeze')}>Freeze</Button>
              <small>Freeze assets on address</small>
            </Block>
          </Col>

          <Col span={12}>
            <Button type="primary" size="large" block onClick={() => goRoute('walletReceive')}>Receive</Button>
            <Block layout vertical center>
              <Button type="link" block disabled={(!unfreezable())} onClick={() => goRoute('walletUnfreeze')}>Unfreeze</Button>
              <small>Unfreeze assets on address</small>
            </Block>
          </Col>

        </Row>

      </Col>
      <Divider/>
      <Col>
        <TransactionsTable transactions={txs} />
      </Col>
    </Row>
  )
}
export default UserAssetDetailsScreen

