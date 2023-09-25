import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { Button, Input } from 'antd'
import css from './styles.module.scss'
import { FormProvider, useForm } from 'react-hook-form'
import { RHFInput } from 'shared/ui/RHF'
import { RHFInputPassword } from 'shared/ui/RHF/RHFInputPassword'

const Login: React.FC = () => {
  // const email = 'ainurikdav@gmail.com'
  // const password = 'test1234'

  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { handleSubmit, watch, reset } = methods

  const login: any = async ({ email, password }: any) => {
    //TODO: вынести
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log('user', user)
        // ...
      })
      .catch((error) => {
        console.log('error', error)
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <FormProvider {...methods}>
      <div className={css.formWrapper}>
        <form className={css.form}>
          <div className={css.inputWrapper}>
            <RHFInput name="email" placeholder="email" />
          </div>
          <div className={css.inputWrapper}>
            <RHFInputPassword name="password" placeholder="Password" />
          </div>
          <Button
            className={css.button}
            onClick={handleSubmit(login)}
            type="primary"
            htmlType="submit"
          >
            Sign In
          </Button>
        </form>
      </div>
    </FormProvider>
  )
}

export { Login }
