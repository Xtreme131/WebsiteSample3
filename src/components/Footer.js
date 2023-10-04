import React from "react"

export default function Footer(){
   return (
     <div className="footer_grid">
        <div className="fg_item1"> <img src="./img/logo.png" alt="No carga"/> </div>
        
        <div className="fg_item2">
            <h4>NAVIGATION</h4>
            <p>WHO WE DO</p>
            <p>PROJECTS</p>
            <p>CONTACT US</p>
        </div>

        <div className="fg_item3">
            <h4>CONTACT</h4>
            <h4>Logos</h4>
            <p>Quantum3 Labs Pte. Ltd. 
               Company Number 202334922W
               3 Fraser Street #04-23A Duo Tower Singapore 189352
               contact@quantum3labs.com</p>   
        </div>

        <div className="fg_item4"><h5>© 2023 quantum3 labs. All rights reserved</h5></div>

    </div>
   )
    
}