import { ArrowRight } from '../assets/icons/ArrorRight';
import worldImage from '../assets/images/world.webp';

export default function Community() {
  return (
    <section className="lg:container lg:mx-auto lg:p-4">
      <div className="flex flex-col lg:flex-row bg-[#0898A0] rounded-2xl pt-12  overflow-hidden">
        <div className="p-4 flex flex-col text-white lg:w-1/2 lg:ml-6">
          <h2 className="font-bold text-2xl lg:text-4xl lg:w-[24ch] leading-tight">
            Join the Rise Community
          </h2>
          <p className=" dm-sans  lg:max-w-[38ch] mt-4 text-white">
            Our Telegram community surrounds you with others who can help you along your financial journey with tips, advice, and learning. It’s completely free and open to new and seasoned investors.
          </p>
          <button className="my-6 border cursor-pointer border-white text-white px-8 py-4 w-[16rem] rounded-full flex items-center justify-between group">
            Join our community
            <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-active:translate-x-2 group-focus:translate-x-2" />
          </button>
        </div>
        <div className="lg:w-1/2 lg:mt-36 ">
          <img
            src={worldImage}
            alt="world"
            loading="eager"
            className=" object-contain "
          />
        </div>
      </div>
    </section>
  );
}
