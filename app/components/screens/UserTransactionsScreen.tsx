import React, { useEffect, useState, useMemo } from 'react';
import { TransactionService } from '../../api/WalletController/storage/transactionsService'
// import { WalletStore } from '../../api/WalletController/storage/wallet_store.js'
import TransactionsList from '../elements/transactions/TransactionsList'

import { Col, Row, Typography } from 'antd';
const { Title } = Typography

const UserTransactionsScreen: React.FC = (): JSX.Element => {
  let store:any
  const [txs, setTxs] = useState<any>([])
  const [inited, setInited ] = useState<boolean>(false)
  store = new TransactionService()

  async function initData() {
    await setData()
    setInited(true)
  }
  async function setData() {
    const res = await store.findAll()
    if (res.length > 0) {
      setTxs(res)
    }
  }


  useEffect(() => {
    if (!inited) {
      initData()
    }
  }, [store]);
  return (
    <Row>
      <Col span={24}>
        <Title level={4}>Transactions</Title>
        <TransactionsList transactions={txs} />
      </Col>
    </Row>
  )
}

export default UserTransactionsScreen;
