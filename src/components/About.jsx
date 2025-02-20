import { ArrowRight } from '../assets/icons/ArrorRight';
import about from '../assets/images/about-image.webp';
import appleIcon from '../assets/images/apple-icon.webp';
import googleIcon from '../assets/images/google-icon.webp';
import partnerImage from '../assets/images/partners-image.webp';

export default function About() {
    return (
      <section className="lg:container lg:mx-auto flex flex-col lg:flex-row  lg:items-start lg:mt-8 ">
        <div className="mt-6 grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <button className="border-[#0898A0] bg-[#EDFFFF] border  text-[#0898A0] px-2 lg:flex py-3  rounded-full font-medium text-xs items-center gap-2 hidden group">
        READ OUR COST OF LIVING REPORT 2024 <ArrowRight  className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
        </button>
        <h2 className=" font-bold text-4xl lg:text-5xl lg:text-left  lg:w-[14ch] lg:leading-[4rem] mt-2">
                    Dollar investments
                    that help you {""}
            <span className="italic primary font-normal">grow.</span>
          </h2>
          <p className="neutral dm-sans  lg:max-w-[40ch] mt-4 ">
          Rise gives you access to a carefully selected portfolio of global investments, across US stocks, US real estate and fixed income assets.
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-3 ">
            <button className="btn lg:w-[11rem] w-[10rem] text-center border border-white flex items-center gap-1 justify-center group">
                Start investing
                <ArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
              </button>
                 <button className={`cursor-pointer py-4 sm:py-3 px-2 flex items-center bg-[#71879C0D] justify-center space-x-2 rounded-full smMax:whitespace-nowrap focus:ring-0`}>
                                <span className="flex gap-2 items-center text-xs">
                                <img src={appleIcon} alt="Apple Store" className="w-5 h-5 md:w-8 md:h-8" loading="eager"/>
                                  <span className={`inline-block w-0 h-3 border-l `} />
                                  <img src={googleIcon} alt="Google Play" className="w-5 h-5 md:w-8 md:h-8" loading="eager"/>
                                </span>
                                <span className="lg:font-medium text-xs">Download app</span>
                          </button>
            </div>

        <div className='border border-[#71879C33] rounded-lg py-4 space-y-2 px-3'>
            <p className='text-md neutral'>Investors and Partners</p>
            <img
            src={partnerImage}
            alt=" healthcare app"
            className=""
            loading="eager"
          />

        </div>

        </div>
        <div className='lg:w-1/2'>
          <img
            src={about}
            alt=" healthcare app"
            className=""
            loading="eager"
          />
        </div>
      </section>
    );
}
