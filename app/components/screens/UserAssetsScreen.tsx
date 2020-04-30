import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'antd'
import { useHistory } from 'react-router'

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
      <Col>
        <h3>User Assets</h3>
        <Link to="/user-asset-details">Asset Details</Link>
        <Button type="primary" onClick={() => history.push('/user-asset-details')}>Go Details</Button>
        <ul>
          <li>test1</li>
          {assets.map((e:any,i:number) => (
            <li key={i}>{e.symbol}: {e.free}</li>
          ))}
        </ul>
        <Button type="primary" onClick={propagateData}>add data</Button>
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