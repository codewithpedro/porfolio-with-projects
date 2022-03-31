import About from "./About";
import Footer from "./Footer";
import Info from "./Info";
import Interests from "./Interests";
import Portrait from "./Portrait";

function Profile(){
  return (
    <div className='card'>
      <Portrait />
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default Profile;