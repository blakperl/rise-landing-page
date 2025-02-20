import Image from 'components/Image'
import eke from 'public/images/team/eke.jpg'
import sheriff from 'public/images/team/sheriff.jpg'
import damilare from 'public/images/team/damilare.jpg'

const teamMembers = [
  {
    image: eke,
    name: 'Eke Urum',
    designation: 'Founder & CEO',
  },
  {
    image: sheriff,
    name: 'Sheriff Adeoti',
    designation: 'Finance lead',
  },
  {
    image: damilare,
    name: 'Damilare Akinlotan',
    designation: 'Finance',
  },
]

export default function MeetTheExperts() {
  return (
    <section className="my-18 lg:my-24 container wide">
      <div className="flex flex-col lg:flex-row justify-between  items-center lg:items-start">
        <div className="text-[2rem] font-tomato lg:text-5xl flex lg:flex-col mb-[2rem] text-text-dark-200">
          <p className="font-semibold leading-[3.7rem]">
            Meet the <span className="font-medium italic text-primary">Experts</span>
          </p>
        </div>
        <ul className="grid justify-center gridmax-cols-2 md:gridmax-cols-3 gap-x-5 gap-y-8">
          {teamMembers.map((member) => (
            <li className="relative group" key={member.name}>
              <Image
                src={member.image}
                alt={member.name}
                width={287}
                height={320}
                className="rounded-xl transition-transform transform translate-y-0 group-hover:-translate-y-2.5 duration-500"
              />
              <h3 className="mt-4 font-tomato font-bold text-sm text-text-dark-200">
                {member.name}
              </h3>
              <p className="text-[0.813rem] text-text-soft-100 font-bold">{member.designation}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
