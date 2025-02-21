
import countryImage from "../assets/images/country.webp";


export default function Testimonial() {

  return (
    <section className=" section text-center  lg:my-28  my-16 py-10 px-4 container-width ">
      <h2 className="font-bold text-2xl text-center lg:text-4xl  lg:leading-[4rem] my-8">
      See our  <span className="italic primary font-normal">numbers</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center text-center">
  <div className="space-y-3">
    <h2 className="text-4xl font-bold">300k +</h2>
    <p className="text-lg primary">Users</p>
  </div>

  <div className="space-y-3">
    <h2 className="text-4xl font-bold">$42 m +</h2>
    <p className="text-lg primary">Paid out to users</p>
  </div>
  <div className="space-y-3 col-span-2 lg:col-span-1 flex flex-col items-center">
    <h2 className="flex justify-center items-center gap-2">
      <span className="text-4xl font-bold">5</span>
      <img src={countryImage} width={140} height={70} alt="country" loading="eager" />
    </h2>
    <p className="text-lg primary">Countries</p>
  </div>
</div>



    </section>

  );
}
