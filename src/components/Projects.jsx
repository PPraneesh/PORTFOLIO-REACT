import PropTypes from "prop-types";
import { useState } from "react";
export default function Projects(props) {
  let projectDetails = [
    {
      name: "The Coder Companion",
      description: "The Coder Companion: Your gateway to intuitive programming mastery. With AI assistance and a user-friendly interface, embark on an efficient journey to tackle coding challenges with confidence.",
      linkFiles: "https://github.com/PPraneesh/theCoderCompanion",
      linkProject: "https://the-coder-companion.vercel.app/"
    }, {
      name: "NextPad",
      description: "NextPad revolutionizes the writing experience, empowering authors with unprecedented control to edit, adjust visibility, and unleash their creativity seamlessly. Welcome to the future of writing, where freedom and flexibility reign supreme.",
      linkFiles: "https://github.com/PPraneesh/NextPad",
      linkProject: "https://nextpad.vercel.app/"
    },
    {
      name: "The A-Z Proj",
      description:
        "Explore my Amazon replica, a Node.js and Express.js marvel with EJS, CSS, and HTML. Unveil diverse e-commerce functionalities in this concise showcase of innovation. Welcome to an immersive online shopping experience!",
      linkFiles: "https://github.com/PPraneesh/The_A-Z_Proj",
      linkProject: "https://a-z-project.glitch.me/",
    },
    {
      name: "EXPENSE TRACKER",
      description:
        "Effortlessly manage expenses with my user-friendly Expense Tracker. Track income, expenses, and balance, and delete entries seamlessly for a streamlined financial overview.",
      linkFiles: "https://github.com/PPraneesh/expenseTracker",
      linkProject: "https://ppraneesh.github.io/expenseTracker/",
    },
    {
      name: "CYBER-SECURITY CHATBOT",
      description:
        "This is a simple web-based chatbot for providing cybersecurity guidance and answering security-related questions in real-time. It uses the GPT-3.5 Turbo model from OpenAI to generate responses to user inputs.",
      linkFiles: "https://github.com/PPraneesh/ChatBot",
      linkProject: "https://parshipraneesh.pythonanywhere.com/",
    },
    {
      name: "Spotify Duplicates",
      description:
        "The JavaScript file powers a web-based music player application, offering an interactive interface for users to play, pause, skip, and queue songs. It manages a collection of songs stored in a database, enabling users to search for specific tracks and create a queue for continuous playback.",
      linkFiles: "https://github.com/PPraneesh/SpotifyDuplicates",
      linkProject: "https://ppraneesh.github.io/SpotifyDuplicates/",
    },
  ];

  const [SMToggler, setSMToggler] = useState(false)
  let projects = SMToggler ? projectDetails : projectDetails.slice(0, 3);
  const showMoreHandler = () => {
    setSMToggler(!SMToggler)
  }
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>My Projects</h2>
      <p className={`${props.route.theme}_color`}>Parshi :: 3 min read</p>
      <p>Here are some projects which I made :)</p>
      {projects.map((projectDetails, i) => {
        return (
          <div className="project" key={i}>
            <h2 className="<%=theme%>_color">{projectDetails.name}</h2>
            <p>{projectDetails.description}</p>

            <div className="proj-buttons">
                <button className={`buttons ${props.route.theme}_Bcolor`}>
              <a href={projectDetails.linkProject}>
                  View Project
              </a>
                </button>
                {" "}
                <button className={`buttons ${props.route.theme}_Bcolor`}>
              <a href={projectDetails.linkFiles}>
                  View Project Files
              </a>
                </button>
            </div>
          </div>
        );
      })}
      <button className={`SM-button`} onClick={showMoreHandler}>
        {SMToggler ? "Show less" : "Show More"}
      </button>
    </>
  );
}

Projects.propTypes = {
  route: PropTypes.object.isRequired,
};