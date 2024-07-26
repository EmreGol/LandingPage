import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import arrow_r from "../assets/arrow_r.png";
import arrow_l from "../assets/arrow_l.png";
import person from "../assets/person.png";
import gridImg from "../assets/grid.svg"


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="inline-flex transform translate-y-2 z-10 cursor-pointer" onClick={onClick}>
            <img src={arrow_r} alt="Next" className="" />
        </div>
    );
}

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="inline-flex transform translate-y-2 z-10 cursor-pointer" onClick={onClick}>
            <img src={arrow_l} alt="Previous" className="" />
        </div>
    );
}

const comments = [
    {
        name: "Edward Newgate",
        title: "Founder Circle",
        image: person,
        comment: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.”"
    },
    {
        name: "Jane Doe",
        title: "Healthcare Specialist",
        image: person,
        comment: "“With our platform, you can schedule appointments, access your medical records, and communicate with your healthcare providers effortlessly.”"
    },
    {
        name: "John Smith",
        title: "Medical Expert",
        image: person,
        comment: "“Experience seamless healthcare with our user-friendly interface, designed to make your life easier and your health better.”"
    },
    {
        name: "Anna Johnson",
        title: "Patient Advocate",
        image: person,
        comment: "“Get real-time updates and notifications about your appointments, lab results, and more, all in one place.”"
    }
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,*/
    appendDots: dots => (
        <div>
            <div className="transform translate-y-16 sm:translate-y-16">
                <PrevArrow onClick={() => document.querySelector('.slick-prev').click()}/>
                <ul className="inline-flex space-x-2 mx-20 transform translate-y-1 slick-dots-custom">{dots}</ul>
                <NextArrow onClick={() => document.querySelector('.slick-next').click()}/>
            </div>
        </div>
    ),
};

const SlickTest = () => {
    return (
        <div className="relative w-3/4 mx-auto py-16">
        <img src={gridImg} alt="Grid" className="absolute bottom-20 -left-10 " />
            <Slider {...settings} className=''>
                {comments.map((item, index) => (
                    <div key={index} className="px-4"> {/* Kartlar arasına boşluk eklemek için padding ekliyoruz */}
                        <div className="flex flex-col items-center bg-gradient-to-b from-blue-300 to-blue-500 rounded-3xl py-16">
                            <h2 className="text-white font-semibold text-4xl tracking-wide text-center">
                                What our customer are saying
                            </h2>
                            <hr className="w-16 h-0.5 mx-auto bg-white rounded my-6"/>
                            <div className="flex mt-20 flex-col md:flex-row">
                                <div className="flex-1 flex justify-center items-center text-center sm:flex-row flex-col">
                                    <img src={item.image} alt="" className="border-4 rounded-full"/>
                                    <div className="pl-7 space-y-5 sm:space-y-0 mt-5 sm:mt-0">
                                        <p className="font-semibold text-white text-xl text-center sm:text-left">
                                            {item.name}
                                        </p>
                                        <p className="font-thin text-white text-xl text-center sm:text-left">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
                                    <p className="font-thin text-white text-xl w-3/4 text-center sm:text-left">
                                    {item.comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlickTest;
