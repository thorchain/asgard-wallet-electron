import React, { useEffect, useState, useMemo } from 'react';
// import Wallet from '../../api/WalletController/storage'
import { TransactionService } from '../../api/WalletController/storage/transactionsService'
import { Col, Row } from 'antd';
// const wallet = new Wallet()

const UserTransactionsScreen: React.FC = (): JSX.Element => {
  const [txs, setTxs] = useState([{price:'test'},{price:'test2'}])
  const [inited, setInited ] = useState(false)
  console.log("we are string buildng the wallet store...")
  // console.log(WalletStore)
  const store = new TransactionService ()
  // let wallet:any
  // const wallet = new Wallet()
  async function setupWallet () {
    // wallet = new Wallet()
    // await wallet.init()
    console.log('initializing the store...')
    // console.log(wallet)
    const txs = await store.getTxs();
    setTxs(txs)
    setInited(true)
  }
  async function addItem (item:any) {
    console.log("in async function component adding item")
    await store.addTxs([item])
  }
  useEffect(() => {
    console.log('using effect...')
    console.log(txs)
    // setupWallet()
    if (!inited) {
      setupWallet()
    }
  }, []);
  const addData = async () =>  {
    console.log('setting the data in handler...')
    // return new Promise(() => {})
    // return await wallet.db.select({from:'Product'})
    // return txs
    // await wallet.db.insert()
    const obj = {
      type: 'transfer',
      amount: 9001,
      asset: 'BNB',
      txid: 'sdofijsdoifj',
      to: 'sally-joe',
      from: 'billy-bob'
    }
    await store.addTxs([obj])
    const data = await store.getTxs()
    setTxs(data)
    // addItem(obj)
  }
  const txData = () => useMemo( () => {
    
  },[store])
  return (
    <Row>
      <Col>
        <h1 onClick={addData}>
          User Transactions
        </h1>
        <table>
          <tbody>
            <tr><td>test</td></tr>
            {txs.map((e:any) => (
              <tr><td>{e.from}</td><td>{e.to}</td><td>{e.amount}</td><td>{e.asset}</td></tr>
            ))}
          </tbody>
        </table>
      </Col>
    </Row>
  )
}

export default UserTransactionsScreen;

