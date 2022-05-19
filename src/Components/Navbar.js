import React from 'react';
import '../css/navbar.css'


function Navbar() {
    return (




        <header class="header">

            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#televisao">Televisao</a></li>
                <li><a href="#teatro">Teatro</a></li>
                <li><a href="#cinema">Cinema</a></li>
                <li><a href="#publicidade">Publicidade</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </header>





    )
}
export default Navbar;