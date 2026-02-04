import React from 'react'
import { Instagram, Github, Youtube, } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="ct">
          <div className="ct-text">
            <h1>CONTACT US</h1>
            <p>If you’ve scrolled this far, it probably means we should talk. Whether you have a project in mind, a crazy idea, or you just want to check if I actually reply—yes, I do. You can reach out to me on Instagram for quick chats and collaborations, explore my work and connect with me on GitHub, or hit me up on Discord if you want real-time conversations without the corporate vibes. I’m always open to discussing development, design, creative ideas, or building something cool from scratch. No long forms, no boring emails—just simple, direct communication. If the idea is interesting and the energy is right, we’ll make it work. So don’t overthink it—send that message and let’s build something worth flexing 🚀</p>
          </div>
          <div className="contact-links">
            <a href="https://www.instagram.com/arvind.l4k/?hl=en" target="_blank">
              <Instagram size={25} strokeWidth={1.75} />
            </a>
            <a href="https://github.com/Arvind-jsx" target="_blank">
              <Github size={25} strokeWidth={1.75} />
            </a>
            <a href="https://www.youtube.com/@Darknessdabi" target="_blank">
              <Youtube size={25} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact