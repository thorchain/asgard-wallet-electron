import React, { useEffect, useState } from "react"
// import { useTracker } from 'meteor/react-meteor-data'
// import { UserAccountTypes } from '/imports/api/collections/UserAccountCollection'
// import { UserAccount } from '/imports/api/collections/client_collections'
import { AccountService } from '../../api/WalletController/storage/accountsService'
const UserAccount = new AccountService()
import Clipboard from 'clipboard'
import QRCode from 'qrcode'
import { Row, Col, Typography, Card, Button } from "antd"
import Block from "../elements/Block"
const { Title, Text } = Typography

const RecieveFundsScreen: React.FC = (): JSX.Element => {
  const [copyMsg, setCopyMsg] = useState<string>('')
  const userAccount: any = async () => {
    console.log('are we finding the user account?')
    return await UserAccount.findOne()
  }
  useEffect(() => {
    console.log('figuring out the qr code...')
    console.log(userAccount())
    QRCode.toCanvas(userAccount().address, { errorCorrectionLevel: 'H' }, function (err: any, canvas: any) {
      if (err) throw err
      console.log('is this it?')
      const container = document.getElementById('qr-container')
      console.log(container)
      container && container.appendChild(canvas)
    })

    const clipboard = new Clipboard('#clipboard-btn');
    let timer: any
    clipboard.on('success', (e: any) => {
      if (timer !== null) {
        clearTimeout(timer)
        setCopyMsg('')
      }
      setCopyMsg('Address copied...')
      timer = setTimeout(() => {
        setCopyMsg('')
      }, 3000);
      e.clearSelection();
    });

    clipboard.on('error', function (e: any) {
      // Verbose logging since an extreme edge case(?)
      console.log('error copying to clipboard');
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  },[])
  
  return (
    <Row>
      <Col sm={{span:24}} md={{span:16,offset:4}} lg={{span:14,offset:5}} xl={{span:9,offset:0}}>
        <Title level={4}>Receive Funds</Title>
        <Card bordered={false}>
          <div style={{display:'flex',justifyContent:'center'}} id="qr-container"></div>
        </Card>
      </Col>
      <Col sm={{span:24}} md={{span:16,offset:4}} lg={{span:14,offset:5}} xl={{span:9,offset:0}}>
        <Block layout vertical center>

          <label htmlFor="clipboard-btn" style={{display:'block'}}>
            <Text ellipsis className="text-monospace">{userAccount.address}</Text>
          </label>
          <Button id="clipboard-btn" type='primary' size='large' data-clipboard-text={userAccount.address}>
            Copy&nbsp;<i className="fa fa-copy"></i>
          </Button>
          <div><small id="copyBtnHelp">{copyMsg}</small></div>

        </Block>

      </Col>
    </Row>
  )
}

export default RecieveFundsScreen
