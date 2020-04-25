import React from 'react';
import { Layout } from 'antd'
const { Content } = Layout;

type BareLayoutBrandedProps = {content() : React.Component }
export const BareLayoutBranded: React.FC<BareLayoutBrandedProps> = ({content}): JSX.Element => {
  return (
    <Layout id="app-wrapper" className="bg-img-brand">
      <Content>{content}</Content>
    </Layout>
  )
}
