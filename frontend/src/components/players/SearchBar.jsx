import React from 'react'

function SearchBar() {
  return (
    <div>
        <form>
          <input className='py-1.5 px-2 text-xs border-2 border-[#4a48485f] rounded-lg w-full font-stretch-expanded focus:border-red-700 focus:outline-dashed' type='text' placeholder='SEARCH PLAYER'></input>
        </form>
    </div>
  )
}

export default SearchBar