

import apple from "../assets/images/apple.png";
import google from "../assets/images/google.png"
import rise from "../assets/images/logo2.png";
import data from "../assets/images/data.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import riseLogo from "../assets/images/rise-logo.png";
import NewsLetterForm from "./NewLetter";
import { ArrowRight } from "../assets/icons/ArrorRight";
import { Company, Contact, Explore, Legal } from "../app-constants";


const socialIcons = [
  { src: linkedin, name: "linkedin" },
  { src: twitter, name: "twitter" },
  { src: instagram, name: "instagram" },
  { src: facebook, name: "facebook" },
  { src: youtube, name: "youtube" },
];
export default function Footer() {
  return (
    <section className="section">
   <div className="news">
   <NewsLetterForm />
   </div>
     <div className="bg-[#0898A0]">
     <footer className="lg:pt-[3rem] pt-[5rem]  lg:px-20 px-6  -mt-[7rem] news " >
       <div className=" grid gap-y-10 lg:flex lg:gap-24 lg:mt-28 mt-12">
   
         <div className=" text-left space-y-4">
           <img src={rise} alt="Rise logo" loading="eager" className=" lg:mx-0" />
           <p className="text-white dm-sans max-w-[22ch] lg:mx-0">
             Global dollar investments made simple.
           </p>
           <img src={data} alt="Rise data" loading="eager" className=" lg:mx-0" />
         </div>
   
   
         <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 lg:gap-8">
           {[Company, Explore, Legal, Contact].map((links, index) => (
             <div key={index}>
               <h3 className="text-lg text-white ">{Object.keys({ Company, Explore, Legal, Contact})[index]}</h3>
               <div className="space-y-4 mt-4">
                 {links.map((item) => (
                   <p key={item.name} className="link text-white hover:underline cursor-pointer ">
                     {item.name}
                   </p>
                 ))}
               </div>
             </div>
           ))}
         </div>
   
         <div className="space-y-6 lg:px-0 px-8 lg:my-0 my-8">
           <button className="flex justify-center lg:justify-start items-center gap-2 bg-[#41BCC4] cursor-pointer rounded-full py-3 px-4 w-full sm:w-[11.5rem]">
             <img src={apple} alt="Apple Store" className="w-5 h-5" loading="eager" />
             <img src={google} alt="Google Play" className="w-5 h-5" loading="eager" />
             <p className="text-white text-sm">Download app</p>
           </button>
    <button className="btn lg:w-[11.5rem] w-full text-center border border-white flex items-center gap-2 justify-center group">
                   Start investing
                   <ArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
                 </button>
         </div>
       </div>
   
       <div className="lg:flex grid gap-y-6 lg:justify-between py-6  ">
     <p className="text-sm text-[#9FDCE1] lg:flex hidden linkTwo">©2022 Risevest. All rights reserved.</p>
     <div className="grid grid-cols-3 md:grid-cols-5 lg:flex gap-4 justify-end">
     {socialIcons.map(({ src, name, url }, index) => (
     <a 
       key={index} 
       href={url} 
       target="_blank" 
       rel="noopener noreferrer" 
       className="flex gap-2 items-center cursor-pointer"
     >
       <img src={src} alt={name} className="w-4 h-4" loading="eager" />
       <p className="text-sm text-[#9FDCE1] capitalize link">{name}</p>
     </a>
   ))}
   </div>
   <p className="text-sm text-[#9FDCE1] lg:hidden flex justify-between linkTwo">All rights reserved. <span>©2022 Risevest.</span></p>
   </div>
   
   
       {/* Footer Logo */}
       <div className="flex justify-center lg:justify-start pt-6">
         <img src={riseLogo} alt="Rise Logo" loading="eager" />
       </div>
     </footer>
     </div>
    </section>
  );
}


