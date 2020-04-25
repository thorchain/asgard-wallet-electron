import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'antd'
import { useHistory } from 'react-router'

const UserAssetsScreen: React.FC = (): JSX.Element => {
  let history = useHistory()
  return (
    <Row>
      <Col>
        <h3>User Assets</h3>
        <Link to="/user-asset-details">Asset Details</Link>
        <Button type="primary" onClick={() => history.push('/user-asset-details')}>Go Details</Button>
      </Col>
    </Row>
  )
}

export default UserAssetsScreen
