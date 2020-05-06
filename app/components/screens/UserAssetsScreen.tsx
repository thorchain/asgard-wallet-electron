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
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>User Assets</Title>
        {/* <Link to="/user-asset-details">Asset Details</Link> */}
        {/* <Button type="primary" onClick={() => history.push('/user-asset-details')}>Go Details</Button> */}
        <List dataSource={assets}
          renderItem={(asset:any) => (
            <List.Item key={asset.id} onClick={() => history.push(`/user-asset-details?symbol=${asset.symbol}`)}>
              <AssetRow asset={asset}/>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}

export default UserAssetsScreen


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