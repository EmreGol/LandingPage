import person from "../assets/person.png"
import arrow_r from "../assets/arrow_r.png"
import arrow_l from "../assets/arrow_l.png"
import React, { useState } from 'react';

const Testimonials = () => {
    const comments = [
        '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.”',
        '“With our platform, you can schedule appointments, access your medical records, and communicate with your healthcare providers effortlessly.”',
        '“Experience seamless healthcare with our user-friendly interface, designed to make your life easier and your health better.”',
        '“Get real-time updates and notifications about your appointments, lab results, and more, all in one place.”',
    ];

    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    const handleNext = () => {
    setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % comments.length);
    };

    const handlePrevious = () => {
    setCurrentCommentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
    };

  return (
    <div className="mt-20 py-20">
        <div className="w-3/4 bg-gradient-to-b from-blue-300 to-blue-500 mx-auto py-16 rounded-3xl">
            <h2 className="text-white font-semibold text-4xl tracking-wide text-center">
                What our customer are saying
            </h2>
            <hr className="w-16 h-0.5 mx-auto bg-white rounded my-6"/>
            <div className="flex mt-20 flex-col md:flex-row">
                <div className="flex-1 flex justify-center items-center text-center">
                    <img src={person} alt="" className="border-4 rounded-full"/>
                    <div className="pl-7">
                        <p className="font-semibold text-white text-xl text-left">
                            Edward Newgate
                        </p>
                        <p className="font-thin text-white text-xl text-left">
                            Founder circle
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
                    <p className="font-thin text-white text-xl w-3/4">
                     {comments[currentCommentIndex]}
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center mt-12 space-x-5">
            <img src={arrow_l} alt="" className="pr-20 cursor-pointer" onClick={handlePrevious}/>
            {comments.map((comment, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${index === currentCommentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        ))}
            <img src={arrow_r} alt="" className="pl-20 cursor-pointer" onClick={handleNext}/>
        </div>
    </div>
  )
}

export default Testimonials