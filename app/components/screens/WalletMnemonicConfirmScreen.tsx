import React from 'react'
import { Row, Col, Card, Button } from 'antd'

const WalletMnemonicConfirmScreen: React.FC = (): JSX.Element => {
  return (
  <Row>
    <Col>
      <h1>Confirm Mnemonic</h1>
      <Card>
        <Button type="ghost" block>
          Create row
        </Button>
      </Card>
    </Col>
  </Row>
  )
}
export default WalletMnemonicConfirmScreen