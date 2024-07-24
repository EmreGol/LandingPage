import gridImg from "../assets/grid.svg"

const Footer = () => {
  return (
    <div className="bg-blue-400 py-32 relative">
        <img src={gridImg} alt="Grid" className="absolute -top-20 right-0 " />
        <img src={gridImg} alt="Grid" className="absolute bottom-0 left-0 " />
        <div className="w-3/4 mx-auto">
            <div className="flex flex-col md:flex-row space-y-10">
                <div className="flex-2 pr-20">
                    <div className="flex items-center flex-shrink-0">
                        <div className="font-bold bg-white text-3xl text-blue-500 mr-2 w-10 h-10 text-center rounded-full flex justify-center items-center">
                            T
                        </div>
                        <span className="text-2xl font-semibold tracking-tight text-white">Trafalgar</span> 
                    </div>
                    <p className="mt-7 text-white font-thin tracking-wide">
                        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                    </p>
                    <p className="mt-7 text-white font-thin tracking-wide">
                        ©Trafalgar PTY LTD 2020. All rights reserved
                    </p>
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-semibold tracking-tight text-white">Company</h4>
                    <ul className="text-white font-thin tracking-wide space-y-3 pt-8">
                        <li>About</li>
                        <li>Testimonials</li>
                        <li>Find a doctor</li>
                        <li>Apps</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-semibold tracking-tight text-white">Region</h4>
                    <ul className="text-white font-thin tracking-wide space-y-3 pt-8">
                        <li>Indonesia</li>
                        <li>Singapore</li>
                        <li>Hongkong</li>
                        <li>Canada</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-semibold tracking-tight text-white">Help</h4>
                    <ul className="text-white font-thin tracking-wide space-y-3 pt-8">
                        <li>Help center</li>
                        <li>Contact support</li>
                        <li>Instructions</li>
                        <li>How it works</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer