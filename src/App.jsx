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
          <Stack/>
          <Projects/>
          <Contact/>
          {/*<Footer/>*/}
      </main>
  );
}


// REUSABLE COMPONENTS ↓ -------------- ↓ -------------- ↓
function Prompt({children}) {
    return (
        <p className="terminal"><small>guest@home ~ %</small> {children}</p>
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

function LinkIcon({href, iconFile, children}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"><img src={iconFile} alt={children} title={children} className="link-icon"/></a>
    )
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
          <p>├─ <mark>Counselor-in-Training (2026)</mark></p>
          <p>└─ Coding Teacher</p>
          <hr/>
          <Link href="https://jellyfishbbhs.com">FTC Team 4654 Jellyfish</Link>
          <p>├─ Software Officer (26-27)</p>
          <p>└─ Programmer</p>
          <hr/>
          <Link href="https://www.instagram.com/bbhstheater">BBHS Theatre</Link>
          <p>└─ Sound Designer / Technician</p>
      </Terminal>
  )
}

function Stack() {
  return (
      <Terminal>
          <Prompt><b>stack</b></Prompt>
          <hr/>
          <p>Languages</p>
          <p>├─ Java</p>
          <p>├─ Python</p>
          <p>├─ JavaScript</p>
          <p>└─ HTML/CSS</p>
          <hr/>
          <p>Frameworks</p>
          <p>├─ FTC RobotCore</p>
          <p>└─ React</p>
          <hr/>
          <p>Tools</p>
          <p>├─ Git</p>
          <p>├─ JetBrains IDEs</p>
          <p>└─ Windows/MacOS/Linux</p>
      </Terminal>
  )
}

function Projects() {
  return (
      <Terminal>
          <Prompt><b>projects</b></Prompt>
          <hr/>
          <Link href="https://remarks-app.vercel.app">Remarks</Link>
          <p>└─ A simple text-based social media service, built with a React frontend, Express backend, MongoDB Atlas, and JWT.</p>
      </Terminal>
  );
}

function Contact() {
    return (
        <div>
            <Prompt><b>contact</b></Prompt>
            <div id="contact">
                <LinkIcon iconFile={githubIcon} href="https://github.com/noahsausen">GitHub</LinkIcon>
                <LinkIcon iconFile={emailIcon} href="mailto:noahsausen@gmail.com">Email</LinkIcon>
                <LinkIcon iconFile={instagramIcon} href="https://www.instagram.com/noahsausen">Instagram</LinkIcon>
                <LinkIcon iconFile={discordIcon} href="https://discord.com/users/990740976043704370">Discord</LinkIcon>
            </div>
        </div>
    );
}

function Footer() {
  return (
      <p className="Footer">&copy; {new Date().getFullYear()} Noah Sausen &bull; Built with React</p>
  );
}