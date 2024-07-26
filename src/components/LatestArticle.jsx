import articleImg from "../assets/article.png"
import articleImg2 from "../assets/article2.png"
import articleImg3 from "../assets/article3.png"
import arrow_r from "../assets/arrow_r.png"
import gridImg from "../assets/grid.svg"
import bgElement from "../assets/bg element.png"

const LatestArticle = () => {
  return (
    <div className="my-32 relative">
        <img src={bgElement} alt="Grid" className="absolute right-0 -top-8 transform -scale-x-100" />
        <div>
            <h2 className="text-4xl font-bold text-center mb-6">Check out our latest article</h2>
            <hr className="w-16 h-0.5 mx-auto bg-black rounded mb-20"/>
            <div className="flex flex-wrap justify-center w-3/4 mx-auto mt-16 space-y-10 relative">
                <img src={gridImg} alt="Grid" className="absolute -top-8 -left-8 " />
                <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3 mt-10">
                <div className="bg-white shadow-thin rounded-xl pb-10">
                    <img src={articleImg} alt="" className="mb-7"/>
                    <h3 className="font-bold text-2xl mb-4 w-3/4 mx-auto">Disease detection, check up in the laboratory</h3>
                    <p className="text-neutral-500 w-3/4 mx-auto font-thin tracking-wide">In this case, the role of the health laboratory is very important to do a disease detection...</p>
                    <div className="flex mt-10 w-3/4 mx-auto items-center">
                        <span className="font-semibold text-blue-500">Read more</span>
                        <img src={arrow_r} className="w-5 h-auto ml-3" alt="" />
                    </div>
                </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3 mt-10">
                <div className="bg-white shadow-thin rounded-xl pb-10">
                    <img src={articleImg2} alt="" className="mb-7"/>
                    <h3 className="font-bold text-2xl mb-4 w-3/4 mx-auto">Disease detection, check up in the laboratory</h3>
                    <p className="text-neutral-500 w-3/4 mx-auto font-thin tracking-wide">In this case, the role of the health laboratory is very important to do a disease detection...</p>
                    <div className="flex mt-10 w-3/4 mx-auto items-center">
                        <span className="font-semibold text-blue-500">Read more</span>
                        <img src={arrow_r} className="w-5 h-auto ml-3" alt="" />
                    </div>
                </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 z-20 px-3 mt-10">
                <div className="bg-white shadow-thin rounded-xl pb-10">
                    <img src={articleImg3} alt="" className="mb-7"/>
                    <h3 className="font-bold text-2xl mb-4 w-3/4 mx-auto">Disease detection, check up in the laboratory</h3>
                    <p className="text-neutral-500 w-3/4 mx-auto font-thin tracking-wide">In this case, the role of the health laboratory is very important to do a disease detection...</p>
                    <div className="flex mt-10 w-3/4 mx-auto items-center">
                        <span className="font-semibold text-blue-500">Read more</span>
                        <img src={arrow_r} className="w-5 h-auto ml-3" alt="" />
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-center mt-20">
                <a href="#" className="border-blue-500 border-2 text-blue-500 py-3 px-10 rounded-full text-xl font-semibold block hover:bg-blue-500 hover:text-white hover:border-2 cursor-pointer">
                    View all
                </a>
            </div>
        </div>
    </div>
  )
}

export default LatestArticle