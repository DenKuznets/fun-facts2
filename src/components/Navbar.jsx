export default function Navbar(props) {
  const reactLogoURL = props.darkMode
    ? "./assets/react-icon-small-dark.png"
    : "./assets/react-icon-small-light.png";
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img alt="react-logo" className="nav--logo_icon" src={reactLogoURL} />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
