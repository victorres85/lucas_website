import React from 'react';
import '../css/menu.css'
import Televisao from './Televisao'
import Cinema from './Cinema'
import Teatro from './Teatro';
/***********************
  Menu Component
 ***********************/

const Menu = props => {
    return (
        <div className={`menu-container ${props.showMenu}`}>
            <div className="overlay" />
            <div className="menu-items">
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={props.toggleMenu}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={props.toggleMenu}>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#teatro" onClick={props.toggleMenu}>
                            TEATRO
                        </a>
                    </li>
                    <li>
                        <a href="#cinema" onClick={props.toggleMenu}>
                            CINEMA
                        </a>
                    </li>
                    <li>
                        <a href="#televisao" onClick={props.toggleMenu}>
                            TELEVISAO
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={props.toggleMenu}>
                            CONTATO
                        </a>
                    </li>
                </ul>
                <SocialLinks />
            </div>
        </div>
    );
};



/***********************
  Nav Component
 ***********************/

const Nav = props => {
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <a
                        onClick={props.toggleMenu}
                        className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                    >
                        <span />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};




/***********************
  Header Component
 ***********************/

const Header = props => {
    return (
        <header id="welcome-section">
            <div className="silhouette" />
            <div className="silhouette" />
            <div className="container">
                <h1>
                    <span className="line">Lucas Pinheiro</span>
                    <span className="line">Ator</span>
                    <span className="line">
                        <span className="color">&</span> e Mais...
                    </span>
                </h1>
                <div className="buttons">
                    <a href="#projects">Meu Portfolio</a>
                    <a href="#contact" className="cta">
                        Vamos Conversar?
                    </a>
                </div>
            </div>
        </header>
    );
};



/***********************
  About Component
 ***********************/

const About = props => {
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's this guy?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">My name is Yago.</h4>
                        <p>
                            I am a web developer and UX designer based in the beautiful west coast of Spain,
                            Galicia.
                        </p>
                        <p>
                            I really enjoy solving problems as well as making things pretty and easy to use. I
                            can't stop learning new things; the more, the better. I also love photography, a hobby
                            I'm taking along since the good old film cameras. Oh, and rice with milk; I have a
                            passion for rice with milk!
                        </p>
                    </div>
                    <div className="title">
                        <h3>What does he do?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">I'm a programmer.</h4>
                        <p>
                            For the front-end I usually work with Javascript, either standalone or including
                            popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass,
                            CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
                        </p>
                        <p>
                            For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of
                            course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
                        </p>
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Also a designer.</h4>
                        <p>
                            I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
                            Lightroom or Xd are some kind of industry standards and I love working with them. I'm
                            not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
                            that I've been working with.
                        </p>
                        <p>
                            User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                            pretty things is particularly important for me.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};


/***********************
  Project Component
 ***********************/



/***********************
  Contact Component
 ***********************/

const Contact = props => {
    return (
       c
    );
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
    return (
        <footer>
            <div className="wrapper">
                <h3>THANKS FOR VISITING</h3>
                <p>© {new Date().getFullYear()} Yago Estévez.</p>
                <SocialLinks />
            </div>
        </footer>
    );
};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
    return (
        <div className="social">
            <a
                href="https://twitter.com/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Twitter profile"
            >
                {' '}
                <i className="fab fa-twitter" />
            </a>
            <a
                id="profile-link"
                href="https://github.com/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                {' '}
                <i className="fab fa-github" />
            </a>
            <a
                href="https://codepen.io/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Codepen Profile"
            >
                {' '}
                <i className="fab fa-codepen" />
            </a>
        </div>
    );
};



/***********************
  Main Component
 ***********************/

class Menus extends React.Component {
    state = {
        menuState: false
    };

    toggleMenu = () => {
        this.setState(state => ({
            menuState: !state.menuState
                ? 'active'
                : state.menuState === 'deactive'
                    ? 'active'
                    : 'deactive'
        }));
    };

    render() {
        return (
            <React.Fragment>
                <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
                <Header />
                <About />
                <Televisao />
                <Cinema />
                <Teatro />
                <Contact />
                <Footer />
            </React.Fragment>
        );
    }

    componentDidMount() {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        let forestInitPos = -300;

        window.onscroll = () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
                forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
            }

            if (scrollPos - 100 <= window.innerHeight)
                header.style.visibility = header.style.visibility === 'hidden' && 'visible';
            else header.style.visibility = 'hidden';

            if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
            else navbar.classList.remove('bg-active');
        };

        (function navSmoothScrolling() {
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            for (let i in internalLinks) {
                if (internalLinks.hasOwnProperty(i)) {
                    internalLinks[i].addEventListener('click', e => {
                        e.preventDefault();
                        document.querySelector(internalLinks[i].hash).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        });
                    });
                }
            }
        })();
    }
}

export default Menus;