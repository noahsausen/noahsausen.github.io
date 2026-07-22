import './App.css';

import { useState } from "react";
import TypeIt from 'typeit-react';

import githubIcon from "./assets/github.svg";
import emailIcon from "./assets/email.svg";
import instagramIcon from "./assets/instagram.svg";
import discordIcon from "./assets/discord.svg";

export default function App() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    return ( <>
        <Loader hide={show1} setHide={setShow1} />
        <Whoami showFull={show1} showOutput={show2} setShowOutput={setShow2}/>
        <Experience showFull={show2} showOutput={show3} setShowOutput={setShow3}/>
        <Stack showFull={show3} showOutput={show4} setShowOutput={setShow4}/>
        <Projects showFull={show4} showOutput={show5} setShowOutput={setShow5}/>
        <Contact showFull={show5} showOutput={show6} setShowOutput={setShow6}/>
    </> )
}


// REUSABLE COMPONENTS ↓ -------------- ↓ -------------- ↓
function Terminal({children, command, typeDelay, preTypeDelay, postTypeDelay, showFull, showOutput, setShowOutput}) {
    return showFull ? (
        <div className={showOutput ? "cursor-hidden" : ""}>
            <p><small>guest@home ~ %</small> <b><TypeIt options={{
                speed: typeDelay,
                lifeLike: true,
                cursor: true,
                cursorChar: "<span class='cursor-block'>█</span>",
                startDelay: preTypeDelay,
                afterComplete: () => setTimeout(() => setShowOutput(true), postTypeDelay)
            }}>{command}</TypeIt></b></p>
            {showOutput ? children : null}
        </div>
    ) : null
}

function Link({href, children}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    );
}

function LinkIcon({href, iconFile, children}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer"><img src={iconFile} alt={children} title={children}/></a>
    )
}


// PAGE SECTIONS ↓ -------------- ↓ -------------- ↓
function Loader({hide, setHide}) {
    return !hide ? (
        <div id="loader">
            <p>Booting...</p>
            <TypeIt options={{
                speed: 25,
                lifeLike: true,
                cursor: false,
                startDelay: 500,
                afterComplete: () => setTimeout(() => setHide(true), 500)
            }}>██████████████████</TypeIt>
        </div>
    ) : null
}

function Whoami(props) {
    return (
        <Terminal command="whoami" typeDelay={60} preTypeDelay={500} postTypeDelay={300} {...props}>
            <h1 id="name">Noah Sausen</h1>
            <p>I'm a high school student in New York building robots, websites, and software.
                I'm also interested in live sound and <Link href="https://flipper.net">pentesting</Link>.</p>
        </Terminal>
    )
}

function Experience(props) {
    return (
        <Terminal command="experience" typeDelay={50} preTypeDelay={1000} postTypeDelay={400} {...props}>
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

function Stack(props) {
  return (
      <Terminal command="stack" typeDelay={40} preTypeDelay={700} postTypeDelay={500} {...props}>
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
          <p>└─ MacOS/Linux/Windows</p>
      </Terminal>
  )
}

function Projects(props) {
    return (
        <Terminal command="projects" typeDelay={45} preTypeDelay={600} postTypeDelay={300} {...props}>
            <hr/>
            <Link href="https://remarks-app.vercel.app">Remarks</Link>
            <p>└─ A simple text-based social media service, built with a React frontend, Express backend, MongoDB Atlas, and JWT.</p>
        </Terminal>
  );
}

function Contact(props) {
    return (
        <Terminal command="contact" typeDelay={40} preTypeDelay={400} postTypeDelay={450} {...props}>
            <div id="contact">
                <LinkIcon iconFile={emailIcon} href="mailto:noahsausen@gmail.com">Email</LinkIcon>
                <LinkIcon iconFile={githubIcon} href="https://github.com/noahsausen">GitHub</LinkIcon>
                <LinkIcon iconFile={instagramIcon} href="https://www.instagram.com/noahsausen">Instagram</LinkIcon>
                <LinkIcon iconFile={discordIcon} href="https://discord.com/users/990740976043704370">Discord</LinkIcon>
            </div>
        </Terminal>
    );
}

// function Footer() {
//   return (
//       <p id="footer">&copy; {new Date().getFullYear()} Noah Sausen &bull; Built with React</p>
//   );
// }