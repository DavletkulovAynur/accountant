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
  const { handleGoogleSignIn } = useAuth()
  return (
    <Layout>
      <Auth />
      <button onClick={handleGoogleSignIn}>Войти с помощью ggole</button>
    </Layout>
  )
}
const Processes = () => {
  const { isAuthState } = useAuth()
  if (isAuthState === null) {
    return <Spinner />
  }
  return isAuthState ? <AppProsess /> : <AuthProcess />
}

//TODO: как работает withProviders
export default withProviders(Processes)
