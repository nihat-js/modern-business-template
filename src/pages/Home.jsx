import './Home.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import heroImage from '../assets/img/home-hero.jpg'
import bagImage from '../assets/img/bag.svg'
export default function Home() {
  return (
    <main className='home-page'>

      <Nav />

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h2 className="heading">Modern Business template for free everyone </h2>
              <p className="subheading">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
              <div className="action">
                <button className="btn-get-started">Get Started</button>
                <button className="btn-learn-more">Learn More </button>
              </div>
            </div>
            <div className="right-column">
              <figure>
                <img src={heroImage} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="building">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h3 className="heading">A better way to start building.</h3>
            </div>
            <div className="right-column">
              <BuildingBox img={bagImage} title="My own title" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
              <BuildingBox img={bagImage} title="Books" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
              <BuildingBox img={bagImage} title="Black" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
              <BuildingBox img={bagImage} title="Cool" text="Paragraph of text beneath the heading to explain the heading. Here is just a bit more text." />
            </div>
          </div>


        </div>
      </section>

      <div className="quote-wrap">
        <div className="container-1300">
          <div className="box">
            <p className="text">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
            <div className="author">
              <span className='pp'></span>
              <span className="fullname">Tom Ato </span>
              <span className="slash">  / </span>
              <span className="position"> CEO, Pomodoro</span>
            </div>
          </div>

        </div>
      </div>

      <div className="blog-wrap">
        <div className="container-1300">
          <div className="blog">
            <h3 className="heading">From our blog</h3>
            <p className="suheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
            <div className="row">
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-wrap">
        <div className="container-1300">
          <div className="row">
            <div className="left-column">
              <h3 className="heading">New products, delivered to you.</h3>
              <p className="text">Sign up for our newsletter for the latest updates.</p>
            </div>
            <div className="right-column">
              <form action="">
                <input type="text" placeholder='Email address' />
                <button> Sign up  </button>
              </form>
              <p className="text">We care about privacy, and will never share your data.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  )
}

function Box() {
  return (
    <div className="box">
      <figure >
        <img src="" alt="" />
        <span></span>
      </figure>
      <div className="content">
        <div className="tags">
          <span className="tag"> News </span>
        </div>
        <h3 className="heading"> Blog post title </h3>
        <p className="text">Some quick example text to build on the   card title and make up the bulk of the card's content</p>
        <div className="author">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="content">
            <h4 className="heading"> Kelly Rowan </h4>
            <span className="date"> March 12, 2022 </span>
            <span className="read-time"> 6 min read</span>
          </div>
        </div>
      </div>

    </div>
  )
}



function BuildingBox(props) {
  return (
    <div className="box">
      <figure>
        <img src={props.img} alt="" />
      </figure>
      <h4 className="title"> {props.title}  </h4>
      <p className="text">  {props.text}  </p>
    </div>
  )
}