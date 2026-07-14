import './App.css';
import { useState } from "react";

import githubIcon from "./assets/github.svg";
import emailIcon from "./assets/email.svg";
import instagramIcon from "./assets/instagram.svg";
import discordIcon from "./assets/discord.svg";

import remarksThumb from "./assets/remarks.png";

export default function App() {
  return (
      <main className="app">
          <Prompt>whoami</Prompt>
          <h1 id="heading">Noah Sausen</h1>
          <Bio/>
          <Experience/>
          {/*<Languages/>*/}
          {/*<Connect/>*/}
          {/*<Footer/>*/}
      </main>
  );
}


// REUSABLE COMPONENTS ↓ -------------- ↓ -------------- ↓
function Prompt({children}) {
    return (
        <p className="terminal">guest@home ~ % {children}</p>
    )
}

function Terminal({children}) {
    return (
        <p className="terminal">{children}</p>
    )
}

function Link({href, children}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}


// PAGE SECTIONS ↓ -------------- ↓ -------------- ↓
function Bio() {
  return (
      <Terminal>I'm a high school student in New York building robots, websites, and software.
          I'm also interested in live sound and <Link href="https://flipper.net">pentesting</Link>.</Terminal>
  );
}

function Experience() {
  return (
      <Terminal>
          <Prompt><b>experience</b></Prompt>
          <hr/>
          <Link href="https://www.summertech.net">SummerTech</Link>
          <p>├─ Coding Teacher</p>
          <p>└─ <mark>Counselor-in-Training (2026)</mark></p>
          <hr/>
          <Link href="https://jellyfishbbhs.com">FTC Team 4654 Jellyfish</Link>
          <p>├─ Software Officer (26-27)</p>
          <p>└─ Team Member (since 2024)</p>
          <hr/>
          <Link href="https://www.instagram.com/bbhstheater">BBHS Theatre</Link>
          <p>└─ Sound Designer / Engineer</p>
      </Terminal>
  )
}

function Languages() {
  return (
      <div className="terminal">
          <p>hello@web ~ % ls <b>skills</b></p>
          <ul>
              <li>Java + FTC RobotCore</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
          </ul>
      </div>
  )
}

function Connect() {
  return (
      <div className="ModularBlock Connect">
        {/*<h3>Connect</h3>*/}
        {/*<div className="LinkContainer">*/}
        {/*  <div className="LinkContainer">*/}
        {/*    <Link iconFile={githubIcon} url="https://github.com/noahsausen" name="Github"/>*/}
        {/*    <Link iconFile={emailIcon} url="mailto:noahsausen@gmail.com" name="Email" extraClass=" emailPadding"/>*/}
        {/*  </div>*/}
        {/*  <div className="LinkContainer">*/}
        {/*    <Link iconFile={instagramIcon} url="https://www.instagram.com/noahsausen" name="Instagram"/>*/}
        {/*    <Link iconFile={discordIcon} url="https://discord.com/users/990740976043704370" name="Discord"/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
  );
}

function Projects() {
  return (
      <div className="ModularBlock Projects">
        <h3>Projects</h3>
        <Project name="Remarks" thumbnail={remarksThumb} urlApp="https://remarks-app.vercel.app" urlCode="https://github.com/noahsausen/Remarks"/>
      </div>
  );
}

function Project({name, thumbnail, urlApp, urlCode}) {
  const [visible, setVisible] = useState(true);

  return (
      <div className="Project" style={{backgroundImage: `url(${thumbnail})`,}} onClick={() => setVisible(!visible)} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        <div className={`ProjectOptions ${visible ? "visible" : ""}`} id={name + "Options"}>
          <p>{name}</p>
          <div className="ProjectOptionsButtons">
            <a href={urlApp} target="_blank" rel="noopener noreferrer">App</a>
            <a href={urlCode} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>
      </div>
  );
}

function Footer() {
  return (
      <p className="Footer">&copy; {new Date().getFullYear()} Noah Sausen &bull; Built with React</p>
  );
}