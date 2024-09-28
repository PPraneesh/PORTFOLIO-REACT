import propTypes from "prop-types";
import GitHubCalendar from "react-github-calendar";
export default function About(props) {
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>About Me</h2>
      <p className={`${props.route.theme}_color about_name`}>Parshi Praneesh</p>
      <div className="post">
        <div className="intro">
          <div className="madcoder">
            <img src="/GIFs/madCoder.gif" alt="" />
            <h2>It`s me when I`m coding something.</h2>
          </div>
          <p>
          Ahh.. I love development, coding and stuff. I know the following tech stack,
          {" "}
            <span className="about-code">C</span>,{" "}
            <span className="about-code">C++</span>,{" "}
            <span className="about-code">Python</span>,{" "}
            <span className="about-code">Java</span>,{" "}
            <span className="about-code">JavaScript</span>,{" "}
            <span className="about-code">react.js</span>,{" "}
            <span className="about-code">Node.js</span>,{" "}
            <span className="about-code">Express.js</span>,{" "}
            <span className="about-code">mongodb</span>,{" "}
            <span className="about-code">ejs</span>,{" "}
            <span className="about-code">flask</span>,and{" "}
            <span className="about-code">jinja2</span>.{" \n"}
            <br />
            I`m a data science undergraduate at VNR VJIET, I try to stay updated on the
            latest tech trends. Eager to delve into machine learning, I`m open to collaborations :  )
          </p>
        </div>
        <div>
          <h2>Here`s something on which I can flex</h2>
              <p>I recently won JPMorgan Chase`s Code for good hackathon. It was an amazing experience, and I won an iPad too. So, If you want to know more about this I wrote a blog post on <a className={`code_green ${props.route.theme}_Bcolor`} href="https://www.linkedin.com/posts/parshipraneesh_codeforgood-jpmc-techforsocialgood-activity-7211003151884144641-Ibzx">Linkedin</a>.</p>
        </div>
        <div className="open-source">
          <h2>Open Source Contributions</h2>
          <p>
            I`ve contributed to open-source projects like a <a className={`code_green ${props.route.theme}_Bcolor`} href="https://vjdataquesters.vercel.app">website</a> for my college club, VJ Data Questers.
          </p>
        </div>
        <hr />
        <div className="github-calendar">
          <h2>My Github Contributions</h2>
          <GitHubCalendar
            username="PPraneesh"
            blockSize={9}
            blockMargin={5}
            errorMessage="Could not load GitHub calendar of PPraneesh"
            colorScheme="dark"        
            color="green"
            fontSize={14}
            style={{ cursor: "crosshair" }}
          />
        </div>
          <p>Thanks for stopping by!!{" "}<span className="about-code">Have a nice day :)</span></p>
      </div>  
    </>
  );
}

About.propTypes = {
  route: propTypes.object.isRequired,
};
