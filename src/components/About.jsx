import about from '../assets/images/about-image.png';
import appleIcon from '../assets/images/apple-icon.svg';
import googleIcon from '../assets/images/google-icon.svg';
import partnerImage from '../assets/images/partners-image.svg';

export default function About() {
    return (
      <section className="flex flex-col lg:flex-row  lg:items-start lg:mt-10 ">
        <div className="mt-6 grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <button className="border-[#0898A0] border  text-[#0898A0] px-4 py-3 rounded-full font-medium text-xs lg:block hidden">
        READ OUR COST OF LIVING REPORT 2024 {'>'}
        </button>
        <h2 className=" font-bold text-4xl lg:text-5xl lg:text-left  lg:w-[17ch] lg:leading-[4rem] mt-2">
                    Dollar investments
                    that help you {""}
            <span className="italic primary font-normal">grow.</span>
          </h2>
          <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          Rise gives you access to a carefully selected portfolio of global investments, across US stocks, US real estate and fixed income assets.
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-4 ">
            <button className="btn w-[10rem]">Start investing {"->"}</button>

            <div className="flex items-center lg:gap-4 gap-2">
                <button className="lg:border-r-2 neutral lg:pr-4">
                <img
                    src={appleIcon}
                    alt="Apple Store"
                    className="w-8 h-8 md:w-10 md:h-10"
                    loading="eager"
                />
                </button>

                <button className="lg:pl-4">
                <img
                    src={googleIcon}
                    alt="Google Play"
                    className="w-8 h-8 md:w-10 md:h-10"
                    loading="eager"
                />
                </button>

                <p className="font-bold lg:text-lg text-sm lg:ml-2">Download app</p>
            </div>
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
