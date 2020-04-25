import React from 'react';
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

type BareLayoutBrandedProps = {content() : React.Component }
export const BareLayoutBranded: React.FC<BareLayoutBrandedProps> = ({content}): JSX.Element => {
  return (
    <div id="app-wrapper" className="bg-img-brand">
      <Layout>
        <Content>{content}</Content>
      </Layout>
    </div>
  )
}
