import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mpc1 from '../img/televisao/cena2.png'
import mpc2 from '../img/televisao/cena9.png'
import mpc3 from '../img/televisao/cena11.png'



const tv = [
    {
        name: 'Meu Pedacinho de Chao 01',
        personagem: 'Barbeiro',
        ano: 2014,
        de: 'Benedito Ruy Barbosa',
        img: mpc1,
        alt: 'Meu Pedacinho de Chao 01'
    },
    {
        name: 'êta Mundo bom!',
        personagem: 'Barbeiro',
        ano: 2016,
        de: 'Walcyr Carrasco',
        img: mpc2,
        alt: 'êta Mundo bom!'
    },
    {
        name: 'Meu Pedacinho de Chao 01',
        personagem: 'Barbeiro',
        ano: 2014,
        de: 'Benedito Ruy Barbosa',
        img: mpc1,
        alt: 'Meu Pedacinho de Chao 01'
    },
    {
        name: 'êta Mundo bom!',
        personagem: 'Barbeiro',
        ano: 2016,
        de: 'Walcyr Carrasco',
        img: mpc2,
        alt: 'êta Mundo bom!'
    },
    {
        name: 'Eu odeio meu chefe',
        personagem: 'Diversos Personagens',
        ano: 2012,
        de: 'Beto Ribeiro',
        img: mpc3,
        alt: 'Eu odeio meu chefe'
    }
]

const options = {
    nav: true,
    navText: ["<div className='nav-btn prev-slide'></div>", "<div className='nav-btn next-slide'></div>"],
    rewind: true,
    autoplay: false,
    slideBy: 1,
    dots: true,
    dotsEach: true,
    dotData: true,
    responsive: {
        0: {
            items: 1,
            center: true,
            stagePadding: 40,
            margin: 120,
        },
        768: {
            items: 2,
            autoWidth: true,
        },
        992: {
            items: 3,
            autoWidth: false,
            stagePadding: 40,
            margin: 120,
        },
        1310: {
            items: 3,
            autoWidth: false,
            stagePadding: 40,
            margin: 120,
        }
    }
};

export function Televisao() {
    let tvCard = tv.map((item) => (
        <div className='item card' >
            <img className='card-img-top' src={item.img} alt={item.alt} width='350' />
            <div className='card-body' >
                <h5 className="card-title" > {item.name} </h5>
                < p class="card-text" > {item.personagem} </p>
                < p class="card-text" > {item.ano} </p>
                < p class="card-text" > {item.de} </p>
            </div >
        </div >
    ))
    return (
        <div className='owl_container'>
            <OwlCarousel {...options}    >
    { tvCard }
            </OwlCarousel >
        

        </div >  
    )
}         
export default Televisao; 