import "./index.css";

const socialMedia = [
  {
    icon: "fa-facebook",
    href: "https://www.facebook.com",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: "fa-twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com",
  },
  {
    icon: "fa-github",
    href: "https://www.github.com",
  },
];

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

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((media, index) => {
          return <SocialButton icon={media.icon} link={media.href} key={index + 1} />;
        })}
      </div>
      <div className="social-buttons right">
        {socialRight.map((media, index) => {
          return <SocialButton icon={media.icon} link={media.href} key={index + 1} />;
        })}
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
