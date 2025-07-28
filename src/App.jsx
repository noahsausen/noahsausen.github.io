import './App.css';
import { motion } from "motion/react";
import {useState} from "react";

import githubIcon from "./assets/github.svg";
import emailIcon from "./assets/email.svg";
import instagramIcon from "./assets/instagram.svg";
import discordIcon from "./assets/discord.svg";

import remarksThumb from "./assets/remarks.png";

const motionVariants = {
  app: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2
      }
    }
  },
  sections: {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: { duration: 0.7 }
    }
  },
  heading: {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {duration: 1}
    }
  }
};

export default function App() {
  return (
    <motion.div className="App" variants={motionVariants.app} initial="hidden" animate="visible">
      <motion.div variants={motionVariants.heading}><Heading/></motion.div>
      <div className="ModContainer">
        <motion.div variants={motionVariants.sections}><Skills/></motion.div>
        <div className="ModColumn">
          <motion.div variants={motionVariants.sections}><Connect/></motion.div>
          <motion.div variants={motionVariants.sections}><Projects/></motion.div>
          <motion.div variants={motionVariants.sections}><Footer/></motion.div>
        </div>
      </div>

    </motion.div>
  );
}

function Heading() {
  return (
    <h1 className="Heading">Noah Sausen</h1>
  );
}

function Skills(){
  return (
    <div className="Skills">
      <h3>Skills</h3>
      <p>React</p>
      <p>Express</p>
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

function Connect() {
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

function Projects() {
  return (
    <div className="Projects">
      <h3>Projects</h3>
      <Project name="Remarks" thumbnail={remarksThumb} urlApp="https://remarks-app.vercel.app" urlCode="https://github.com/noahsausen/Remarks"/>
    </div>
  );
}

function Project({name, thumbnail, urlApp, urlCode}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Project" style={{backgroundImage: `url(${thumbnail})`,}} onClick={() => setVisible(!visible)} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <div className={`ProjectOptions fade-element ${visible ? "visible" : ""}`} id={name + "Options"}>
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
    <p className="Footer">© {new Date().getFullYear()} Noah Sausen • Built with React</p>
  );
}