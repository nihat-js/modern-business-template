import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"

export default function Nav() {

  const [toggleBlog, setToggleBlog] = useState(false)
  const [togglePortfolio, setTogglePortfolio] = useState(false)

  const [toggleMobile , setToggleMobile] = useState(false)


  return (
    <nav className='nav-component'>
      <div className="container">
        <div className="row">
          <h2 className="brand">Modern Business </h2>
          <p className="hamburger d-none" onClick={ () => setToggleMobile(!toggleMobile) } > ☰  </p>
          <div className="link">
            <ul>
              <Link to='/' >  <li><a >  Home</a></li>    </Link>
              <Link to='/about' > <li> <a > About  </a>  </li> </Link>
              <Link to='/contact' > <li> <a > Contact  </a>  </li> </Link>
              <Link to='/pricing' > <li> <a > Pricing  </a>  </li> </Link>
              <Link to='/about' > <li> <a > FAQ  </a>  </li> </Link>
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
        </div>
        <div className={`mobile-row  ${ toggleMobile ? '' :'d-none' } ` }>
          <ul>
            <Link to='/' >  <li><a >  Home</a></li>    </Link>
            <Link to='/about' > <li> <a > About  </a>  </li> </Link>
            <Link to='/contact' > <li> <a > Contact  </a>  </li> </Link>
            <Link to='/pricing' > <li> <a > Pricing  </a>  </li> </Link>
            <Link to='/about' > <li> <a > FAQ  </a>  </li> </Link>
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
      </div>
    </nav >
  )
}
