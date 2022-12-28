
import './About.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import foundingImage1 from '../assets/img/founding-1.jpg'
import growthImage1 from '../assets/img/growth-1.jpg'


export default function About() {
  return (
    <div className='about-page'>
      <Nav />
      <section className="hero">
        <div className="container">
          <div className="row">
            <h2 className="heading">Our mission is to make building websites easier for everyone. </h2>
            <p className="subheading">
              Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.
            </p>
            <div className="action">
              <button> Read our story </button>
            </div>
          </div>
        </div>
      </section>
      <section className="founding">
        <div className="container">
          <div className="row">
            <figure className="column left-column ">
              <img src={foundingImage1} alt="" />
            </figure>
            <div className="column right-column ">
              <h3 className="title">Our founding </h3>
              <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="growth">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h3 className="title"> Growth & Beyond </h3>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
            </div>
            <figure className="right-column">
              <img src={growthImage1} alt="" />
            </figure>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h3 className="heading">Our team</h3>
          <p className="subheading"> Dedicated to quality and your success</p>
          <div className="row">
            <TeamBox img={foundingImage1} fullname="Nihat A" position="President of company" />
            <TeamBox img={foundingImage1} fullname="Nihat A" position="President of company" />
            <TeamBox img={foundingImage1} fullname="Nihat A" position="President of company" />
            <TeamBox img={foundingImage1} fullname="Nihat A" position="President of company" />
          </div>
        </div>
      </section>



      <Footer />

    </div>
  )
}
function TeamBox(props) {
  return (
    <div className="box" >
      <picture>
        <img src={props.img} alt="" />
      </picture>
      <h4 className="fullname"> {props.fullname} </h4>
      <p className="position"> {props.position} </p>
    </div >
  )

}