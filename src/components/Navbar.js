import React from 'react'
import logo from './img/logo2.png'

const Navbar = () => {
  return (
    <div >
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4"><img src={logo} alt="logo" width='200' /></span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="/features" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="/pricing" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
            </header>
        </div>
        <div className="b-example-divider"></div>
    </div>
  )
}

export default Navbar