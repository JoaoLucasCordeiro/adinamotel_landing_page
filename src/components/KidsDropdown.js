import React, { useContext } from 'react';

// menu
import { Menu } from '@headlessui/react'

// icons
import { BsChevronDown } from 'react-icons/bs'
import { RoomContext } from '../context/RoomContext';

const lis = [
  { name: '0 Criança' },
  { name: '1 Crianças' },
  { name: '2 Crianças' },
  { name: '3 Crianças' },
  { name: '4 Crianças' },
]


const KidsDropdown = () => {

  const { kids, setKids } = useContext(RoomContext)

  return (
    <Menu as="div" className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids === '0 Crianças' ? 'Sem Crianças' : kids}
        <BsChevronDown className='text-accent-hover text-base ' />
      </Menu.Button>
      <Menu.Items as="ul" className='bg-white absolute w-full flex flex-col z-40'>
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)}
              as="li"
              key={index}
              className='border-b last-of-type:border-b-0 h-12
             hover:bg-accent hover:text-white w-full 
             text-center cursor-pointer'>
              {li.name}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
};

export default KidsDropdown;
