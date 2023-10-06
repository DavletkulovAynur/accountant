import React from 'react'
import css from './styles.module.scss'
import { Button, Col, Row, Statistic, Divider, List, Typography } from 'antd'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

const Balance: React.FC = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="RUB" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic
          className={css.title}
          title="Account Balance (USD)"
          value={1781}
          precision={2}
        />
        <Button style={{ marginTop: 16 }} type="primary">
          Recharge
        </Button>
      </Col>
      <Col className={css.listWrap} span={16}>
        <List
          header={<div>investments (эти деньги не трогаем)</div>}
          footer={<div>Footer</div>}
          bordered
          className={css.list}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}

export { Balance }
