import Navbar from './components/Navbar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import breaking from './assets/breaking.jpg'
import fight from './assets/fight.jpg'
import oldboy from './assets/oldboy.jpg'
import prisoners from './assets/prisoners.jpg'
import shawshank from './assets/shawshank.jpg'
import shutter from './assets/shutter.jpg'
import footer from './assets/footer.svg'
import { Button } from "@/components/ui/button"
import './App.css'

function App() {
  const items = [
    {
      id: 1,
      title: "Beautiful Beach",
      description: "Enjoy the summer vibes.",
      img: `${breaking}`
    },
    {
      id: 2,
      title: "Mountain Escape",
      description: "Breathe in the fresh air.",
      img: `${shawshank}`
    },
    {
      id: 3,
      title: "City Lights",
      description: "The city never sleeps.",
      img: `${shutter}`
    },
     {
      id: 4,
      title: "City Lights",
      description: "The city never sleeps.",
      img: `${fight}`
    },
     {
      id: 5,
      title: "City Lights",
      description: "The city never sleeps.",
      img: `${oldboy}`
    },
  ];

  return (
    <>

      <Navbar/>
      <div className='p-0 m-0 w-full  bg-[#000] flex flex-col justify-around min-h-screen'>
        <div className='p-0 m-0 w-[950px] px-6'>
          <h1 className='text-white text-left text-[70px] font-serif'>
            Browse old, popular movies & TV shows
          </h1>
        </div>
       
           <div className='flex flex-row gap-20  p-0 m-0'>
            <div className='mt-25 ml-5 w-[220px]' >
              <h1 className='text-white text-[30px] text-left '>All Time Greatest Movies</h1>
              
            </div>
            <div>
<Carousel className=" max-w-5xl mx-auto relative ">

        <CarouselContent>
          {items.map(item => (
            <CarouselItem key={item.id} className="basis-1/3">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover gap-5"
                  />
                </CardContent>
                {/* <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader> */}
                {/* <CardFooter>
                  <Button className='bg-amber-400'>Learn More</Button>
                </CardFooter> */}
              </Card>
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
      <div className='p-0 flex items-center justify-center flex-col m-0 w-full h-[400px]'>
        <img src='src\assets\footer.svg' alt="footer" className='w-50 h-20' />
        <div className='p-0 m-5 w-[500px]'>
 <h1 className='text-white text-[30px] text-center'>Find the best movies & TV shows on all your favorite streaming services </h1>
        </div>
       
      </div>
       </div>
<footer className='bg-black'>
<h1 className='text-white text-center'>Made with love by CineVault</h1>
</footer>
    </>

  )
}

export default App
