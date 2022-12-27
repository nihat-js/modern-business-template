import React, { useState } from 'react'
import "./Nav.scss"

export default function Nav() {

  const [toggleBlog, setToggleBlog] = useState(true)
  const [togglePortfolio, setTogglePortfolio] = useState(false)


  return (
    <nav className='nav-component'>
      <h2 className="brand">Modern Business </h2>
      <div className="link">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">FAQ</a></li>
          <li className='dropdown' >
            <span className='toggle' onClick={() => { setToggleBlog(!toggleBlog); setTogglePortfolio(false) }} >Blog</span>
            <ul className={`content ${!toggleBlog ? 'd-none' : ''} `}  >
              <li> <a href=""> Blog Home </a> </li>
              <li> <a href=""> Blog Post </a> </li>
            </ul>
          </li>
          <li className='dropdown' >
            <span className='toggle' onClick={() => { setTogglePortfolio(!togglePortfolio); setToggleBlog(false) }}> Portfolio </span>
            <ul className={`content ${!togglePortfolio ? 'd-none' : ''} `}  >
              <li> <a href=""> Portfolio Overview </a> </li>
              <li> <a href=""> Portfolio Item </a> </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav >
  )
}
