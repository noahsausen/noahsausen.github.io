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
        <Prompt/>
        <Heading/>
        <Bio/>
        <WhatIDo/>
        <Languages/>
        <Connect/>
        <Footer/>
      </main>
  );
}

function Prompt() {
  return (
      <p className="terminal">hello@web ~ % whoami</p>
  )
}

function Heading() {
  return (
      <h1 className="heading">Noah Sausen</h1>
  )
}

function Bio() {
  return (
      <p className="terminal">I'm a high school student in Rye Brook, NY aspiring to be a software engineer.
        I'm also interested in live sound and <a href="https://flipper.net" target="_blank" rel="noopener noreferrer">pentesting</a>.</p>
  );
}

function WhatIDo() {
  return (
      <div className="terminal">
        <p>hello@web ~ % ls <b>experience</b></p>
        <p>SummerTech/</p>
        <p>├── Coding Teacher</p>
        <p>└── <mark>CIT Summer 2026</mark></p>
        {/*<p><b>What I Do</b></p>*/}
        {/*<ul>*/}
        {/*    <li><mark>Currently: Coding Teacher @ <a href="https://www.summertech.net" target="_blank" rel="noopener noreferrer">SummerTech</a></mark></li>*/}
        {/*    <li>Softwar4e Officer @ <a href="https://jellyfishbbhs.com" target="_blank" rel="noopener noreferrer">FTC Team 4654 Jellyfish</a></li>*/}
        {/*    <li>Sound Designer @ <a href="https://www.instagram.com/bbhstheater" target="_blank" rel="noopener noreferrer">BBHS Theatre</a></li>*/}
        {/*</ul>*/}
      </div>
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