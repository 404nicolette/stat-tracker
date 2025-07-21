import React from 'react'

function DropDown({label, options, onChange}) {
  return (
    <div className=''>
        
        <select className='text-xs py-1.5 px-2 border-2 border-[#4a48485f] rounded-lg w-auto font-stretch-expanded focus:border-red-700 focus:outline-dashed '>
            <option value="">{label}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default DropDown