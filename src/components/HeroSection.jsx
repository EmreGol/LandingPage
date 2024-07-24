import gridImg from "../assets/grid.svg"
import heroImg from "../assets/illustration.png"

const HeroSection = () => {
  return (
    <div className="relative">
        <img src={gridImg} alt="Grid" className="absolute top-8 left-0 " />
        <div className="flex flex-col sm:flex-row container mx-auto px-5 sm:px-5 lg:px-32 items-center py-10">
            <div className="flex-1 mb-20">
                <div className="px-20 text-center sm:text-left">
                    <h2 className="text-5xl font-bold mb-8">
                        Virtual healtcare for you
                    </h2>
                    <p className="text-neutral-500 text-xl mb-12">
                        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                    </p>
                    <a href="" className="bg-blue-500 text-white py-4 px-10 rounded-full text-xl">
                        Consult today
                    </a>
                </div>
            </div>
            <div className="flex-1 text-center">
                <img src={heroImg} alt="illustration" className="w-full" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection