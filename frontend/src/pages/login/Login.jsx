const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-slate-200'>
          Login&nbsp;
          <span className='text-slate-900'>
            Nexus<span className='text-amber-500'>Chat</span>
          </span>
        </h1>

        <form>
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
            />
          </div>

          <p className='text-sm'>
            Don&apos;t have an account?&nbsp;
            <a
              href='#'
              className='text-sm text-blue-400 hover:underline hover:text-blue-200 mt-2 inline-block transition-colors ease-in-out delay-50'
            >
              Sign Up
            </a>
          </p>

          <div>
            <button className='btn btn-block btn-sm mt-2 text-slate-800 bg-amber-600 hover:bg-amber-500 transition-colors ease-in-out delay-50'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
