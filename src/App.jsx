import "./index.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
      </div>
      <div className="bottom"></div>
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

function Identity() {}

function Biodata() {}

function Highlight() {}

export default App;
