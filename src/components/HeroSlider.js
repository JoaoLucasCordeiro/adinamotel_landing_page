import React from 'react';

// swiper react 
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

// swiper modules
import { EffectFade, Autoplay } from 'swiper'

// imagens
import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'

const slides = [
  {
    title: 'O hotel de luxo para suas férias',
    bg: Img1,
    btnText: 'Veja nossos quartos'
  },
  {
    title: 'O hotel de luxo para suas férias',
    bg: Img2,
    btnText: 'Veja nossos quartos'
  },
  {
    title: 'O hotel de luxo para suas férias',
    bg: Img3,
    btnText: 'Veja nossos quartos'
  },
]

const HeroSlider = () => {
  return (

    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px] '>

      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide

        return (
          <SwiperSlide className='h-full bg-pink-400 relative flex justify-center items-center' key={index}>
            <div className='z-20 text-white text-center '>
              <div className='uppercase font-territary tracking-[6px] mb-5'>
                Faça sua reserva e venha aproveitar
              </div>
              <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
              <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
            </div>
            <div className='absolute top-0 w-full '>
              <img className='object-cover h-full w-full' src={bg} alt="" />
            </div>

            <div className='absolute w-full h-full bg-black/70'>

            </div>
          </SwiperSlide>
        )
        
      })}


    </Swiper>
  )
};

export default HeroSlider;
