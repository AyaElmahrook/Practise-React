import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
           <a className="navbar-brand">Ayah Almahrouq</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                <Link className="nav-link" to="home">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="clock">
                  <i className="fa-solid fa-clock"></i> Clock
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="game">
                  <i className="fa-solid fa-gamepad"></i> Game
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="news">
                  <span className="fa-layers fa-fw">
                    <i className="fa-solid fa-earth-africa"></i>
                    <span
                      className="fa-layers-counter"
                      style={{ background: "Tomato" }}
                    >
                      1,419
                    </span>
                  </span>
                  News
                </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link active" to="sign" aria-current="page">Sign</Link>
               </li>
               <li className="nav-item">
                 <Link to="about" className="nav-link">About</Link>
               </li>
             </ul>
           </div>
         </div>
       </nav>
        </>
    )
}

export default NavBar
