import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from  "./components/ui/carousel"
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
    {
      id: 278,
      title: "Beautiful Beach",
      description: "Enjoy the summer vibes.",
      img: breaking
    },
    {
      id: 278,
      title: "Mountain Escape",
      description: "Breathe in the fresh air.",
      img: shawshank
    },
    {
      id: 278,
      title: "City Lights",
      description: "The city never sleeps.",
      img: shutter
    },
    {
      id: 278,
      title: "City Lights",
      description: "The city never sleeps.",
      img: fight
    },
    {
      id: 278,
      title: "City Lights",
      description: "The city never sleeps.",
      img: oldboy
    },
  ]

  return (
   
  <>
 
    <div className=" scroll-smooth">
      
      {/* Navbar Section */}
      <section className="">
        <Navbar />
      </section>

      {/* Carousel Section */}
      <section className=" h-screen p-0 m-0 w-full bg-[#000] flex flex-col justify-around">
        
        <div className='p-0 m-0 w-[950px] px-6'>
          <h1 className='text-white text-left text-[70px] font-serif'>
            Browse old, popular movies & TV shows
          </h1>
        </div>

        <div className='flex flex-row gap-20 p-0 m-0'>
          <div className='mt-50 ml-5 w-[220px]'>
            <h1 className='text-white text-[30px] text-left'>All Time Greatest Movies</h1>
          </div>

          <div className="flex-1">
            <Carousel className="max-w-5xl mx-auto relative">
              <CarouselContent>
                {items.map(item => (
                  <CarouselItem key={item.id} className="basis-1/3">
                     <Link to={`/movie/${item.id}`} className="block h-full">
                  <Card  className="overflow-hidden h-[425px] bg-black p-0 m-0"> {/* fixed height on card */}
  <CardContent  className="p-0 h-full">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover p-0 m-0"
    />
  </CardContent>
</Card>
</Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-amber-50 p-2 rounded-full shadow-lg cursor-pointer z-10"
              />
              <CarouselNext
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer z-10"
              />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Find the Best Movies Section */}
      <section className=" h-screen flex flex-col items-center justify-center bg-black p-8 text-center">
        <img src={footer} alt="footer" className="w-50 h-20 mb-5" />
        <h1 className="text-white text-[30px] max-w-lg mx-auto">
          Find the best movies & TV shows on all your favorite streaming services
        </h1>
      </section>
      <footer className='bg-black flex items-center justify-center py-6'>
      <h1 className='text-white text-3xl'>Made with love by CineVault</h1>
    </footer>

    </div>

       
 

  </>


  
  )
}

export default App
