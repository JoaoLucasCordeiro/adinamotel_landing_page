import React, { useEffect, useState } from 'react';
import LogoWhite from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'

const Header = () => {

  const [header, setHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })

  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        <a href="/">
          {header ?
            (<img src={LogoDark} className='w-[160px]' />)
            :
            (<img src={LogoWhite} className='w-[160px]' />)}
        </a>

        <nav className={`${header ? 'text-primary' : 'text-white'} uppercase flex items-center gap-x-4 font-tertiary tracking-[3px] text-[15px] lg:gap-x-8`}>
            <a href="" className='hover:text-accent transition'>Início</a>
            <a href="" className='hover:text-accent transition'>Quartos</a>
            <a href="" className='hover:text-accent transition'>Restaurante</a>
            <a href="" className='hover:text-accent transition'>Spa</a>
            <a href="" className='hover:text-accent transition'>Contato</a>
        </nav>
      </div>
    </header>
  )
};

export default Header;
