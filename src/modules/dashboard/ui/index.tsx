import React from 'react'
import { Col, Row } from 'antd'
import { Balance } from './containers/balance/Balance'
import { Layout } from 'antd'
import { CurrencyBoard } from './containers/currencyBoard/CurrencyBoard'

const { Content } = Layout

const DashboardModule: React.FC = () => {
  return (
    <Content style={{ padding: '24px', minHeight: 280 }}>
      <Row>
        <Col span={18}>
          <Balance />
        </Col>
        <Col span={6}>
          <CurrencyBoard />
        </Col>
      </Row>
    </Content>
  )
}

export { DashboardModule }
