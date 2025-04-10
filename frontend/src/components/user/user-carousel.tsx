'use client'

import { Card, CardContent } from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

export function UserCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{ align: 'start', loop: true }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">1</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">2</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">4</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-3xl font-semibold">5</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
