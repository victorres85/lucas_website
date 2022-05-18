import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Rodape() {
    return (
        <>
            <div class="row">
                <div class="col-md-12 text-center">
                    <a href="https://www.facebook.com/lucas.augusto"><FontAwesomeIcon icon="fab fa-facebook" /></a>
                    <a href="https://www.instagram.com/lucaspinheiro.oficial/"><FontAwesomeIcon icon="fab fa-instagram" /></a>
                    <a href="https://www.youtube.com/tonavida"><FontAwesomeIcon icon="fab fa-youtube" /></a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-06 text-center">
                   <p> LUCAS PINHEIRO - Ator / Apresentador / Locutor
                    DRT 0033455 SP</p>
                </div>
                <div class="col-md-06 text-center">
                    <p> Para assuntos profissionais e de imprensa:</p>
                    <p>(+34) 645 018 155</p>

                    <p>lucasrtv@hotmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Rodape;