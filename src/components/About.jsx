import { ArrowRight } from '../assets/icons/ArrorRight';
import about from '../assets/images/about-image.webp';
import appleIcon from '../assets/images/apple-icon.webp';
import googleIcon from '../assets/images/google-icon.webp';
import partnerImage from '../assets/images/partners-image.webp';

export default function About() {
    return (
      <section className=" flex flex-col lg:flex-row  lg:items-start lg:mt-8 ">
        <div className="mt-6 grid  lg:place-items-start  lg:w-1/2 lg:ml-20 m-4">
        <button className="border-[#0898A0] bg-[#EDFFFF] border  text-[#0898A0]  px-2 py-3   text-[0.8rem] items-center gap-2 hidden group lg:flex    uppercase rounded-[2rem]">
        READ OUR COST OF LIVING REPORT 2024 <ArrowForward className="text-base text-primary ml-1.5 group-hover:translate-x-0.5 transition-all duration-300" />
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
            <button className="btn lg:w-[11rem] w-[10rem] text-center border border-white flex items-center lg:gap-2 gap-1 justify-center group">
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


function ArrowForward(...props) {
  return (
    <>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <mask
          id="mask0_4278_6366"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="15"
          height="15"
        >
          <rect x="0.128906" y="0.875" width="14" height="14" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4278_6366)">
          <path
            d="M4.80885 13.7083L3.77344 12.6729L8.57135 7.87496L3.77344 3.07704L4.80885 2.04163L10.6422 7.87496L4.80885 13.7083Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </>
  )
}
