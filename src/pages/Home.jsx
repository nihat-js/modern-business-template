import './Home.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import heroImage from '../assets/img/home-hero.jpg'
import bagImage from '../assets/img/bag.svg'
import profilPictureImage from '../assets/img/profile-picture.jpg'
import blogImage1 from '../assets/img/blog-1.jpg'
import blogImage2 from '../assets/img/blog-2.jpg'
import blogImage3 from '../assets/img/blog-3.jpg'

export default function Home() {
  return (
    <main className='home-page'>

      <Nav />

      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h2 className="heading"> Take risks and continue (Nihat JS) </h2>
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


      <section className="quote">
        <div className="container">
          <div className="row">
            <p className="text">"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</p>
            <div className="author">
              <img src={profilPictureImage} alt="" />
              <h4 className="fullname"> Nihat Abdullazade </h4>
              <span className="slash">  / </span>
              <h4 className="position"> JS,Front End </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <h3 className="heading">From our blog</h3>
          <p className="subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
          <div className="row">
            <BlogBox img={blogImage1} tags={['news']} title="Amazing " text=" Some quick example text to build on the card title and make up the bulk of the card's content. " authorImage={profilPictureImage}
              authorFullName="Nihat Abdullazade" date="March 12 2022" readTime="6 min" />

            <BlogBox img={blogImage2} tags={['news']} title="Amazing " text="Some quick example text to build on the card title and make up the bulk of the card's content." authorImage={profilPictureImage}
              authorFullName="Nihat Test" date="March 12 2022" readTime="2 min" />

            <BlogBox img={blogImage3} tags={['news']} title="Amazing " text="Some quick example text to build on the card title and make up the bulk of the card's content." authorImage={profilPictureImage}
              authorFullName="Nihat JS" date="March 12 2022" readTime="4 min" />

          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h3 className="heading">New products, delivered to you.</h3>
              <p className="subheading">Sign up for our newsletter for the latest updates.</p>
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
      </section>


      <Footer />

    </main>
  )
}

function BlogBox(props) {
  return (
    <div className="box">

      <figure >
        <img src={props.img} alt="" />
        <span></span>
      </figure>

      <div className="content">

        <div className="tags">
          {props.tags.map(x => <span className="tag"> {x} </span>)}
        </div>
        <h3 className="title">  {props.title} </h3>
        <p className="text"> {props.text} </p>
        <div className="author">
          <figure>
            <img src={props.authorImage} alt="" />
          </figure>
          <div className="content">
            <h4 className="fullname"> {props.authorFullName} </h4>
            <span className="date"> {props.date} </span>
            <span className="read-time"> {props.readTime} read</span>
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