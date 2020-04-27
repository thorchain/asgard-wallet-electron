import React from 'react';
import { Menu } from 'antd';
import { NavBar, Icon} from 'antd-mobile';

const FooterMain: React.FC = (): JSX.Element => {
  return (

    <NavBar
      mode="dark"
      leftContent="THORCHAIN"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </NavBar>
  )
}

export default FooterMain

