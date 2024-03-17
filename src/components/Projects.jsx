import PropTypes from "prop-types";
export default function Projects(props) {
  let projectDetails = [
    {
      name: "Spotify Duplicates",
      description:
        "The JavaScript file powers a web-based music player application, offering an interactive interface for users to play, pause, skip, and queue songs. It manages a collection of songs stored in a database, enabling users to search for specific tracks and create a queue for continuous playback.",
      linkFiles: "https://github.com/PPraneesh/SpotifyDuplicates",
      linkProject: "https://ppraneesh.github.io/SpotifyDuplicates/",
    },
    {
      name: "The A-Z Proj",
      description:
        "Explore my Amazon replica, a Node.js and Express.js marvel with EJS, CSS, and HTML. Unveil diverse e-commerce functionalities in this concise showcase of innovation. Welcome to an immersive online shopping experience!",
      linkFiles: "https://github.com/PPraneesh/The_A-Z_Proj",
      linkProject: "https://a-z-project.glitch.me/",
    },
    {
      name: "CYBER-SECURITY CHATBOT",
      description:
        "This is a simple web-based chatbot for providing cybersecurity guidance and answering security-related questions in real-time. It uses the GPT-3.5 Turbo model from OpenAI to generate responses to user inputs.",
      linkFiles: "https://github.com/PPraneesh/ChatBot",
      linkProject: "https://parshipraneesh.pythonanywhere.com/",
    },
    {
      name: "EXPENSE TRACKER",
      description:
        "Effortlessly manage expenses with my user-friendly Expense Tracker. Track income, expenses, and balance, and delete entries seamlessly for a streamlined financial overview.",
      linkFiles: "https://github.com/PPraneesh/expenseTracker",
      linkProject: "https://ppraneesh.github.io/expenseTracker/",
    },
    {
      name: "PORTFOLIO",
      description:
        "Discover my skills in a sleek portfolio built with EJS, Node.js, CSS, and JavaScript. Explore engaging projects, dive into my expertise, and connect for opportunities. Your gateway to my creative and technical world!",
      linkFiles: "https://github.com/PPraneesh/portfolio",
      linkProject: "https://parshipraneesh.me",
    },
  ];
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>My Projects</h2>
      <p className={`${props.route.theme}_color`}>Parshi :: 3 min read</p>
      <p>Here are some projects which I made :)</p>
      {projectDetails.map((projectDetails, i) => {
        return (
          <div className="project" key={i}>
            <h2 className="<%=theme%>_color">{projectDetails.name}</h2>
            <p>{projectDetails.description}</p>
            <a href={projectDetails.linkProject}>
              <button className={`buttons ${props.route.theme}_Bcolor`}>
                View Project
              </button>
            </a>{" "}
            <a href={projectDetails.linkFiles}>
              <button className={`buttons ${props.route.theme}_Bcolor`}>
                View Project Files
              </button>
            </a>
          </div>
        );
      })}
    </>
  );
}

Projects.propTypes = {
  route: PropTypes.object.isRequired,
};