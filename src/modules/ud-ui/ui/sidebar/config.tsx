import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { IItems } from './types'
import { useNavigate } from "react-router-dom";

const Test = (): IItems[] => {
  const navigate = useNavigate();

  return [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Расходы и доходы',
      onClick: () => { navigate('/')}
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Документы',
      onClick: () => { navigate('/page2')}
    },
  ]
}

export default Test