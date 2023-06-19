import React from 'react';
import LogoWhite from '../assets/img/logo-white.svg'


const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        <img src={LogoWhite} alt="Footer Logo" />
        <div>
          Copyright &copy; 2023 Todos os direitos reservados. Feito por <a href="https://www.linkedin.com/in/joaolucascordeiro/" target='_blank' className='text-accent'>Lucas Cordeiro ❤</a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
