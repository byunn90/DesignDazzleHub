import pic from "./images/usama-akram-kP6knT7tjn4-unsplash.jpg";
import "./styles.css";

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
  return <header>HII TODO</header>;
}

function Footer() {
  return <footer>Hi</footer>;
}
