import React, { useEffect, useState, useMemo } from 'react';
import { TransactionService } from '../../api/WalletController/storage/transactionsService'

import { Col, Row } from 'antd';


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
    // const res = await store.connection.select({from:'Transactions'})
    console.log('updating the state...')
    if (res.length > 0) {
      setTxs(res)
    }
  }


  useEffect(() => {
    console.log('using effect again...')
    console.log(store)
    // store.init()
    if (!inited) {
      initData()
    }
  }, [store]);

  const addData = async (e:any) =>  {
    e.preventDefault()
    console.log('submitted form')
    const amount = parseInt(e.currentTarget.amount.value)
    const obj = {
      to: 'soei',
      from: '392039',
      type: 'transfer',
      amount: amount,
      asset: 'tbnb',
      txid: '_idfijej'
    }
    await store.insert([obj])
    console.log('we got result from insert...')
    await setData()
  }
  return (
    <Row>
      <Col>
        <form onSubmit={addData}>
          <input type="test" className="ant-input" name="amount" />
          <button className="ant-btn ant-btn-block" type="submit">
            Insert Tx
          </button>
        </form>
          <button className="ant-btn ant-btn-block" type="submit">
            clear?
          </button>
        <table>
          {txs && txs.length > 0 ? (
            <tbody>
              <tr><td>test</td></tr>
              {txs.map((e:any, i:number) => (
                <tr key={i}><td>{e.from}</td><td>{e.to}</td><td>{e.amount}</td><td>{e.asset}</td></tr>
              ))}
            </tbody>
          ) : (

            <tbody>
              <tr><td>no data</td></tr>
            </tbody>

          )}
        </table>
      </Col>
    </Row>
  )
}

export default UserTransactionsScreen;
