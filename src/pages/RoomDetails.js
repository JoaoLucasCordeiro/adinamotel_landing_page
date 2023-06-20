import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// componentes
import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'

// scroll top component
import ScrollToTop from '../components/ScrollToTop'

// context
import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';


const RoomDetails = () => {

  const { rooms } = useContext(RoomContext)
  const { id } = useParams()

  // pegando detalhes de cada quarto
  const room = rooms.find(room => {
    return room.id === Number(id)
  })

  // fazendo o destructure
  const { name, description, facilities, imageLg, price } = room

  return (
    <section>
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black/70'></div>

        <h1 className='text-6xl text-white z-20 font-primary text-center'>Detalhes do {name}</h1>
      </div>

      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          <div className='w-full h-full lg:w-[60%] px-6'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img src={imageLg} alt="Room picture" className='mb-8' />
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room facilities</h3>
              <p className='mb-12'>
                {description}
              </p>
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  const { name, icon } = item
                  return (
                    <div key={index} className='flex items-center gap-x-3'>
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base text-accent'>{name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='w-full h-full lg:w-[40%]'>
            <div className='py-8 px-6 bg-accent/20 mb-12'>
              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Sua Reserva</h3>
                <div className='h-[60px] '>
                  <CheckIn />
                </div>
                <div className='h-[60px] '>
                  <CheckOut />
                </div>
                <div className='h-[60px] '>
                  <AdultsDropdown />
                </div>
                <div className='h-[60px] '>
                  <KidsDropdown />
                </div>
              </div>
              <button className='btn btn-lg btn-primary w-full '>Fazer reserva por {price}$</button>
            </div>

            <div>
              <h3 className='h3'>Regras do hotel</h3>
              <p className='mb-4'>Quis sunt do anim irure aute occaecat proident et aliqua ullamco veniam occaecat reprehenderit sint.</p>
              <ul className='flex flex-col gap-y-4 '>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Check-out: 10:30 AM 
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                  Proíbido Pets
                </li>
                <li className='flex items-center gap-x-4'>
                  <FaCheck className='text-accent' />
                 Proibído fumar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
};

export default RoomDetails;
