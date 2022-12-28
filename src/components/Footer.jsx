import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="container-1300">
        <div className="row">
          <p className="copyright"> Copyright © Your Website 2022</p>
          <ul className='link'>
            <li> <a href=""> Privacy </a>  </li>
            <li> <a href=""> Terms </a> </li>
            <li> <a href=""> Contact </a> </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}