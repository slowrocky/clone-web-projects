import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Slowrock Chat</span>
      <div className="user">
        <img src="https://yt3.ggpht.com/T2HJ1isk8KgmKtgo021HoLTym5uSUx-OHFq5szlwgWe_xMxLHkrvU_qIquZJyrWAgqJs1m3o8g=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar