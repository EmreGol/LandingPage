import bgElement from "../assets/bg element.png"
import frame from "../assets/Frame.png"

const OurServices = () => {
  return (
    <div className="mt-32">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <hr className="w-16 h-0.5 mx-auto bg-black rounded mb-6"/>
        <p className="w-3/5 text-center mx-auto text-neutral-400 text-lg font-light">
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </p>
        <div className="relative">
          <img src={bgElement} alt="Grid" className="absolute left-0 -top-60 mt-10 z-0" />
          <div className="flex flex-wrap justify-center w-3/4 mx-auto mt-16 space-y-10">
            <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3 mt-10">
              <div className="bg-white shadow-thin px-10 py-10 rounded-xl">
                <img src={frame} alt="" className="mb-7"/>
                <h3 className="font-bold text-2xl mb-4">Search Doctor</h3>
                <p className="text-neutral-400">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3">
              <div className="bg-white shadow-thin px-10 py-10 rounded-xl">
                <img src={frame} alt="" className="mb-7"/>
                <h3 className="font-bold text-2xl mb-4">Online Pharmacy</h3>
                <p className="text-neutral-400">Buy your medicines with our mobile application with a simple delivery system</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3">
              <div className="bg-white shadow-thin px-10 py-10 rounded-xl">
                <img src={frame} alt="" className="mb-7"/>
                <h3 className="font-bold text-2xl mb-4">Consultation</h3>
                <p className="text-neutral-400">Free consultation with our trusted doctors and get the best recomendations</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3">
              <div className="bg-white shadow-thin px-10 py-10 rounded-xl">
                <img src={frame} alt="" className="mb-7"/>
                <h3 className="font-bold text-2xl mb-4">Details info</h3>
                <p className="text-neutral-400">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3">
              <div className="bg-white shadow-thin px-10 py-10 rounded-xl">
                <img src={frame} alt="" className="mb-7"/>
                <h3 className="font-bold text-2xl mb-4">Emergency care</h3>
                <p className="text-neutral-400">Buy your medicines with our mobile application with a simple delivery system</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3">
              <div className="bg-white shadow-thin px-10 py-10 rounded-xl">
                <img src={frame} alt="" className="mb-7"/>
                <h3 className="font-bold text-2xl mb-4">Tracking</h3>
                <p className="text-neutral-400">Free consultation with our trusted doctors and get the best recomendations</p>
              </div>
            </div>
            
          </div>
          <div className="text-center my-20">
            <a href="" className="border-blue-500 border rounded-full px-10 py-3 text-blue-500 font-semibold border-2">Learn More</a>
          </div>
        </div>
    </div>
  )
}

export default OurServices