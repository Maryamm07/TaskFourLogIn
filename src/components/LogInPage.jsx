import "../style/LogInPage.css"
import { Link } from "react-router-dom";
function LogIn(){

    return (
        <>
          <div className="login">
            <div className="loginBox">
              <h2>Welcome!</h2>
              <div className="side">
                <h3>Sign in to continue</h3>
              </div>
              <div className="emailLog">
                <h4>Email or phone number</h4>
                <input type="text" placeholder="Type here..."/>
                <h4>Password</h4>
                <input type="password" placeholder="Password"/>
                <div className="btnAndForget">
                  <Link><button>Log In</button></Link>
                  <h5>Forget Password?</h5>
                </div>
                <p>Don't have an account? Sign Up</p>
              </div>
            </div>
          </div>
        </>
      )
}

export default LogIn;