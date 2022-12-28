import React from 'react'

export default function About() {
  return (
    <div className='about-page'>
      <section className="hero">
        <div className="container-1300">
          <h2 className="heading">Our mission is to make building websites easier for everyone. </h2>
          <p className="text">
            Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.
          </p>
          <div className="action">
            <button> Read our story </button>
          </div>
        </div>
      </section>

      <section className="founding">
        <div className="container-1300">
          <div className="row">
            <figure className="column left-column ">
              <img src="" alt="" />
            </figure>
            <div className="column right-column ">
              <h3 className="heading">Our founding </h3>
              <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="growth">
        <div className="container-1300">
          <div className="row">
            <div className="column left-column ">
              <h3 className="heading">Our founding </h3>
              <p className="text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam. </p>
            </div>
            <figure className="column left-column ">
              <img src="" alt="" />
            </figure>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container-1300">
          <h3 className="heading"> Our team </h3>
          <p className="text">Dedicated to quality and your success </p>
          <div className="row">
            <TeamBox name="Ibbie Eckart" position="Founder & CEO" />
            <TeamBox name="Arden Vasak " position="CFO" />
            <TeamBox name="Toribio Nerthus " position="Operations Manager" />
            <TeamBox name="Malvina Calla" position="CTO" />
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}


function TeamBox() {
  return (
    <div className="box">
      <figure>
        <img src="" alt="" />
      </figure>
      <h4 className="heading">Nihat Abdullazade </h4>
      <p className="text"> Founder & CEO </p>
    </div>
  )

}