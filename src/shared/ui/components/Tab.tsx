import { FC } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

interface ITab {
  items: TabsProps['items']
  defaultActiveKey: string
  onChange?: (key: string) => void,
}

const Tab: FC<ITab> = (props) => {
  return <Tabs {...props} />
}

export { Tab }
