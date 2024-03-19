import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
export default function Header(props) {
  let location = useLocation();
  useEffect(() => {
    handleRouteChange(location.pathname);
  }, [location.pathname]);

  function handleRouteChange(pathname) {
    switch (pathname) {
      case "/":
        props.setRoute({
          loc: "C:\\home>",
          theme: "yellow",
        });
        break;
      case "/about":
        props.setRoute({
          loc: "C:\\home\\about>",
          theme: "green",
        });
        break;
      case "/blogs":
        props.setRoute({
          loc: "C:\\home\\blogs>",
          theme: "yellow",
        });
        break;
      case "/projects":
        props.setRoute({
          loc: "C:\\home\\projects>",
          theme: "red",
        });
        break;
      case "/resume":
        props.setRoute({
          loc: "C:\\home\\resume>",
          theme: "green",
        });
        break;
      default:
        break;
    }
  }

  function handleLinkEnter(locString) {
    let newLoc = props.route.loc + ` cd ${locString}`;
    props.setRoute({
      ...props.route,
      loc: newLoc,
    });
  }

  function handleMouseLeave() {
    let originalLoc = props.route.loc.split(" cd ")[0];
    props.setRoute({
      ...props.route,
      loc: originalLoc,
    });
  }

  return (
    <>
      <div className="header">
        <div className="head">
          <div className={`repeat_${props.route.theme}`}>
            <div id="loc" className={`logo ${props.route.theme}`}>
              {props.route.loc}
            </div>
          </div>
        </div>
        <ul className="list">
          <Link className="link" to="">
            <span
              onMouseEnter={() => handleLinkEnter("..")}
              onMouseLeave={handleMouseLeave}
            >
              /home
            </span>
          </Link>
          <Link className="link" to="about">
            <span
              onMouseEnter={() => handleLinkEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              About me
            </span>
          </Link>
          <div className="dropdown">
            <span className={`dropbtn ${props.route.theme}_color link`}>
              Show more ▾
            </span>
            <div className="dropdown-content">
              <Link className="link" to="blogs">
                <span
                  onMouseEnter={() => handleLinkEnter("blogs")}
                  onMouseLeave={handleMouseLeave}
                >
                  Blogs
                </span>
              </Link>
              <Link className="link" to="projects">
                <span
                  onMouseEnter={() => handleLinkEnter("projects")}
                  onMouseLeave={handleMouseLeave}
                >
                  My Projects
                </span>
              </Link>
              <Link className="link" to="resume">
                <span
                  onMouseEnter={() => handleLinkEnter("resume")}
                  onMouseLeave={handleMouseLeave}
                >
                  My resume
                </span>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

Header.propTypes = {
  route: PropTypes.object.isRequired,
  setRoute: PropTypes.func.isRequired,
};
