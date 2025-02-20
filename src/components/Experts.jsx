import ceoImage from "../assets/images/ceo.jpg";
import financeLead from "../assets/images/finance-lead.jpg";
import finance from "../assets/images/finance.jpg";

export default function Experts() {
  const experts = [
    { name: "Eke Urum", role: "Founder & CEO", image: ceoImage },
    { name: "Sheriff Adeoti", role: "Finance Lead", image: financeLead },
    { name: "Damilare Akinlotan", role: "Finance", image: finance },
  ];

  return (
    <section className="container mx-auto items-center space-y-4 lg:mt-10 mb-8 px-4">
      {/* Mobile Header */}
      <h2 className="font-bold text-2xl text-center lg:hidden my-3">
        Meet the  <span className="italic primary font-normal">Experts.</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6 lg:gap-y-0 gap-y-4">
        <h2 className="font-bold text-4xl hidden lg:block px-12 leading-10">
          Meet the  <span className="italic primary font-normal">Experts</span>
        </h2>
        {experts.map(({ name, role, image }) => (

<div className="relative group " key={name}>
<img src={image} alt={name}  loading="eager" className="rounded-xl lg:h-full lg:object-cover transition-transform transform translate-y-0 group-hover:-translate-y-2.5 duration-500"/>
<p className="text-lg font-bold ">{name}</p>
            <p className="neutral">{role}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
