import React from 'react'
import Frame1 from '../assets/Frame1.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem
 
} from "@/components/ui/carousel"

const HomeCarousel = () => {
  return (
    <>
      <div>
        <Carousel className ="flex justify-center align-middle p-16 ml-20 w-auto" >
          <CarouselContent>
            <CarouselItem><img src={Frame1}/></CarouselItem>
            <CarouselItem><img src={Frame1}/></CarouselItem>
            <CarouselItem><img src={Frame1}/></CarouselItem>
          </CarouselContent>
        
        </Carousel>

      </div>
    </>
  )
}

export default HomeCarousel