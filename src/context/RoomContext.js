import React, { createContext, useEffect, userEffect, useState } from 'react';

// data
import { roomData } from '../data'

// create context
export const RoomContext = createContext()

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData)
  const [adults, setAdults] = useState('1 Adulto')
  const [kids, setKids] = useState('0 Crianças')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  })

  const handleClick = (e) => {
    e.preventDefault()

    // lógica de procurar quartos pelo total de pessoas que cabem nele
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson
    })
    setRooms(newRooms)
  }
  
  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick }}>
      {children}
    </RoomContext.Provider>
  )
};

export default RoomProvider;
