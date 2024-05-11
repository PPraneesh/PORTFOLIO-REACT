import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

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
  const articles = [{
    title: "bloom filter - a data structure",
    desc: "A data structure that lies..",
    link: "https://samwho.dev/bloom-filters/",
    imgUrl: "https://img.icons8.com/glyph-neue/100/FFFFFF/parallel-tasks.png"
  }, {
    title: "do lava lamps encrypt?",
    desc: "How random is your computer?",
    link: "https://www.cloudflare.com/en-gb/learning/ssl/lava-lamp-encryption/",
    imgUrl: "https://img.icons8.com/ios/100/FFFFFF/lock--v1.png"
  }, {
    title: "The Internet Protocols",
    desc: "The handshakes and the packets",
    link: "https://dev.to/scofieldidehen/what-happens-when-you-visit-a-website-dj8",
    imgUrl: "https://img.icons8.com/ios/50/FFFFFF/internet--v1.png"
  }]
  return (
    <>
      <div className="content">
        <div className="hello">
          <h1>Hey There!!</h1>
          <TypeAnimation
            sequence={[
              'I`m Praneesh',
              3000,
              'I`m an Undergrad',
              2500,
              'I`m a Web Developer',
              2500,
              'I`m an ML enthusiast',
              2500
            ]}
            className='type-animation'
            wrapper="span"
            speed={30}
            style={{ fontSize: '2rem' }}
            repeat={Infinity}
          />
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
        <div className="articles">
          <h2>Few articles which I read in recent times...</h2>
          {articles.map((article,index) => {
            return (
              <div className='article' key={index}>
                <div>
                  <a href={article.link} target='_blank'>
                    <h3>{article.title}</h3>
                  </a>
                  <p>{article.desc}</p>
                </div>
                <div>
                  <img src={article.imgUrl} alt="private2" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
