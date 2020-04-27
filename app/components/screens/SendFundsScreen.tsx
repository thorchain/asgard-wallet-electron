import React from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';
const { Title } = Typography

const SendFundsScreen: React.FC = (): JSX.Element => {
  const onSubmit = (data:any) => { console.log(data)}
  return (
    <Row>
      <Col sm={{span:24}} md={{span:16,offset:4}} lg={{span:12,offset:6}}>
        <Title level={4}>Send Funds</Title>
        <Form onFinish={onSubmit}>
          <Form.Item name="recipient" label="recipient">
            <Input />
          </Form.Item>
          <Form.Item name="amount" label="amount" rules={[{ required: true, message:'required' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="other" label="other">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>

      </Col>
    </Row>
  )
}

export default SendFundsScreen;
