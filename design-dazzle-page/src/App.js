import pic from "./images/usama-akram-kP6knT7tjn4-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <Logo />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <img className="logo" src={pic} alt="logo" />
    </div>
  );
}

function NavBar() {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon={faShoePrints} />
      </div>
    </header>
  );
}

function Footer() {
  return <h1>Hi</h1>;
}
