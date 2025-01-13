import "./index.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <button>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-facebook" />
        <SocialButton icon="fa-twitter" />
        <SocialButton icon="fa-instagram" />
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-linkedin" />
        <SocialButton icon="fa-github" />
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Black Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, doloremque. Architecto, earum perspiciatis ducimus, eos quasi amet dolorem
        deserunt illo enim aperiam, quae sapiente.
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="PhD" />
      <Badge text="Mountainer" />
      <Badge text="3D Geek" />
    </div>
  );
}

export default App;
