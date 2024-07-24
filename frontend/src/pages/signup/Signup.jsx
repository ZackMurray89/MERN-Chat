import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: null || '',
  })

  const { loading, signup } = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding-backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-slate-200'>
          Sign-Up&nbsp;
          <span className='text-orange-500'>
            Nexus<span className='text-amber-500'>Chat</span>
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base text-slate-300 label-text'>
                Full Name:
              </span>
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-slate-300 label-text'>
                Username:
              </span>
            </label>
            <input
              type='text'
              placeholder='Username'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-slate-300 label-text'>
                Password:
              </span>
            </label>
            <input
              type='password'
              placeholder='Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-slate-300 label-text'>
                Confirm Password:
              </span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className='flex flex-row items-center justify-center'>
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
          </div>

          <p className='text-sm'>
            Already have an account?&nbsp;
            <Link
              to='/login'
              className='text-sm text-blue-400 hover:underline hover:text-blue-200 mt-2 inline-block transition-colors ease-in-out delay-50'
            >
              Sign In
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
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup
