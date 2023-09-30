import { FC } from 'react'
import { Spin } from 'antd'

import css from './styles/spinner.module.scss'

const Spinner: FC = (props) => {
  return (
    <div className={css.spinnerWrapper}>
      <Spin {...props} />
    </div>
  )
}

export { Spinner }
