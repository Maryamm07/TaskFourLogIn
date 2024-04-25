import "../style/Home.css"
import { Link } from "react-router-dom"
import boxImage from '../images/box1.png';

function Home() {

    return (
      <>
        <div className="home">
          <div className="box">
            <img src={boxImage} alt="img" />
            <h1>Distro</h1>
            <div className="h">
              <h3>"Make distribution easier"</h3>
            </div>
            <div className="log">
              <div className="btns">
              <Link to={'/login'}><button>Log In</button></Link>
              <Link><button>Sign Up</button></Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Home