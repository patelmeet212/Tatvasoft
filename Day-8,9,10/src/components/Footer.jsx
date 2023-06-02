import React from 'react'
import logo from './logo.jpg'
export default function Footer() {
  return (
    <div>
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">
            <div className="container">
                <div className="navbar-brand justify-content-center text-center" >
                    <img src={logo} width="50" height="50" alt="Tatvasoft"/>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                © 2018 TatvaSoft.com:All RIght Approved
            </div>
        </footer>
    </div>
  )
}
