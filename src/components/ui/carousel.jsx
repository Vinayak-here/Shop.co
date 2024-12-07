import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [slides, setSlides] = React.useState([])

  const onSelect = React.useCallback(() => {
    if (!api) return
    setSelectedIndex(api.selectedScrollSnap())
    setSlides(api.scrollSnapList())
  }, [api])

  React.useEffect(() => {
    if (api && setApi) {
      setApi(api)
    }
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect()
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => api.off("select", onSelect)
  }, [api, onSelect])

  return (
    <CarouselContext.Provider value={{ carouselRef, api, orientation }}>
      <div ref={ref} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
        {children}
        <Dots slides={slides} selectedIndex={selectedIndex} />
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)} {...props} />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
  return (
    <div ref={ref} role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)} {...props} />
  )
})
CarouselItem.displayName = "CarouselItem"

const Dots = ({ slides, selectedIndex }) => {
  const { api } = useCarousel()

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={cn(
            "h-2 w-2 rounded-full",
            selectedIndex === index ? "bg-gray-800" : "bg-gray-400"
          )}
          onClick={() => api?.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}

export { Carousel, CarouselContent, CarouselItem }
