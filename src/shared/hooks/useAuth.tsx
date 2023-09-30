import { useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const useAuth = () => {
  const [elementState, setElementState] = useState<boolean | null>(null)

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setElementState(true)
    } else {
      setElementState(false)
    }
  })

  const logOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Ошибка разлогинивания:', error);
    }
  }

  // Возвращаем необходимые значения и функции
  return {
    elementState,
    logOut
  }
}

export { useAuth }
