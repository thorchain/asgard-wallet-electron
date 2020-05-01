import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, Typography, List } from 'antd'
import { useHistory } from 'react-router'
import Block from '../elements/Block'
import CircleIcon, { Sizes } from '../elements/CircleIcon/circleIcon'
const { Title, Text } = Typography

import { shortSymbol } from '../helpers/tokenHelpers'

import { AssetService } from '../../api/WalletController/storage/assetsService'

const UserAssetsScreen: React.FC = (): JSX.Element => {
  let store:any
  const [assets, setAssets] = useState([])
  const [inited, setInited ] = useState(false)
  let history = useHistory()
  store = new AssetService()

  async function initData () {
    console.log('initializing the store...')
    await setData()
    setInited(true)
  }
  async function setData() {
    const res = await store.findAll()
    if (res.length > 0) {
      console.log('we set data...')
      setAssets(res)
    }
  }
  useEffect(() => {
    if (!inited) {
      initData()
    }
  },[])
  const propagateData = async () => {
    console.log("propagating data...")
    await store.insert(balances)
    const data = await store.findAll()
    setAssets(data)
  }
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>User Assets</Title>
        {/* <Link to="/user-asset-details">Asset Details</Link> */}
        {/* <Button type="primary" onClick={() => history.push('/user-asset-details')}>Go Details</Button> */}
        <List dataSource={assets}
          renderItem={(asset:any) => (
            <List.Item key={asset.id} onClick={() => console.log("go to details")}>
              <AssetRow asset={asset}/>
            </List.Item>
          )}
        />
        {/* <ul>
          <li>test1</li>
          {assets.map((e:any,i:number) => (
            <li key={i}>{e.symbol}: {e.free}</li>
          ))}
        </ul> */}
        {/* <Button type="primary" onClick={propagateData}>add data</Button> */}
      </Col>
    </Row>
  )
}

export default UserAssetsScreen

const balances = [
  {
    "free": "66.00000000",
    "frozen": "15.00000000",
    "locked": "0.00000000",
    "symbol": "RUNE-A1F"
  },
  {
    "free": "9.00000000",
    "frozen": "0.00000000",
    "locked": "0.00000000",
    "symbol": "TATIC-E9C"
  },
  {
    "free": "886.00000000",
    "frozen": "417.00000000",
    "locked": "0.00000000",
    "symbol": "TCAN-014"
  },
  {
    "free": "9.00000000",
    "frozen": "0.00000000",
    "locked": "0.00000000",
    "symbol": "TOMOB-1E1"
  },
  {
    "free": "19.94025000",
    "frozen": "2.00000000",
    "locked": "0.00000000",
    "symbol": "BNB"
  },
  {
    "free": "23.00000000",
    "frozen": "0.00000000",
    "locked": "0.00000000",
    "symbol": "FSN-F1B"
  },
  {
    "free": "93.00000000",
    "frozen": "12.00000000",
    "locked": "0.00000000",
    "symbol": "FTM-585"
  },
  {
    "free": "208.23000000",
    "frozen": "53.00000000",
    "locked": "0.00000000",
    "symbol": "LOK-3C0"
  }
]


// import React from "react";
// import { useTracker } from 'meteor/react-meteor-data';
// import { UserAssets } from '/imports/api/collections/client_collections'
// import { UserAssetsTypes } from '/imports/api/collections/userAssetsCollection'
// import { TokenData } from '/imports/api/collections/client_collections'
// import { TokenDataTypes } from '/imports/api/collections/tokenDataCollection'

// import { Row, Col, Typography, List } from 'antd'
// import Block from "/imports/ui/components/elements/block/block";

// const UserAssetsScreen: React.FC = (): JSX.Element => {
//   const userAssets: UserAssetsTypes[] = useTracker(() => {
//     return UserAssets.find({},{sort: {symbol: 1}}).fetch()
//   }, [UserAssets])
//   return (
//     <Row>
//       <Col>
//         <Title level={4}>Assets</Title>
//         <List dataSource={userAssets}
//           renderItem={asset => (
//             <List.Item key={asset._id} onClick={() => FlowRouter.go('walletAssetDetails', {symbol: asset.symbol})}>
//               <AssetRow asset={asset}/>
//             </List.Item>
//           )}
//         />
//       </Col>
//     </Row>
//   )
// }

// export default UserAssetsScreen

type RowProps = {asset: any}
const AssetRow: React.FC<RowProps> = ({asset}): JSX.Element  => {
  // const token: TokenDataTypes = useTracker(() => {
  //   return TokenData.findOne({symbol:asset.symbol})
  // },[TokenData])
  return (
    <Block layout center>

      <Block style={{marginRight:16}}>
        <CircleIcon shortSymbol={shortSymbol(asset.symbol)} size={Sizes.md}/>
      </Block>

      <Block flex baseline justifyStart>
        <Title level={4}>
          <span>[{shortSymbol(asset.symbol)}]&nbsp;</span>
        </Title>
        <div>Token Name&nbsp;</div>
        <Text strong type="secondary"><small>{asset.symbol}</small>&nbsp;</Text>
      </Block>

      <Block layout vertical end>
        <div className="h5 mb-0 text-right">{asset.free.toLocaleString()}</div>
        <div className="text-right font-italic text-muted small">0.00</div>
      </Block>
    </Block>
  )
}