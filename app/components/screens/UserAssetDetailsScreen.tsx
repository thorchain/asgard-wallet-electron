import React from 'react';
import { Link } from 'react-router-dom';

const UserAssetDetailsScreen: React.FC = (): JSX.Element => {
  return (<>
    <h1>
      Asset Details
    </h1>
      <Link to="/send-funds">Send Funds</Link>
      <Link to="/receive-funds">Receive Funds</Link>
      <Link to="/freeze-funds">Freeze Funds</Link>
      <Link to="/unfreeze-funds">Unfreeze Funds</Link>
  </>)
}

export default UserAssetDetailsScreen;
