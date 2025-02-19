import { useState } from "react";
import userOne from "../assets/images/user1.svg";
import userTwo from "../assets/images/user2.svg";
import userThree from "../assets/images/user3.svg";

const users = [userOne, userTwo, userThree];

export default function Users() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container mx-auto items-center space-y-4 mt-10 px-4">
      <h2 className="font-bold text-2xl text-center lg:text-4xl lg:text-left lg:leading-[4rem] mt-2">
        Meet Some <span className="italic primary font-normal">Rise Users.</span>
      </h2>

     {/* mobile screen */}
      <div className="relative w-full max-w-sm mx-auto lg:hidden flex flex-col items-center">
        <div className="w-full flex justify-center">
          <img
            src={users[currentIndex]}
            alt={`User ${currentIndex + 1}`}
            className="w-full transition-opacity duration-500"
            loading="eager"
          />
        </div>

        <div className="w-full flex justify-between items-center mt-4">
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
          <div className="flex">
            <button
              onClick={prevSlide}
              className="p-2 text-xl font-bold"
            >
              ❮--
            </button>
            <button
              onClick={nextSlide}
              className=" p-2 text-xl font-bold ml-2"
            >
              --❯
            </button>
          </div>
        </div>
      </div>

      {/* desktop screen */}
      <div className="hidden lg:flex gap-8 ">
        {users.map((user, index) => (
          <img
            key={index}
            src={user}
            alt={`User ${index + 1}`}
            
            loading="eager"
          />
        ))}
      </div>
    </section>
  );
}
