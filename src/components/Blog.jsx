import { ArrowRight } from '../assets/icons/ArrorRight';
import blog1 from '../assets/images/blog1.webp';
import blog2 from '../assets/images/blog2.webp';
import blog3 from '../assets/images/blog3.webp';

const blogs = [
  {
    img: blog1,
    title: "May Portfolio Report",
    description: "Rise has added YouTube to its stocks portfolio growth."
  },
  {
    img: blog2,
    title: "User Stories",
    description: "See how people are growing their wealth with Rise."
  },
  {
    img: blog3,
    title: "Update",
    description: "New features have been added to make investing easier for you."
  }
];

export default function Blog() {
  return (
    <section className="flex flex-col lg:flex-row justify-between lg:items-start lg:mt-24 gap-10 lg:p-0 p-4">
      <div className="lg:w-1/2 lg:ml-12 m-3">
        <h2 className="font-bold text-4xl lg:text-5xl lg:text-left lg:w-[17ch] lg:leading-[4rem] mt-2">
          Get smarter about your money.
        </h2>
        <p className="text-lg text-neutral lg:leading-8 leading-7 lg:max-w-[45ch] mt-4">
          The latest news, market insight, and everything you need to know about managing your money.
        </p>

        <div className="my-[3rem] lg:flex items-center lg:gap-8 gap-4 hidden">
          <button className="btn w-[10rem] flex items-center justify-between group">Read the blog 
            <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" /></button>
        </div>
      </div>

      <div className="lg:w-1/2 grid grid-cols-1 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="flex gap-4 items-center"> 
            <img src={blog.img} alt={blog.title} className="w-[100px] h-auto" loading="eager" />
            <div className="space-y-2">
              <h2 className="">{blog.title}</h2>
              <p className="neutral lg:w-1/2 lg:text-md text-lg">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden flex items-center lg:gap-8 gap-4">
      <button className="btn w-[10rem] flex items-center justify-between  group">Read the blog
         <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" /></button>
        </div>
    </section>
  );
}
