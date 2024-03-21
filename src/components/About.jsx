import propTypes from "prop-types";
import GitHubCalendar from "react-github-calendar";
export default function About(props) {
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>About Me</h2>
      <p className={`${props.route.theme}_color about_name`}>Parshi Praneesh</p>
      <div className="post">
        <h2>Allow Me To Introduce Myself</h2>
        <p style={{ textAlign: "justify" }}>
          Heya I`m Parshi Praneesh, a web developer with expertise in languages
          like
          <span className="about-code">C</span>,{" "}
          <span className="about-code">C++</span>,{" "}
          <span className="about-code">JavaScript</span>,{" "}
          <span className="about-code">react.js</span>,{" "}
          <span className="about-code">Java</span>, and{" "}
          <span className="about-code">Python</span>. In a notable hackathon, my
          team mastered Python for web development in a day and built a winning
          chatbot with GPT-3.5`s API and MongoDB in just two days.
          <br />
          <br />
          As a data science undergraduate at VNR VJIET, I stay updated on the
          latest tech trends, blending my passion for technology with a knack
          for replicating websites with precision. Eager to delve into machine
          learning, I`m open to collaborations to create exceptional websites.
          Let`s explore the possibilities together!
          <br />
          <br />
          <h2>My Github Contributions</h2>
          <GitHubCalendar
            username="PPraneesh"
            blockSize={9}
            blockMargin={5}
            errorMessage="Could not load GitHub calendar of PPraneesh"
            color="green"
            fontSize={14}
            style={{ cursor: "crosshair" }}
          />
          Thanks for stopping by!!{" "}
          <span className="about-code">Have a nice day :)</span>
        </p>
      </div>
    </>
  );
}

About.propTypes = {
  route: propTypes.object.isRequired,
};
