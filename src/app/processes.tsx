import './index.scss'
import { withProviders } from './providers'
import { Provider } from 'react-redux'
import { store } from './store'
import { Layout } from 'antd'
import { Header, Sidebar } from 'modules/ud-ui'
import { Auth } from 'modules/auth'
import { Routing } from 'pages'
import { useAuth } from 'shared/hooks'
import { Spinner } from 'shared/ui/components'

const AppProsess = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Routing />
        </Layout>
      </Layout>
    </Provider>
  )
}

const AuthProcess = () => {
  return (
    <Layout>
      <Auth />
    </Layout>
  )
}
const Processes = () => {
  const { elementState } = useAuth()
  if (elementState === null) {
    return <Spinner />
  }
  console.log('elementState', elementState)
  return elementState ? <AppProsess /> : <AuthProcess />
}

//TODO: как работает withProviders
export default withProviders(Processes)
