import React, { useContext } from 'react';

// context
import { RoomContext } from '../context/RoomContext'

// components
import Room from '../components/Room'
import { SpinnerDotted } from 'spinners-react'

const Rooms = () => {

  const { rooms, loading } = useContext(RoomContext)

  return (
    <section className='py-24'>
      {loading && (
        <div className='h-screen fixed bottom-0 top-0 right-0 bg-black/90 w-full z-50 flex items-center justify-center'>
          <SpinnerDotted color='white' />
        </div>
      )}
      <div className='container mx-auto lg:px-0'>

        <div className='text-center'>
          <div className='font-territary uppercase text-[15px] tracking-[6px]'>Hotel & Spa Adina</div>
          <h2 className='font-primary text-[45px] mb-4'>Quartos & Suítes</h2>
        </div>

        <div className='grid grid-cols max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {rooms.map((room) => {
            return (
              <Room key={room.id} room={room} />
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default Rooms;
