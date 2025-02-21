import { ArrowRight } from '../assets/icons/ArrorRight';
import riseWallet from '../assets/images/rise-wallet.svg';

function Transaction() {
  return (
    <section  className=" p-4 container-width  lg:my-12 my-8 section">
<div className="flex flex-col lg:flex-row items-center lg:mt-10">
    <div className="mt-6 lg:w-1/2 p-4">
      <div className="bg-[#41BCC4] inline-block px-20 pt-12 rounded-2xl">
        <img src={riseWallet} alt="Rise Wallet" width={330} height={300} loading="eager" />
      </div>
    </div>
    <div className="lg:w-1/2 text-left">
      <h2 className="font-bold text-4xl lg:text-left lg:w-[17ch] lg:leading-[3rem] mt-2">
        Make transactions online with <span className="italic primary font-normal">ease</span>
      </h2>
      <p className="neutral dm-sans  lg:max-w-[40ch] mt-4 ">
        With the Rise US virtual card, you can pay for your subscriptions, shop online, and enjoy a monthly transaction limit of up to $10,000.
      </p>
      <button className="lg:mt-6 mt-2 px-3 py-4 bg-[#71879C0D] cursor-pointer primary rounded-full flex items-center justify-between gap-4 group"> Request your US virtual card 
      <ArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" /></button>
    </div>
  </div>
    </section>
    
  )
}

export default Transaction
