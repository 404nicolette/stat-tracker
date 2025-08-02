import React from 'react'
import Card from './Card'
function CardMarquee() {
  return (
    <div className='overflow-x-hidden absolute h-[25%] w-full lg:h-[35%]'>
      <div className='absolute animate-marquee flex whitespace-nowrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className='absolute animate-marquee2 flex whitespace-nowrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
        
        
        
    </div>
  )
}

export default CardMarquee