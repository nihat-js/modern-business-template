import React from 'react'
import Nav from '../components/Nav'
import './Home.scss'

export default function Home() {
  return (
    <main className='home-page'>
      <div className="nav-wrap">
        <div className="container-1300">
          <Nav />
        </div>
        <div className="hero-wrap">
          <div className="container-1300">
            <div className="hero">
              <div className="row">
                <div className="left-column">
                  <h2 className="heading">Modern Business template for free everyone </h2>
                  <p className="subheading">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                  <div className="action">
                    <button className="btn-get-started">Get Started</button>
                    <button className="btn-learn-mroe">Learn More </button>
                  </div>
                </div>
                <div className="right-column">
                  <span className="banner"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="building-wrap">
          <div className="container-1300">
            <div className="building">
              <div className="row">
                <div className="left-column">
                  <h3 className="heading">A better way to start building.</h3>
                </div>
                <div className="right-column">
                  <div className="el">
                    <figure>
                      <img src="" alt="" />
                    </figure>
                    <h4 className="heading">Featured title </h4>
                    <p className="text"> Paragraph of text beneath the heading to explain the heading. Here is just a bit more text </p>
                  </div>
                  <div className="el">
                    <figure>
                      <img src="" alt="" />
                    </figure>
                    <h4 className="heading">Featured title </h4>
                    <p className="text"> Paragraph of text beneath the heading to explain the heading. Here is just a bit more text </p>
                  </div>
                  <div className="el">
                    <figure>
                      <img src="" alt="" />
                    </figure>
                    <h4 className="heading">Featured title </h4>
                    <p className="text"> Paragraph of text beneath the heading to explain the heading. Here is just a bit more text </p>
                  </div>
                  <div className="el">
                    <figure>
                      <img src="" alt="" />
                    </figure>
                    <h4 className="heading">Featured title </h4>
                    <p className="text"> Paragraph of text beneath the heading to explain the heading. Here is just a bit more text </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quote-wrap">
          <div className="container-1300">
            <div className="box">
              <p className="text">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
