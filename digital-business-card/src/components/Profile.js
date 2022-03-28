import About from "./About";
import Footer from "./Footer";
import Info from "./Info";
import Interests from "./Interests";

function Profile(){
  return (
    <div className='card'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default Profile;