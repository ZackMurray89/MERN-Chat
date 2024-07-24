// [--chkbg:theme(colors.amber.600)]

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex gap-8 my-1'>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
          <span className='label-text'>Male</span>
          <input
            type='checkbox'
            className={`checkbox border-slate-900 ${
              selectedGender === 'male' ? 'selected' : ''
            }`}
            checked={selectedGender === 'male'}
            onChange={() => onCheckboxChange('male')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
          <span className='label-text'>Female</span>
          <input
            type='checkbox'
            className={`checkbox border-slate-900 ${
              selectedGender === 'female' ? 'selected' : ''
            }`}
            checked={selectedGender === 'female'}
            onChange={() => onCheckboxChange('female')}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={'label gap-2 cursor-pointer'}>
          <span className='label-text'>Other</span>
          <input
            type='checkbox'
            className={`checkbox border-slate-900 ${
              selectedGender === 'other' ? 'selected' : ''
            }`}
            checked={selectedGender === 'other'}
            onChange={() => onCheckboxChange('other')}
          />
        </label>
      </div>
    </div>
  )
}
export default GenderCheckbox
