import React from 'react';
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout;

type MainLayoutProps = { header : JSX.Element, content : JSX.Element, footer: JSX.Element }
export const MainLayout: React.FC<MainLayoutProps> = ({header, content, footer}): JSX.Element => {
  return (
      <Layout id="app-wrapper">
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
  )
};
export default MainLayout