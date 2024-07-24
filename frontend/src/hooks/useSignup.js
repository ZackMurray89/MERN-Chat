import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    })

    if (!success) return

    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }

      // Set user to local storage
      localStorage.setItem('chat-user', JSON.stringify(data))
      // Update context
      setAuthUser(data)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }
  return { loading, signup }
}
export default useSignup

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please Fill All Fields')
    return false
  }

  if (password !== confirmPassword) {
    toast.error('Passwords Do Not Match')
    return false
  }

  if (password.length < 6) {
    toast.error('Password Must Be At Least 6 Characters')
    return false
  }

  return true
}
