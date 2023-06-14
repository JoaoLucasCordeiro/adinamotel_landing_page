import React from 'react';

import { Link } from 'react-router-dom'

import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs'

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
      <div className='overflow-hidden'>
        <img src={image} alt="Hotel Images" className='group-hover:scale-110 transition-all duration-300 w-full' />
      </div>
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] 
      -translate-y-1/2 flex justify-center items-center uppercase 
      font-tertiary tracking-[1px] font-semibold text-base'>

        <div className='flex justify-between w-[80%]'>
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsArrowsFullscreen className='text-[15px]' />
            </div>
            <div className='flex gap-x-1'>
              <div>Tamanho</div>
              <div>{size}m²</div>
            </div>
          </div>

          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsPeople className='text-[15px]' />
            </div>
            <div className='flex gap-x-1'>
              <div>Pessoas</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Room;
