import React from 'react'

export default function Pricing() {
  return (
    <div className='pricing-page'>
      <h2 className="heading">Pay as you grow </h2>
      <p className="subheading"> With our no hassle pricing plans </p>

    </div>
  )
}


function BoxContainer() {
  const data = {

  }
}


function Box() {
  return (
    <div className='box'>
      <h2 className="type"> Free </h2>
      <div className="price">
        <h3 className="amount"> 0$ </h3>
        <span className="duration"> /mo</span>
      </div>
      <div className="list">
        <div className="item">
          <span> x </span>
          <span> 1 users    </span>
        </div>
        <div className="item">
          <span> x </span>
          <span> 5 GB Storage    </span>
        </div>
        <div className="item">
          <span> x </span>
          <span> Unlimited public projects </span>
        </div>
        <div className="item">
          <span> x </span>
          <span> Dedicated projects  </span>
        </div>
        <div className="item">
          <span> x </span>
          <span>  Free Linked Domain   </span>
        </div>
      </div>
      <div className="action">
        <button> Choose plan </button>
      </div>
    </div>
  )
}