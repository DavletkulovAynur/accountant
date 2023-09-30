import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { IItems } from './types'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'shared/hooks'

const NavSidebar = (): IItems[] => {
  const { logOut } = useAuth()
  const navigate = useNavigate()

  return [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Расходы и доходы',
      onClick: () => {
        navigate('/')
      },
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Документы',
      onClick: () => {
        navigate('/page2')
      },
    },
    {
      key: '3',
      icon: <VideoCameraOutlined />,
      label: 'Exit',
      onClick: () => logOut(),
    },
  ]
}

export default NavSidebar
