import React from 'react'
import ButtonComponent from './ButtonComponent'

const FilterButton = () => {
  const filterList=["All", "Music", "Gaming", "Songs","Cricket", "React", "DSA","Street Food", "Web Development","Watched", "Recently Uploaded"];
  return (
    <div className='flex gap-2'>
      {
        filterList.map((item,index)=>
        <div key={index}>
            <ButtonComponent filterName={item}/>
          </div>
        )
      }
    </div>
  )
}

export default FilterButton
