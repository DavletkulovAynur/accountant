import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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

  // Возвращаем необходимые значения и функции
  return {
    elementState,
  }
}

export { useAuth }
