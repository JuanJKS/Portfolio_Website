import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
    const refForm = useRef();

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg('');

        const serviceId = 'service_8fibj99';
        const templateId = 'template_5e1j8wn';
        const apiKey = 'EigCH_bWKVIFtYyAq';

        try {
            setSending(true);
            const responseSendMail = await emailjs.sendForm(serviceId, templateId, refForm.current, apiKey);
            setSending(false);
            if (responseSendMail.status === 200) {
                setMsg('Mensaje enviado con éxito');
                refForm.current.reset();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className='contact section'>
            <h2 className='section__title'>
                Formas de <span>contacto</span>
            </h2>

            <div className='contact__container container grid'>
                <div className='contact__data'>
                    <h3 className='contact__title'>No dude en contactarme</h3>

                    <p className='contact__description'>
                    Estoy abierto a nuevas oportunidades y con ganas de desarrollar mis capacidades.
                    </p>

                    <div className='contact__info'>
                        <div className='info__item'>
                            <FaEnvelopeOpen className='info__icon'/>

                            <div>
                                <span className='info__title'>Envíame un correo</span>
                                <h4 className='info__desc'>bo.juancruz14@gmail.com</h4>
                            </div>
                        </div>

                        <div className='info__item'>
                            <FaPhoneSquareAlt className='info__icon' />

                            <div>
                                <span className='info__title'>Llámame</span>
                                <h4 className='info__desc'>+5491150629428</h4>
                            </div>
                        </div>
                    </div>

                    <div className='contact__socials'>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer' className='contact__social-link'>
                            <FaFacebookF />
                        </a>

                        <a href='https://twitter.com' target='_blank' rel='noreferrer' className='contact__social-link'>
                            <FaTwitter />
                        </a>

                        <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='contact__social-link'>
                            <FaLinkedinIn />
                        </a>

                        <a href='https://github.com/JuanJKS' target='_blank' rel='noreferrer' className='contact__social-link'>
                            <BsGithub />
                        </a>
                    </div>
                </div>

                <form ref={refForm} action='' onSubmit={handleSubmit} className='contact__form'>
                    <div className='form__input-group'>
                        <div className='form__input-div'>
                            <input 
                                type='text'
                                placeholder='Nombre'
                                className='form__control'
                                name='name'
                                required 
                            />
                        </div>

                        <div className='form__input-div'>
                            <input 
                                type='email'
                                placeholder='Correo electrónico'
                                className='form__control'
                                name='email'
                                required 
                            />
                        </div>

                        <div className='form__input-div'>
                            <input 
                                type='text'
                                placeholder='Asunto'
                                className='form__control'
                                name='subject'
                            />
                        </div>
                    </div>

                    <div className='form__input-div'>
                        <textarea 
                            placeholder='Mensaje'                        
                            className='form__control textarea'
                            name='message'
                            required
                        ></textarea>    
                    </div>

                    <button className='button'>
                        Enviar Mensaje
                        <span className='button__icon contact__button-icon'>
                            <FiSend />
                        </span>
                    </button>
                </form>
                {sending ? <p className='sending-message'>Enviando su mensaje...</p> : null}
                {msg ? <p className='sending-message'>{msg}</p> : null}
            </div>
        </section>
        
    )
}

export default Contact;