import React from 'react';
import { Layout } from 'antd'
const { Content } = Layout;

type BareLayoutProps = { content : any}
const BareLayout: React.FC<BareLayoutProps> = ({content}) => {
  return (
    <Layout id="app-wrapper">
      <Content>{content}</Content>
    </Layout>
  )
}
export default BareLayout