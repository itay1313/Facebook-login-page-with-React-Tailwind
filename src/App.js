import "./App.css";

function App() {
  return (
    <div
      className="flex flex-col justify-between items-stretch"
      style={{
        background: "#f0f2f5",
      }}
    >
      <div className="lg:min-h-screen lg:w-screen flex items-stretch width py-5 flex-grow sm:flex-col">
        <div className="flex flex-col justify-center items-start lg:w-7/12 pr-12">
          <img
            src={"https://assets.codepen.io/72787/dF5SId3UHWd.svg"}
            className="w-52 pb-4"
          ></img>
          <h1>Connect with friends and the world around you on Facebook.</h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-5/12">
          <div className="flex flex-col justify-center items-center form w-full">
            <form className="grid p-3 w-full rounded-lg bg-white ">
              <div className="mb-3">
                <input type="text" placeholder="Email or Phone Number"></input>
              </div>
              <div className="mb-3">
                <input type="text" placeholder="Password"></input>
              </div>
              <div className="place-self-center w-full text-center">
                <button className="place-self-center mb-3 w-full bg-blue-500 text-white rounded-lg shadow-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                  Log in
                </button>
                <h6>
                  <a className="place-self-center" href="#">
                    Forgot Password?
                  </a>
                </h6>
              </div>
              <div className="br"></div>
              <div className="place-self-center w-full text-center">
                <button className="place-self-center bg-green-500 text-white rounded-lg shadow-md font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                Create New Account
                </button>
              </div>
            </form>
          </div>
          <h6 className="mt-6">My take on the facebook login page, tell me what you think</h6>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center w-full py-3.5"
        style={{
          background: "#ffffff",
        }}
      >
        <div className="flex flex-col items-stretch width">
          <ul className="flex justify-start flex-wrap items-center w-full sm:flex-col">
            <li>English (US)</li>
            <li>עברית</li>
            <li>العربية</li>
            <li>Русский</li>
            <li>Français (France)</li>
            <li>Español</li>
            <li>ภาษาไทย</li>
            <li>Deutsch</li>
            <li>Português (Brasil)</li>
            <li>Italiano</li>
            <li>हिन्दी</li>
          </ul>
          <div className="br"></div>
          <ul className="flex justify-start items-center flex-wrap w-full sm:flex-col">
            <li>Sign Up</li>
            <li>Log In</li>
            <li>Messenger</li>
            <li> Facebook Lite</li>
            <li> Watch</li>
            <li>People</li>
            <li>Pages</li>
            <li> Page Categories</li>
            <li> Places</li>
            <li> Games</li>
            <li> Locations</li>
            <li> Marketplace</li>
            <li> Facebook Pay</li>
            <li> Groups</li>
            <li> Jobs</li>
            <li>Oculus</li>
            <li>Portal</li>
            <li>Instagram</li>
            <li>Local</li>
            <li>Fundraisers</li>
            <li>Services</li>
            <li>Voting Information Center</li>
            <li>About</li>
            <li>Create Ad</li>
            <li>Create Page</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Ad Choices</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Settings</li>
            <li>Activity Log</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
