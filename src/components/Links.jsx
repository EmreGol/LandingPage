import img1 from "../assets/illustration2.png"
import img2 from "../assets/illustration3.png"
import arrow from "../assets/arrow.svg"

const Links = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row container mx-auto px-5 sm:px-5 lg:px-32 items-center justify-content py-10">
            <div className="flex-1 text-center">
                <img src={img1} alt="illustration" className="w-full" />
            </div>
            <div className="flex-1 mb-20">
                <div className="px-20 text-center sm:text-left">
                    <h2 className="text-5xl font-bold mb-8">
                        Leading healthcare providers
                    </h2>
                    <hr className="w-16 h-0.5 bg-black rounded mb-6 mx-auto sm:mx-0"/>
                    <p className="text-neutral-500 text-xl mb-12">
                        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver                    </p>
                    <a href="" className="border-blue-500 border-2 text-blue-500 py-3 px-10 rounded-full text-xl font-semibold hover:bg-blue-500 hover:text-white hover:border-2">
                        Learn More
                    </a>
                </div>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row container mx-auto px-5 sm:px-5 lg:px-32 items-center justify-content py-10 mt-28">
            <div className="flex-1 text-center order-1 sm:order-2">
                <img src={img2} alt="illustration" className="w-full" />
            </div>
            <div className="flex-1 mb-20 order-2 sm:order-1">
                <div className="px-20 text-center sm:text-left">
                    <h2 className="text-5xl font-bold mb-8">
                        Download our mobile apps
                    </h2>
                    <hr className="w-16 h-0.5 bg-black rounded mb-6 mx-auto sm:mx-0"/>
                    <p className="text-neutral-500 text-xl mb-12">
                    Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
                    </p>
                    <a href="" className="inline-flex items-center justify-center border-blue-500 border-2 text-blue-500 py-3 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 hover:text-blue-500 hover:border-2">
                        Download
                        <img src={arrow} alt="" className="ml-2"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Links