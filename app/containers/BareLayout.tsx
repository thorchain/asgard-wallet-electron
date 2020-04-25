import React from 'react';
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

type BareLayoutProps = { content : any}
const BareLayout: React.FC<BareLayoutProps> = ({content}) => {
  return (
    <div id="app-wrapper">
      <Layout>
        <Content>{content}</Content>
      </Layout>
    </div>
  )
}
export default BareLayout