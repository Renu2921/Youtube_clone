import React from 'react'

const ButtonComponent = ({filterName}) => {
  return (
    <div>
      <button className="px-3 rounded-lg bg-gray-100 text-black mt-2 py-1 font-semibold">{filterName}</button>
    </div>
  )
}

export default ButtonComponent
