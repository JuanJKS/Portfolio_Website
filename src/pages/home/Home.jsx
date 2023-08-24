import React from 'react';
import Profile from '../../assets/home.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img' />

            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'>Soy Juan Cruz Bo.</h1>

                    <div>
                        <h1 className='specialty'>Full Stack Developer</h1>
                    </div>

                    <p className='home__description'>
                    Soy un estudiante de programación, orientado en desarrollo full stack, con mucho entusiasmo por aprender cosas nuevas todo el tiempo y poder incorporarlo a mis proyectos personales. Me encuentro en la búsqueda de mi primer trabajo como programador, con energía y ganas de poder comenzar a aplicar en un día a día laboral todo lo que en este tiempo he aprendido y sigo aprendiendo.
                    </p>

                    <Link to='/about' className='button'>
                        Mas sobre mí{' '}
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='color__block'></div>
        </section>
    )
}

export default Home;