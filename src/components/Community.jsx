import worldImage from '../assets/images/world.webp';

export default function Community() {
  return (
    <section className="lg:container lg:mx-auto lg:p-4">
      <div className="flex flex-col lg:flex-row bg-[#0898A0] rounded-2xl pt-12 my-6 overflow-hidden">
        {/* Left Side: Text */}
        <div className="p-4 flex flex-col text-white lg:w-1/2 lg:ml-6">
          <h2 className="font-bold text-2xl lg:text-4xl lg:w-[24ch] leading-tight">
            Join the Rise Community
          </h2>
          <p className="text-lg mt-4 leading-7 lg:max-w-[45ch]">
            Our Telegram community surrounds you with others who can help you along your financial journey with tips, advice, and learning. It’s completely free and open to new and seasoned investors.
          </p>
          <button className="my-6 border border-white text-white px-3 py-4 lg:w-2/3 rounded-full">
            Join our community {"->"}
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 ">
          <img
            src={worldImage}
            alt="world"
            loading="eager"
            className="w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}
