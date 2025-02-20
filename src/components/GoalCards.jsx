
import { ArrowRight } from '../assets/icons/ArrorRight';
import goalOne from '../assets/images/goal1.webp';
import goalTwo from '../assets/images/goal2.webp';
import goalThree from '../assets/images/goal3.webp';
import goalFour from '../assets/images/goal4.webp';

const goalsData = [
  {
    image: goalOne,
    bgColor: 'bg-[#EDFFFF]',
    title: "We bring the world’s best companies to you.",
    description:
      "The Rise stock portfolio is a selection of stocks of the world’s most profitable companies, curated by experts to deliver great long term returns.",
    buttonText: "Create a stock plan now ",
  },
  {
    image: goalTwo,
    bgColor: 'bg-[#F5F1FE]',
    title: "We offer diverse investment options.",
    description:
      "Our real estate offering is a portfolio of rental properties in the US that provide steady monthly returns, price appreciation and capital gains. Your investments are more stable and protect you from market declines.",
    buttonText: "Create a real estate plan now ",
  },
  {
    image: goalThree,
    bgColor: 'bg-[#F6E4F0]',
    title: "There’s something for everyone.",
    description:
      "Looking for stable and safe returns? Our fixed-income portfolio delivers consistent returns annually and is perfect for low-risk investors.",
    buttonText: "Create a fixed-income plan now ",
  },
  {
    image: goalFour,
    bgColor: 'bg-[#FEF3EF]',
    title: "Invest toward your goals.",
    description:
      "Rise gives you the ability to choose a financial goal, whether tuition, a wedding, travel or retirement and put money away regularly toward them.",
    buttonText: "Explore our goal-based plans ",
  },
];

export default function Goals() {
  return (
    <div
      className="grid grid-cols-1 lg:gap-11 gap-6 container-width  "
      style={{
        gridTemplateRows: `repeat(${goalsData.length}, 1fr)`,
      }}
    >
      {goalsData.map(({ image, bgColor, title, description, buttonText }, index) => (
        <div
          key={title}
          className={`sticky w-full ${bgColor} rounded-2xl`}
          style={{
            top: `calc(8% + ${index * 2.25}rem)`, 
          }}
        >
          <div className="relative container h-full p-4 md:p-10 grid md:grid-cols-[4fr,3fr] lg:grid-cols-2 gap-8 items-center rounded-3xl">
            <div>
              <h2 className="font-bold text-2xl lg:text-4xl leading-tight">{title}</h2>
              <p className="mt-4 text-gray-700 lg:max-w-[38ch] neutral dm-sans">{description}</p>
              <button className="mt-6 bg-[#71879C0D] px-3 py-3 lg:w-[19rem] w-full cursor-pointer rounded-full flex items-center justify-center gap-3 group">
                {buttonText} 
                <ArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
              </button>
            </div>
            <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
              <img src={image} alt={title} className="w-80 h-auto object-contain" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



