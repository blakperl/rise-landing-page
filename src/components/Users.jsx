import { useState } from "react";
import userOne from "../assets/images/user1.svg";
import userTwo from "../assets/images/user2.svg";
import userThree from "../assets/images/user3.svg";
import ArrowLeft from "../assets/icons/ArrowLeft";
import { ArrowRight } from "../assets/icons/ArrorRight";


const users = [userOne, userTwo, userThree];

export default function Users() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="container mx-auto items-center space-y-4 mt-10 px-4">
      <h2 className="font-bold text-2xl text-center lg:text-4xl lg:text-left lg:leading-[4rem] mt-2">
        Meet Some <span className="italic primary font-normal">Rise Users.</span>
      </h2>

      {/* Mobile Carousel */}
      <div className="relative w-full max-w-sm mx-auto lg:hidden flex flex-col items-center">
        <div className="w-full overflow-hidden relative h-[300px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {users.map((user, index) => (
              <img
                key={index}
                src={user}
                alt={`User ${index + 1}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Dots & Navigation */}
        <div className="w-full flex justify-between items-center ">
          <div className="flex gap-2">
            {users.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-black" : "bg-[#71879C33]"
                }`}
              ></span>
            ))}
          </div>
          <div className="flex gap-5">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 flex items-center justify-center shadow-lg rounded-full group ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "bg-[#71879C0D]"
              }`}
            >
              <ArrowLeft className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-5px] font-bold" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === users.length - 1}
              className={`p-2 flex items-center justify-center shadow-lg rounded-full ml-2 group ${
                currentIndex === users.length - 1 ? "opacity-50 cursor-not-allowed" : "bg-[#71879C0D]"
              }`}
            >
              <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 font-bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: Show All Users */}
      <div className="hidden lg:flex gap-8">
        {users.map((user, index) => (
          <img key={index} src={user} alt={`User ${index + 1}`} loading="eager" />
        ))}
      </div>
    </section>
  );
}
