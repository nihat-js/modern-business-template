import './Contact.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import imageChat from '../assets/img/chat.svg'

export default function Contact() {
  return (
    <div className='contact-page'>

      <Nav />

      <section className="get-in-touch">
        <div className="container">
          <div className="row">
            <picture>
              <img src={imageChat} alt="" />
            </picture>
            <h2 className="heading">Get in touch</h2>
            <p className="subheading"> We'd love to hear from you          </p>
            <form action="">
              <div className="input-group">
                <div >
                  <input type="text" />
                  <span className="placeholder"> Full Name </span>
                </div>
                <span className="error"></span>
              </div>
              <div className="input-group">
                <div >
                  <input type="text" />
                  <span className="placeholder"> Email address </span>
                </div>
                <span className="error"></span>
              </div>
              <div className='input-group' >
                <div>
                  <input type="text" />
                  <span className="placeholder"> Phone Number </span>
                </div>
                <span className="error"></span>
              </div>
              <div className="textarea">
                <textarea name="" id="" ></textarea>
              </div>
              <div className="action">
                <button> Submit  </button>
              </div>


            </form>

          </div>
        </div >
      </section >

      <section className="boxes">
        <div className="container">
          <div className="row">
            <Box img={imageChat} title="Chat with us" text="Chat live with one of our support specialists." />
            <Box img={imageChat} title='Ask the community' text='Explore our community forums and communicate with other users.' />
            <Box img={imageChat} title='Support center' text='Browse FAQ s and support articles to find solutions.' />
            <Box img={imageChat} title='Call us' text='Call us during normal business hours at (555) 892-9403.' />
          </div>

        </div>
      </section>

      <Footer />

    </div >
  )
}


function Box(props) {
  return (
    <div className='box'>
      <figure>
        <img src={props.img} alt="" />
      </figure>
      <h4 className="title"> {props.title} </h4>
      <p className="text"> {props.text}  </p>
    </div>
  )
}