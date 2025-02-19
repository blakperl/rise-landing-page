import goalOne from '../assets/images/goal1.svg';
import goalTwo from '../assets/images/goal2.svg';
import goalThree from '../assets/images/goal3.svg';
import goalFour from '../assets/images/goal4.svg';
import riseWallet from '../assets/images/rise-wallet.svg';


export default function Goals() {

    return (
       <>
        {/* // goal 1 */}
      <section className=" container mx-auto   my-6 ">
        <div className='flex flex-col lg:flex-row bg-[#EDFFFF] rounded-lg  lg:items-start'>
        <div className="grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <h2 className=" font-bold text-4xl lg:text-left  lg:w-[20ch] lg:leading-[3rem] mt-2">
        We bring the world’s
        best companies to you. 
          </h2>
          <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          The Rise stock portfolio is a selection of stocks of the world’s most profitable companies, curated by experts to deliver great long term returns.
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-4 ">
            <button className="bg-[#71879C0D] px-3 py-4 rounded-full">Create a stock plan now {"->"}</button>
            </div>

        </div>
        <div className='flex justify-end'>
          <img
            src={goalOne}
            alt=" goal one"
            loading="eager"
          />
        </div>
        </div>
      </section>
 {/* goal 2 */}

    <section className=" container mx-auto   my-6 ">
        <div className='flex flex-col lg:flex-row bg-[#F5F1FE] rounded-lg  lg:items-start'>
        <div className="grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <h2 className=" font-bold text-4xl lg:text-left  lg:w-[20ch] lg:leading-[3rem] mt-2">
        We offer diverse investment options.
          </h2>
          <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          Our real estate offering is a portfolio of rental properties in the US that provide steady monthly returns, price appreciation and capital gains. Your investments are more stable and protect you from market declines.
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-4 ">
            <button className="bg-[#71879C0D] px-3 py-4 rounded-full">Create a real estate plan now  {"->"}</button>
            </div>

        </div>
        <div className='flex justify-end'>
          <img
            src={goalTwo}
            alt=" goal one"
            loading="eager"
          />
        </div>
        </div>
      </section>

       {/* goal 3 */}

    <section className=" container mx-auto   my-6 ">
        <div className='flex flex-col lg:flex-row bg-[#F6E4F0] rounded-lg  lg:items-start'>
        <div className="grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <h2 className=" font-bold text-4xl lg:text-left  lg:w-[20ch] lg:leading-[3rem] mt-2">
        There’s something for everyone.
          </h2>
          <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          Looking for stable and safe returns? Our fixed-income portfolio delivers consistent returns annually and is perfect for low-risk investors
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-4 ">
            <button className="bg-[#71879C0D] px-3 py-4 rounded-full">Create a fixed-income plan now  {"->"}</button>
            </div>

        </div>
        <div className='flex justify-end'>
          <img
            src={goalThree}
            alt=" goal one"
            loading="eager"
          />
        </div>
        </div>
      </section>

      {/* goal 4 */}

    <section className=" container mx-auto   my-6 ">
        <div className='flex flex-col lg:flex-row bg-[#FEF3EF] rounded-lg  lg:items-start'>
        <div className="grid  lg:place-items-start  lg:w-1/2 lg:ml-12 m-4">
        <h2 className=" font-bold text-4xl lg:text-left  lg:w-[20ch] lg:leading-[3rem] mt-2">
        Invest toward your goals.
          </h2>
          <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          Rise gives you the ability to choose a financial goal, whether tuition, a wedding, travel or retirement and put money away regularly toward them. 
          </p>

            <div className="my-[3rem] flex items-center lg:gap-8 gap-4 ">
            <button className="bg-[#71879C0D] px-3 py-4 rounded-full">Explore our goal based plans   {"->"}</button>
            </div>

        </div>
        <div className='flex justify-end'>
          <img
            src={goalFour}
            alt=" goal one"
            loading="eager"
          />
        </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row lg:items-center lg:mt-10">
  <div className="mt-6 grid lg:place-items-start lg:w-1/2 lg:ml-12 m-4">
    <div className="bg-[#41BCC4] inline-block px-20 pt-12 mt-4 rounded-2xl">
      <img
        src={riseWallet}
        alt="healthcare app"
        width={330}
        height={300}
        loading="eager"
      />
    </div>
  </div>
  
  <div className="items-center self-center">
    <h2 className="font-bold text-4xl lg:text-5xl lg:text-left lg:w-[17ch] lg:leading-[4rem] mt-2">
      Make transactions online with <span className="italic primary font-normal">ease</span>
    </h2>
    <p className="text-lg neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
      With the Rise US virtual card, you can pay for your subscriptions, shop online, and enjoy a monthly transaction limit of up to $10,000.
    </p>

    <div className="my-[2rem] flex items-center lg:gap-8 gap-4">
      <button className="px-3 py-4 primary">Request for your US virtual card {"->"}</button>
    </div>
  </div>
</section>


       </>
    );
}

