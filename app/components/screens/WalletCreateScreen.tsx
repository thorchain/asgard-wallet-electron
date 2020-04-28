import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
// import { Session } from 'meteor/session'
const bip39 = require( 'bip39');

import NewWalletKeystoreForm from '../forms/NewWalletKeystoreForm';
import { Row, Col, Tabs, Tag, Card, Button } from 'antd';
const { TabPane } = Tabs

const WalletCreateScreen: React.FC<{type?:string}> = ({type}): JSX.Element => {
  const [isMnemonic, setIsMnemonic] = useState<boolean>(false)
  const [mnemonic, setMnemonic] = useState<string>('')
  let history = useHistory()
  
  useEffect(()=>{
    if (type && type === 'mnemonic') { setIsMnemonic(true) }
    let mnemonic
    if (false) {
      // setMnemonic(Session.get('mnemonic'));
    } else {
      console.log("why the fuck no bip39...")
      console.log(bip39)
      mnemonic = bip39?.generateMnemonic();
      // check for duplicates
      let findDuplicates = (arr: string[]) => arr.filter((item, index) => arr.indexOf(item) != index)

      let duplicates = false
      while (!duplicates) {
        if (findDuplicates(mnemonic.split(" ")).length > 0) {
          // reroll mnemonic. low odds for double duplicate
          // confirm UI should handle it as well
          mnemonic = bip39.generateMnemonic()
        } else {
          duplicates = true
        }
      }
      setMnemonic(mnemonic);
      // Session.set('mnemonic', mnemonic);
    }
  },[])

  const wordsList  = function() {
    return mnemonic.length ? mnemonic.split(' ') : [] ;
  }

  return (
    <Row>
      <Col>
        <h3 className="mb-4 text-center">Create New Wallet</h3>
      </Col>

      <Col>
        <Tabs>
          <TabPane tab="keystore" key="keystore">
            <NewWalletKeystoreForm/>
          </TabPane>

          <TabPane tab="mnemonic" key="mnemonic">
          
            <label>Mnemonic HD wallet seed phrase</label>
            <Card>
              {wordsList().map((word:string, i) => (
                <Tag key={i}>{word}</Tag>
              ))}
            </Card>
            <p className="text-warning my-4 font-weight-bold">This is the phrase used to seed your wallet accounts. Record and keep this in a safe place. If you loose access to your wallet and backups, your account can <strong className="text-underline">only</strong> be recovered using this phrase.</p>

            <Button type="primary" size="large" block onClick={() => history.push('/wallet-mnemonic-confirm')}>
              Next
            </Button>

          </TabPane>

        </Tabs>
      </Col>
    </Row>
  )
}
export default WalletCreateScreen

