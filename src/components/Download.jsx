import appleIcon from "../assets/images/apple-icon.webp";
import googleIcon from "../assets/images/google-icon.png";
import leftImage from "../assets/images/left-img.png";
import rightImage from "../assets/images/right-img.png";
import { ArrowRight } from "../assets/icons/ArrorRight";
import phone from "../assets/images/phone.png";

function Download() {
  return (
   <section className="p-4 lg:mb-8 container-width">
       <div className="flex flex-col lg:flex-row bg-[#71879C0D] rounded-2xl lg:pt-12 my-6 overflow-hidden">
         <div className="p-4 flex flex-col lg:w-1/2 lg:ml-6 text-left">
           <p className="primary  text-md dm-sans  mt-4 ">Download The Rise App</p>
           <h2 className="font-bold text-4xl lg:w-[17ch] w-[12ch] lg:leading-[3rem] mt-2">
             Rise makes investing simple.
           </h2>
           <div className="my-8 md:my-12 flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
           <button className="btn w-[11rem] text-center border border-white flex items-center  gap-2  justify-center group">
                   Start investing
                   <ArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
                 </button>
           <button className={`py-4 cursor-pointer sm:py-3 px-4 flex items-center bg-[#71879C0D] justify-center space-x-2 rounded-full smMax:whitespace-nowrap focus:ring-0`}>
                   <span className="flex gap-2 items-center text-xs">
                   <img src={appleIcon} alt="Apple Store" className="w-6 h-6 md:w-8 md:h-8" loading="eager"/>
                     <span className={`inline-block w-0 h-3 border-l `} />
                     <img src={googleIcon} alt="Google Play" className="w-6 h-6 md:w-8 md:h-8" loading="eager"/>
                   </span>
                   <span className="font-medium">Download app</span>
             </button>
           </div>
         </div>
         <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
           <img
             src={phone}
             alt="phone"
             className="relative z-10 w-[250px] sm:w-[300px] md:w-[320px] lg:w-[400px]"
             loading="eager"
             decoding="async"
           />
           <img
             src={leftImage}
             alt="left img"
             className="absolute bottom-[-20px] left-[-10px] sm:left-[-20px] md:left-[-40px] z-0"
             loading="eager"
             decoding="async"
           />
           <img
             src={rightImage}
             alt="right img"
             className="absolute bottom-[-20px] right-[-10px] sm:right-[-20px] md:right-[-40px] z-20"
             loading="eager"
             decoding="async"
           />
         </div>
       </div>
     </section>
  )
}

export default Download
