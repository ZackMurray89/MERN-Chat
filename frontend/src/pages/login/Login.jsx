import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-slate-200'>
          Login&nbsp;
          <span className='text-orange-500'>
            Nexus<span className='text-amber-500'>Chat</span>
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base text-slate-300 label-text'>
                Username
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              className='w-full input input-bordered h-10'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-slate-300 label-text'>
                Password
              </span>
            </label>
            <input
              type='text'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className='text-sm'>
            Don&apos;t have an account?&nbsp;
            <Link
              to='/sign-up'
              className='text-sm text-blue-400 hover:underline hover:text-blue-200 mt-2 inline-block transition-colors ease-in-out delay-50'
            >
              Sign Up
            </Link>
          </p>

          <div>
            <button
              className='btn btn-block btn-sm mt-2 text-slate-800 bg-amber-600 hover:bg-amber-500 transition-colors ease-in-out delay-50'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
