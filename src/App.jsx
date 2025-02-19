import About from "./components/About"
import Blog from "./components/Blog"
import Community from "./components/Community"
import Experts from "./components/Experts"
import Goals from "./components/GoalCards"
import Management from "./components/Management"
import NavBar from "./components/NavBar"
import Testimonial from "./components/Testimonial"
import Users from "./components/Users"


function App() {


  return (
    <div>
   <NavBar />
   <About />
   <Users />
   <Management />
   <Testimonial />
   <Goals />
   <Experts />
   <Blog />
   <Community />
   </div>
  )
}

export default App
