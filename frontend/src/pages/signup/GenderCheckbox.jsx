const GenderCheckbox = () => {
  return (
    <div className='flex gap-8 my-1'>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
          <span className='label-text'>Male</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900 [--chkbg:theme(colors.amber.600)]'
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
          <span className='label-text'>Female</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900 [--chkbg:theme(colors.amber.600)]'
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
          <span className='label-text'>Other</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900 [--chkbg:theme(colors.amber.600)]'
          />
        </label>
      </div>
    </div>
  )
}
export default GenderCheckbox
