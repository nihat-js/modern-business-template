import './Pricing.scss'
import './Pricing.scss'


import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Pricing() {
  return (
    <div className='pricing-page'>

      <Nav />

      <section className="start">
        <div className="container">
          <h2 className="heading">Pay as you grow </h2>
          <p className="subheading"> With our no hassle pricing plans </p>
          <div className="row">
            <FreeBox />
            <ProBox />
            <EnterpriseBox />

          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}


function BoxContainer() {
  const data = {

  }
}


function FreeBox() {
  return (
    <div className='box'>
      <h2 className="type"> Free </h2>
      <div className="price">
        <h3 className="amount"> 0$ </h3>
        <span className="duration"> /mo</span>
      </div>
      <div className="list">
        <p className="user">  <span className='text-blue'> ✓ </span>  <span className="text-bold"> 1 users </span>     </p>
        <p className="storage"> <span className='text-blue'> ✓ </span>  5GB storage  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>    Unlimited public projects  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>     Community access  </p>
        <p className="project"> <span className='text-gray'> ✗ </span>    Unlimited private projects  </p>
        <p className="project"> <span className='text-gray'> ✗ </span>       Dedicated support   </p>
        <p className="project"> <span className='text-gray'> ✗ </span>        Free linked domain  </p>
        <p className="project"> <span className='text-gray'> ✗ </span>         Monthly status reports  </p>

      </div>
      <div className="action">
        <button> Choose plan </button>
      </div>
    </div>
  )
}

function ProBox() {
  return (
    <div className='box'>
      <h2 className="type"> Free </h2>
      <div className="price">
        <h3 className="amount"> 9$ </h3>
        <span className="duration"> /mo</span>
      </div>
      <div className="list">
        <p className="user"> <span className='text-blue'> ✓ </span>  1 users   </p>
        <p className="storage"> <span className='text-blue'> ✓ </span>  5GB storage  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>    Unlimited public projects  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>     Community access  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>    Unlimited private projects  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>       Dedicated support   </p>
        <p className="project"> <span className='text-blue'> ✓ </span>        Free linked domain  </p>
        <p className="project"> <span className='text-gray'> ✗ </span>         Monthly status reports  </p>

      </div>
      <div className="action">
        <button> Choose plan </button>
      </div>
    </div>
  )
}
function EnterpriseBox() {
  return (
    <div className='box'>
      <h2 className="type"> Enterprise </h2>
      <div className="price">
        <h3 className="amount"> 49$ </h3>
        <span className="duration"> /mo</span>
      </div>
      <div className="list">
        <p className="user"> <span className='text-blue'> ✓ </span>  <span className="text-bold"> Unlimited users </span>    </p>
        <p className="storage"> <span className='text-blue'> ✓ </span>  5GB storage  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>    Unlimited public projects  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>     Community access  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>    Unlimited private projects  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>       Dedicated support   </p>
        <p className="project"> <span className='text-blue'> ✓ </span>        <span className="text-bold"> Unlimited  </span> linked domain  </p>
        <p className="project"> <span className='text-blue'> ✓ </span>         Monthly status reports  </p>


      </div>
      <div className="action">
        <button> Choose plan </button>
      </div>
    </div>
  )
}