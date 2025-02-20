
import phone from "../assets/images/phone.png";
import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png";
import appleIcon from "../assets/images/apple-icon.webp";
import googleIcon from "../assets/images/google-icon.png";
import leftImage from "../assets/images/left-img.png";
import rightImage from "../assets/images/right-img.png";
import rise from "../assets/images/logo2.png";
import data from "../assets/images/data.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import riseLogo from "../assets/images/rise-logo.png";
import { companyLinks, contactLinks, exploreLinks, legalLinks } from "../app-constants";
import NewsLetterForm from "./NewLetter";
import { ArrowRight } from "../assets/icons/ArrorRight";


const socialIcons = [
  { src: linkedin, name: "linkedin" },
  { src: twitter, name: "twitter" },
  { src: instagram, name: "instagram" },
  { src: facebook, name: "facebook" },
  { src: youtube, name: "youtube" },
];
export default function Footer() {
  return (
<div className="relative">
 
  <section className="lg:container lg:mx-auto p-4 lg:mb-28">
    <div className="flex flex-col lg:flex-row bg-[#71879C0D] rounded-2xl lg:pt-12 my-6 overflow-hidden">
      <div className="p-4 flex flex-col lg:w-1/2 lg:ml-6 text-left">
        <p className="text-md primary leading-7 lg:mt-4">Download The Rise App</p>
        <h2 className="font-bold text-4xl lg:w-[17ch] w-[12ch] lg:leading-[3rem] mt-2">
          Rise makes investing simple.
        </h2>
        <div className="my-8 md:my-12 flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
          <button className="btn lg:w-[10rem] w-[13rem] flex items-center justify-between group ">Start investing
          <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" /></button>
        <button className={`py-4 sm:py-3 px-4 flex items-center bg-[#71879C0D] justify-center space-x-2 rounded-full smMax:whitespace-nowrap focus:ring-0`}>
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

 <section className="relative lg:absolute left-0 w-full lg:top-[calc(100%-60%)] z-20">
  <NewsLetterForm />
</section>


  <footer className="bg-[#0898A0] lg:pt-[3rem] px-4 lg:px-8 overflow-x-hidden">
    <div className="lg:container grid gap-y-10 lg:flex lg:gap-24 lg:mt-32 mt-8">

      <div className=" text-left space-y-4">
        <img src={rise} alt="Rise logo" loading="eager" className=" lg:mx-0" />
        <p className="text-white max-w-[30ch] lg:mx-0">
          Global dollar investments made simple.
        </p>
        <img src={data} alt="Rise data" loading="eager" className=" lg:mx-0" />
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 lg:gap-10">
        {[companyLinks, exploreLinks, legalLinks, contactLinks].map((links, index) => (
          <div key={index}>
            <h3 className="text-lg text-white font-bold">{Object.keys({ companyLinks, exploreLinks, legalLinks, contactLinks })[index]}</h3>
            <div className="space-y-4 mt-4">
              {links.map((item) => (
                <p key={item.name} className="text-sm text-white hover:underline cursor-pointer">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 lg:px-0 px-8 lg:my-0 my-8">
        <button className="flex justify-center lg:justify-start items-center gap-2 bg-[#41BCC4] rounded-full py-3 px-4 w-full sm:w-[11.5rem]">
          <img src={apple} alt="Apple Store" className="w-5 h-5" loading="eager" />
          <img src={google} alt="Google Play" className="w-5 h-5" loading="eager" />
          <p className="text-white text-sm">Download app</p>
        </button>
        <button className="btn lg:w-[11.5rem] w-full text-center border border-white flex items-center lg:justify-between justify-center gap-4 group">
  Start investing 
  <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
</button>
      </div>
    </div>

    <div className="lg:flex grid gap-y-6 lg:justify-between py-6 px-4 ">
  <p className="text-sm text-[#9FDCE1] lg:flex hidden">©2022 Risevest. All rights reserved.</p>
  <div className="grid grid-cols-3 md:grid-cols-5 lg:flex gap-4 justify-end">
  {socialIcons.map(({ src, name }, index) => (
    <div key={index} className="flex gap-2 items-center">
      <img src={src} alt={name} className="w-4 h-4" loading="eager" />
      <p className="text-sm text-[#9FDCE1] capitalize">{name}</p>
    </div>
  ))}
</div>
<p className="text-sm text-[#9FDCE1] lg:hidden flex justify-between">All rights reserved. <span>©2022 Risevest.</span></p>
</div>


    {/* Footer Logo */}
    <div className="flex justify-center lg:justify-start pt-6">
      <img src={riseLogo} alt="Rise Logo" loading="eager" />
    </div>
  </footer>
</div>
  );
}


