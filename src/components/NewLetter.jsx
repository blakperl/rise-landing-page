
import { useState } from 'react'
import { ArrowRight } from '../assets/icons/ArrorRight'

export default function NewsLetterForm() {
  const [newsForm, setNewsForm] = useState({
    email: '',
    first_name: '',
    last_name: '',
  })

  function handleChange(e) {
    setNewsForm({
      ...newsForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container m-auto">
      <div className="grid lg:grid-cols-2 gap-6 xl:gap-0 items-center p-4 mdMax:pb-6 md:p-10 bg-[#41BCC4] rounded-xl max-w-full">
        <div className="text-white">
          <h3 className="text-2xl mb-2 xl:mb-0 font-bold text-white">Weekly newsletter</h3>
          <p className="xl:text-lg font-semibold ">Sign up for our weekly newsletter for fun, finance and more</p>
        </div>
        <form className="space-y-6 relative">
          <div className="w-full flex flex-col md:flex-row md:space-x-3 space-y-6 md:space-y-0">
            <div className="bg-[#0898A0] text-white  w-full rounded-full md:rounded-r-none p-3.5 md:p-4 relative">
              <label className="flex items-center px-2">
                <span className="sr-only text-white">First name</span>
                <input
                  type="text"
                  name="first_name"
                  value={newsForm.first_name}
                  onChange={handleChange}
                  required
                  title="Enter first name"
                  className="bg-transparent min-w-0 w-full border-none outline-none focus:ring-0 placeholder-white"
                  placeholder="First name"
                />
              </label>
            </div>
            <div className="bg-[#0898A0] text-white rounded-full md:rounded-l-none w-full p-3.5 md:p-4 relative">
              <label className="flex items-center px-2">
                <span className="sr-only">Last name</span>
                <input
                  type="text"
                  name="last_name"
                  value={newsForm.last_name}
                  onChange={handleChange}
                  required
                  title="Enter last name"
                  className="bg-transparent min-w-0 w-full border-none outline-none focus:ring-0 placeholder-white"
                  placeholder="Last name"
                />
              </label>
            </div>
          </div>
          <div className="bg-[#0898A0] text-white flex items-center justify-between rounded-full p-1.5 md:p-2 relative">
  <label className="flex items-center px-2 w-full">
    <span className="sr-only">Email address</span>
    <input
      type="email"
      name="email"
      value={newsForm.email}
      onChange={handleChange}
      pattern=".+@.+\..{2,}$"
      required
      title="Enter a valid email address"
      className="bg-transparent min-w-0 w-full border-none outline-none focus:ring-0 placeholder-white"
      placeholder="Email address"
    />
  </label>

  <div className="bg-white text-[#0898A0] rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 cursor-pointer group">
  <ArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
  </div>
</div>


        </form>
      </div>
    </div>
  )
}
