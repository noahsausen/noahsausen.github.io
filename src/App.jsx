import './App.css';
import githubIcon from "./assets/github.svg"
import emailIcon from "./assets/email.svg"
import instagramIcon from "./assets/instagram.svg"
import discordIcon from "./assets/discord.svg"

const year = new Date().getFullYear();
const seconds = new Date().getSeconds();

export default function App() {
  return (
    <div className="App">
      <title>Noah Sausen</title>
      <Heading/>
      <Details/>
      <LinkContainer/>
      <Footer/>
    </div>
  );
}

function Heading() {
  return (
    <h1 className="Heading">Noah Sausen</h1>
  );
}

function Details(){
  return (
    <div className="Details">
      <h3>Skills</h3>
      <p>React</p>
      <p>JavaScript</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Java</p>
      <p>Python</p>
      <a href="https://jellyfishbbhs.com/"><p>Robotics</p></a>
      <p>Sound Engineering</p>
      <a href="https://flipper.net"><p>Pentesting</p></a>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="Connect">
      <h3>Connect</h3>
      <div className="LinkContainer">
        <div className="LinkContainer">
          <Link iconFile={githubIcon} url="https://github.com/noahsausen" name="Github"/>
          <Link iconFile={emailIcon} url="mailto:noahsausen@gmail.com" name="Email" extraClass=" emailPadding"/>
        </div>
        <div className="LinkContainer">
          <Link iconFile={instagramIcon} url="https://www.instagram.com/noahsausen" name="Instagram"/>
          <Link iconFile={discordIcon} url="https://discord.com/users/990740976043704370" name="Discord"/>
        </div>
      </div>
    </div>
  );
}

function Link({iconFile, url, name, extraClass=""}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"><img className={"LinkIcon" + extraClass} src={iconFile} alt={name + " logo"}/></a>
  );
}

function Footer() {
  return (
    <p className="Footer">© {seconds} Noah Sausen • Built with React</p>
  );
}