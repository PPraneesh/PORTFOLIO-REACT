import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useEffect } from "react";

export default function Home() {
  const toast = Toastify({
    text: "Check out the new projects page!",
    duration: 5000,
    destination: "/projects",
    newWindow: false,
    close: true,
    gravity: "top", 
    position: "right", 
    stopOnFocus: true, 
    style: {
      background: "rgb(34, 33, 41)",
      display: "flex",
      opacity: 0.9,
      justifyContent: "center",
      gap: "1rem",
      fontSize: "1rem",
      padding: "1rem",
      maxWidth: "12rem",
    },
  });
  
  useEffect(() => {
  toast.showToast();
}, []);
  return (
    <>
      <div className="content">
        <div className="hello">
          <h1>Hey There!! I`m Praneesh</h1>
          <p>
            Welcome to my digital space! I`m Praneesh, a web developer
            proficient in languages like {" "}
          <span className="code">C</span>,{" "}
          <span className="code">C++</span>,{" "}
          <span className="code">Python</span>,{" "}
          <span className="code">Java</span>,{" "}
          <span className="code">JavaScript</span>,{" "}
          <span className="code">react.js</span>,{" "}
          <span className="code">Node.js</span>,{" "}
          <span className="code">Express.js</span>,{" "}
          <span className="code">mongodb</span>,{" "}
          <span className="code">ejs</span>,{" "}
          <span className="code">flask</span>,and{" "}
          <span className="code">jinja2</span>.{" "} With a keen eye for precision,
            I specialize in replicating websites with exacting detail.
          </p>
          <h2>Passion for Technology:</h2>
          <p>
            Beyond coding, I am passionate about staying at the forefront of
            tech innovations. In my free time, I immerse myself in tech news and
            optimistic science videos, reflecting my commitment to continuous
            learning.
          </p>
        </div>
      </div>
    </>
  );
}
