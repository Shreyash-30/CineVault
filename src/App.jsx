import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import breaking from './assets/breaking.jpg'
import fight from './assets/fight.jpg'
import oldboy from './assets/oldboy.jpg'
import shawshank from './assets/shawshank.jpg'
import shutter from './assets/shutter.jpg'
import footer from './assets/footer.svg'
import './App.css'

function App() {
  const items = [
    { id: 278, title: "Beautiful Beach", description: "Enjoy the summer vibes.", img: breaking },
    { id: 278, title: "Mountain Escape", description: "Breathe in the fresh air.", img: shawshank },
    { id: 278, title: "City Lights", description: "The city never sleeps.", img: shutter },
    { id: 278, title: "Urban Nights", description: "Bright lights everywhere.", img: fight },
    { id: 278, title: "Classic Noir", description: "Dark and moody vibes.", img: oldboy },
  ]

  return (
    <>
      <div className="scroll-smooth">
        
        {/* Navbar Section */}
        <section>
          <Navbar />
        </section>

        {/* Carousel Section */}
        <section className="min-h-screen p-4 sm:p-8 w-full bg-black flex flex-col gap-8 justify-around">
          
          {/* Heading */}
          <div className="px-2 sm:px-6 max-w-full sm:max-w-[950px]">
            <h1 className="text-white text-left text-3xl sm:text-5xl lg:text-[70px] font-serif leading-tight">
              Browse old, popular movies & TV shows
            </h1>
          </div>

          {/* Carousel Row */}
          <div className="flex flex-col sm:flex-row sm:gap-20 gap-6">
            
            {/* Left Label */}
            <div className="w-full sm:w-[220px]">
              <h1 className="text-white text-2xl sm:text-[30px] text-left">
                All Time Greatest Movies
              </h1>
            </div>

            {/* Carousel */}
            <div className="flex-1">
              <Carousel className="max-w-full sm:max-w-5xl mx-auto relative">
                <CarouselContent>
                  {items.map(item => (
                    <CarouselItem key={item.id} className="basis-1/2 sm:basis-1/3">
                      <Link to={`/movie/${item.id}`} className="block h-full">
                        <Card className="overflow-hidden h-[300px] sm:h-[425px] bg-black">
                          <CardContent className="p-0 h-full">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 bg-amber-50 p-2 rounded-full shadow-lg cursor-pointer z-10" />
                <CarouselNext className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer z-10" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-black p-6 sm:p-8 text-center">
          <img src={footer} alt="footer" className="w-24 sm:w-32 h-auto mb-5" />
          <h1 className="text-white text-lg sm:text-[30px] max-w-lg mx-auto">
            Find the best movies & TV shows on all your favorite streaming services
          </h1>
        </section>

        {/* Bottom Footer */}
        <footer className="bg-black flex items-center justify-center py-4 sm:py-6">
          <h1 className="text-white text-xl sm:text-3xl">Made with love by CineVault</h1>
        </footer>
      </div>
    </>
  )
}

export default App
