import React from 'react';
import { Layout } from 'antd'
const { Header, Content } = Layout;

type MainLayoutProps = { header : JSX.Element, content : JSX.Element }
export const MainLayout: React.FC<MainLayoutProps> = ({header, content}): JSX.Element => {
  return (
      <Layout id="app-wrapper">
        <Header>{header}</Header>
        <Content>{content}</Content>
      </Layout>
  )
};
export default MainLayout