import { ArrowRight } from '../assets/icons/ArrorRight';
import risePhone from '../assets/images/rise-phone.webp';


export default function Management() {
    return (
      <section className=" container mx-auto   lg:mt-10 ">
        <div className='flex flex-col lg:flex-row bg-[#71879C0D] rounded-lg  lg:items-start'>
        <div className="mt-6 grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <h2 className=" font-bold text-4xl lg:text-5xl lg:text-left  lg:w-[17ch] lg:leading-[4rem] mt-2">
            Easy. Diversified. 
            Managed by  {""}
            <span className="italic primary font-normal">Experts.</span>
          </h2>
          <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          Explore an array of investment options that offer 
            superior returns, curated and managed by experts, all 
            from the comfort of your device. Simple, right?
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-4 ">
            <button className="btn w-[10rem]  text-center border border-white flex items-center justify-between group">
  Start investing 
  <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
</button>
            </div>

        </div>
        <div className='lg:w-1/2 my-auto'>
          <img
            src={risePhone}
            alt=" rise phone"
            className=""
            loading="eager"
          />
        </div>
        </div>
      </section>
    );
}
