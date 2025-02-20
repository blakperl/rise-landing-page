import About from "./components/About"
import Blog from "./components/Blog"
import Community from "./components/Community"
import Download from "./components/Download"
import Experts from "./components/Experts"
import Footer from "./components/Footer"
import Goals from "./components/GoalCards"
import Management from "./components/Management"
import NavBar from "./components/NavBar"
import Testimonial from "./components/Testimonial"
import Transaction from "./components/Transaction"
import Users from "./components/Users"


function App() {


  return (
    <>
   <NavBar />
  <main>
  <About />
   <Users />
   <Management />
   <Testimonial />
   <Goals />
   <Transaction />
   <Experts />
   <Blog />
   <Community />
   <Download />
  </main>
   <Footer />
   </>
  )
}

export default App
