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
    <section className="container mx-auto w-full lg:p-4 p-3 grid gap-6">
      {goalsData.map(({ image, bgColor, title, description, buttonText }) => (
        <div
          key={title}
          className={`flex flex-col lg:flex-row ${bgColor} rounded-2xl p-6 items-center `}
          style={{
            position: 'sticky',
            top: '100px', 
            width: '100%', 
            
          }}
        >
       <div className="lg:p-4 flex flex-col ">
           <h2 className="font-bold text-2xl lg:text-4xl lg:w-[20ch] leading-tight">
             {title}
           </h2>
           <p className="neutral dm-sans  lg:max-w-[38ch] mt-4 ">{description}</p>
           <button className="mt-6 bg-[#71879C0D] px-3 py-4 lg:w-[19rem] w-full cursor-pointer rounded-full flex items-center justify-center gap-4 group">
             {buttonText} <ArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
           </button>
         </div>
         
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <img src={image} alt={title} className="w-80 h-auto object-contain" />
          </div>
        </div>
      ))}
    </section>
  );
}
