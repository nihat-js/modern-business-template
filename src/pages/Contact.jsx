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
              <div className="input-field">
                <div className="input-group">
                  <input type="text" />
                  <span className="placeholder"> Full Name </span>
                </div>
                <span className="error"></span>
              </div>
              <div className="input-field">
                <div className="input-group">
                  <input type="text" />
                  <span className="placeholder"> Email address </span>
                </div>
                <span className="error"></span>
              </div>
              <div className="input-field">
                <div className="input-group">
                  <input type="text" />
                  <span className="placeholder"> Phone Number </span>
                </div>
                <span className="error"></span>
              </div>
              <div className="textarea-field">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="button-field">
                <button> Submit  </button>
              </div>


            </form>
            <div className="row">
              <Box img='' heading="Chat with us" text="Chat live with one of our support specialists." />
              <Box img='' heading='Ask the community' text='Explore our community forums and communicate with other users.' />
              <Box img='' heading='Support center' text='Browse FAQ s and support articles to find solutions.' />
              <Box img='' heading='Call us' text='Call us during normal business hours at (555) 892-9403.' />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}


function Box() {
  return (
    <div className='box'>
      <figure>
        <img src="" alt="" />
      </figure>
      <h4 className="heading">Chat with us </h4>
      <p className="text">Chat live with one of our support specialists.</p>
    </div>
  )
}