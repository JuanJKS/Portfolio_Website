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
                        Con más de 10 años de experiencia en logística e IT, he desarrollado fuertes 
                        habilidades de comunicación y negociación, liderando proyectos centrados en el 
                        cliente. Mi objetivo es aplicar estas habilidades en una nueva etapa a la cual apunto: 
                        convertirme en un Full Stack Web Developer. A pesar de que no tengo experiencia 
                        formal en este campo, mi mentalidad de resolución de problemas y mi entusiasmo 
                        por el aprendizaje continuo me impulsan a buscar soluciones creativas, prolijas 
                        y eficientes en el desarrollo web. Mi objetivo es aportar valor a mi equipo de 
                        desarrollo, aprovechando mi mentalidad resolutiva para abordar desafíos complejos 
                        y crear soluciones.
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