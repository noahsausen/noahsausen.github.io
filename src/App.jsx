import './App.css';
import githubIcon from "./assets/github.svg"
import emailIcon from "./assets/email.svg"
import instagramIcon from "./assets/instagram.svg"

document.body.style.background = 'hsl(0, 0%, 5%)';

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
      <p>React</p>
      <p>JavaScript</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Java</p>
      <p>Python</p>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="LinkContainer">
      <Link iconFile={githubIcon} url="https://github.com/noahsausen" name="Github"/>
      <Link iconFile={emailIcon} url="mailto:noahsausen@gmail.com" name="Email" extraClass=" emailPadding"/>
      <Link iconFile={instagramIcon} url="https://www.instagram.com/noahsausen" name="Instagram"/>
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
    <p className="Footer">© {new Date().getFullYear()} Noah Sausen</p>
  );
}