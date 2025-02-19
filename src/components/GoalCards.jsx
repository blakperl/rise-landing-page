import goalOne from '../assets/images/goal1.webp';
import goalTwo from '../assets/images/goal2.webp';
import goalThree from '../assets/images/goal3.webp';
import goalFour from '../assets/images/goal4.webp';
import riseWallet from '../assets/images/rise-wallet.svg';

const goalsData = [
  {
    image: goalOne,
    bgColor: 'bg-[#EDFFFF]',
    title: "We bring the world’s best companies to you.",
    description:
      "The Rise stock portfolio is a selection of stocks of the world’s most profitable companies, curated by experts to deliver great long term returns.",
    buttonText: "Create a stock plan now →",
  },
  {
    image: goalTwo,
    bgColor: 'bg-[#F5F1FE]',
    title: "We offer diverse investment options.",
    description:
      "Our real estate offering is a portfolio of rental properties in the US that provide steady monthly returns, price appreciation and capital gains. Your investments are more stable and protect you from market declines.",
    buttonText: "Create a real estate plan now →",
  },
  {
    image: goalThree,
    bgColor: 'bg-[#F6E4F0]',
    title: "There’s something for everyone.",
    description:
      "Looking for stable and safe returns? Our fixed-income portfolio delivers consistent returns annually and is perfect for low-risk investors.",
    buttonText: "Create a fixed-income plan now →",
  },
  {
    image: goalFour,
    bgColor: 'bg-[#FEF3EF]',
    title: "Invest toward your goals.",
    description:
      "Rise gives you the ability to choose a financial goal, whether tuition, a wedding, travel or retirement and put money away regularly toward them.",
    buttonText: "Explore our goal-based plans →",
  },
];

export default function Goals() {
  return (
    <section className="lg:container lg:mx-auto  p-4">
      {goalsData.map(({ image, bgColor, title, description, buttonText }) => (
        <div
        key={title}
        className={`flex flex-col lg:flex-row ${bgColor} rounded-2xl p-6 items-center my-6`}
      >
        {/* Left Side: Text */}
        <div className="lg: p-4 flex flex-col ">
          <h2 className="font-bold text-2xl lg:text-4xl lg:w-[20ch] leading-tight">
            {title}
          </h2>
          <p className="text-lg neutral mt-4 leading-7 lg:max-w-[45ch]">{description}</p>
          <button className="mt-6 bg-[#71879C0D] px-3 py-4 lg:w-2/3 rounded-full">
            {buttonText}
          </button>
        </div>
      
        {/* Right Side: Image */}
        <div className="flex lg:justify-end justify-center  lg:w-1/2">
          <img
            src={image}
            alt={title}
            width={400}
            height={420}
            loading="eager"
            className="max-w-full lg:object-contain"
          />
        </div>
      </div>
      
      ))}
      <div className="flex flex-col lg:flex-row items-center lg:mt-10 p-4">
        <div className="mt-6 lg:w-1/2 p-4">
          <div className="bg-[#41BCC4] inline-block px-20 pt-12 rounded-2xl">
            <img src={riseWallet} alt="Rise Wallet" width={330} height={300} loading="eager" />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="font-bold text-4xl  lg:text-left lg:w-[17ch] lg:leading-[3rem] mt-2">
              Make transactions online with <span className="italic primary font-normal">ease</span>
       </h2>
          <p className="text-lg  neutral mt-4 leading-7 lg:max-w-[45ch]">
            With the Rise US virtual card, you can pay for your subscriptions, shop online, and enjoy a monthly transaction limit of up to $10,000.
          </p>
          <button className="mt-6 px-3 py-4 bg-primary text-white rounded-full">
            Request your US virtual card →
          </button>
        </div>
      </div>
    </section>
  );
}
