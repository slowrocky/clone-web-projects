import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://yt3.ggpht.com/T2HJ1isk8KgmKtgo021HoLTym5uSUx-OHFq5szlwgWe_xMxLHkrvU_qIquZJyrWAgqJs1m3o8g=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search