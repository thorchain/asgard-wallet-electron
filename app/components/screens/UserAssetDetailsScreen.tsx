import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

const UserAssetDetailsScreen: React.FC = (): JSX.Element => {
  return (
    <Row>
      <Col>
        <h1>
          Asset Details
        </h1>
        <ul>
          <li>
            <Link to="/send-funds">Send Funds</Link>
          </li>
          <li>
            <Link to="/receive-funds">Receive Funds</Link>
          </li>
          <li>
            <Link to="/freeze-funds">Freeze Funds</Link>
          </li>
          <li>
            <Link to="/unfreeze-funds">Unfreeze Funds</Link>
          </li>
        </ul>
      </Col>
    </Row>
  )
}

export default UserAssetDetailsScreen;
